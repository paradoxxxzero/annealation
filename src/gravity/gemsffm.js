export default class FMMGemsGravity {
  constructor(len) {
    this.len = len
    this.positions = new Float32Array(3 * this.len)
    this.masses = new Float32Array(this.len)
    this.temperatures = new Float32Array(this.len)
    this.speeds = new Float32Array(3 * this.len)
    this.accelerations = new Float32Array(3 * this.len)

    // Temp alloc optim
    this.buffer = new Float32Array(this.len * 3)

    // Consts
    this.numExpansions = 10 // order of expansion in FMM
    this.maxP2PInteraction = 27 // max of P2P interacting boxes
    this.maxM2LInteraction = 189 // max of M2L interacting boxes
    this.numRelativeBox = 512 // max of relative box positioning
    this.targetBufferSize = 200000 // max of GPU target buffer
    this.sourceBufferSize = 100000 // max of GPU source buffer
    this.threadsPerBlockTypeA = 128 // size of GPU thread block P2P
    this.threadsPerBlockTypeB = 64 // size of GPU thread block M2L

    // Allocs once
    this.mortonIndex = new Uint32Array(this.len)
    this.sortValue = new Uint32Array(this.len)
    this.permutation = new Uint32Array(this.len)
    this.sortIndex = new Uint32Array(this.len)
    this.sortValueBuffer = new Uint32Array(this.len)
    this.sortIndexBuffer = new Uint32Array(this.len)
    this.boxMin = {
      x: 0,
      y: 0,
      z: 0,
    }
    this.numBoxIndex = 0
    this.numBoxIndexFull = 0
    this.numBoxIndexLeaf = 0
    this.numBoxIndexTotal = 0
    this.maxLevel = 0

    // Dynamic Allocs
    this.particleOffset = null
    this.particleOffset2 = null
    this.boxIndexMask = null
    this.boxIndexFull = null
    this.levelOffset = null
    this.numInteraction = null
    this.interactionList = null
    this.boxOffsetStart = null
    this.boxOffsetEnd = null
  }

  allocate() {
    this.particleOffset = new Uint32Array(this.numBoxIndexLeaf)
    this.particleOffset2 = new Uint32Array(this.numBoxIndexLeaf)
    this.boxIndexMask = new Uint32Array(this.numBoxIndexFull)
    this.boxIndexFull = new Uint32Array(this.numBoxIndexTotal)
    this.levelOffset = new Uint32Array(this.maxLevel)
    this.numInteraction = new Uint32Array(this.numBoxIndexLeaf)
    this.interactionList = new Array(this.numBoxIndexLeaf)
      .fill()
      .map(() => new Array(this.maxM2LInteraction).fill(0))
    this.boxOffsetStart = new Uint32Array(this.numBoxIndexLeaf)
    this.boxOffsetEnd = new Uint32Array(this.numBoxIndexLeaf)
  }

  // Generate Morton index from particle coordinates
  morton() {
    const boxSize = this.rootBoxSize / (1 << this.maxLevel)

    for (var j = 0; j < this.len; j++) {
      var nx = ~~((this.positions[j * 3] - this.boxMin.x) / boxSize)
      var ny = ~~((this.positions[j * 3 + 1] - this.boxMin.y) / boxSize)
      var nz = ~~((this.positions[j * 3 + 2] - this.boxMin.z) / boxSize)
      if (nx >= 1 << this.maxLevel) nx--
      if (ny >= 1 << this.maxLevel) ny--
      if (nz >= 1 << this.maxLevel) nz--
      var boxIndex = 0
      for (var i = 0; i < this.maxLevel; i++) {
        boxIndex += nx % 2 << (3 * i + 1)
        nx >>= 1

        boxIndex += ny % 2 << (3 * i)
        ny >>= 1

        boxIndex += nz % 2 << (3 * i + 2)
        nz >>= 1
      }
      this.mortonIndex[j] = boxIndex
    }
  }

  // Generate Morton index for a box center to use in M2L translation
  morton1(boxIndex3D, numLevel) {
    var i,
      nx,
      ny,
      nz,
      boxIndex = 0
    for (i = 0; i < numLevel; i++) {
      nx = boxIndex3D.x % 2
      boxIndex3D.x >>= 1
      boxIndex += nx * (1 << (3 * i + 1))

      ny = boxIndex3D.y % 2
      boxIndex3D.y >>= 1
      boxIndex += ny * (1 << (3 * i))

      nz = boxIndex3D.z % 2
      boxIndex3D.z >>= 1
      boxIndex += nz * (1 << (3 * i + 2))
    }
    return boxIndex
  }

  // Returns 3D box index from Morton index
  unmorton(boxIndex, boxIndex3D) {
    var i,
      j,
      mortonIndex3D = [0, 0, 0]

    var n = boxIndex,
      k = 0

    i = 0
    while (n != 0) {
      j = 2 - k
      mortonIndex3D[j] += (n % 2) * (1 << i)
      n >>= 1
      k = (k + 1) % 3
      if (k == 0) i++
    }
    boxIndex3D.x = mortonIndex3D[1]
    boxIndex3D.y = mortonIndex3D[2]
    boxIndex3D.z = mortonIndex3D[0]
  }

  setDomainSize() {
    // Initialize the minimum and maximum values
    var xmin = 1000000,
      xmax = -1000000,
      ymin = 1000000,
      ymax = -1000000,
      zmin = 1000000,
      zmax = -1000000
    // Calculate the minimum and maximum of particle positions
    for (var i = 0; i < this.len; i++) {
      xmin = Math.min(xmin, this.positions[i * 3])
      xmax = Math.max(xmax, this.positions[i * 3])
      ymin = Math.min(ymin, this.positions[i * 3 + 1])
      ymax = Math.max(ymax, this.positions[i * 3 + 1])
      zmin = Math.min(zmin, this.positions[i * 3 + 2])
      zmax = Math.max(zmax, this.positions[i * 3 + 2])
    }
    this.boxMin.x = xmin
    this.boxMin.y = ymin
    this.boxMin.z = zmin
    // Calculat the domain size
    this.rootBoxSize = 0
    this.rootBoxSize = Math.max(this.rootBoxSize, xmax - xmin)
    this.rootBoxSize = Math.max(this.rootBoxSize, ymax - ymin)
    this.rootBoxSize = Math.max(this.rootBoxSize, zmax - zmin)
    this.rootBoxSize *= 1.00001 // Keep particle on the edge from falling out
  }

  setOptimumLevel() {
    // const level_switch = [2e4, 1.7e5, 1.3e6, 1e7, 7e7, 5e8] // cpu-tree
    // const level_switch = [1.3e4, 1e5, 7e5, 5e6, 3e7, 1.5e8] // cpu-fmm
    // const level_switch = [1e5, 5e5, 5e6, 3e7, 2e8, 1.5e9] // gpu-tree
    const level_switch = [1e5, 7e5, 7e6, 5e7, 3e8, 2e9] // gpu-fmm

    this.maxLevel = 1
    if (this.len < level_switch[0]) {
      this.maxLevel += 1
    } else if (this.len < level_switch[1]) {
      this.maxLevel += 2
    } else if (this.len < level_switch[2]) {
      this.maxLevel += 3
    } else if (this.len < level_switch[3]) {
      this.maxLevel += 4
    } else if (this.len < level_switch[4]) {
      this.maxLevel += 5
    } else if (this.len < level_switch[5]) {
      this.maxLevel += 6
    } else {
      this.maxLevel += 7
    }
    this.numBoxIndexFull = 1 << (3 * this.maxLevel)
  }
  // Prepare for binning particles by first sorting the Morton index
  sort() {
    var i

    for (i = 0; i < this.numBoxIndexFull; i++) {
      this.sortIndexBuffer[i] = 0
    }
    for (i = 0; i < this.len; i++) {
      this.sortIndexBuffer[this.sortValue[i]]++
    }
    for (i = 1; i < this.numBoxIndexFull; i++) {
      this.sortIndexBuffer[i] += this.sortIndexBuffer[i - 1]
    }
    for (i = this.len - 1; i >= 0; i--) {
      this.sortIndexBuffer[this.sortValue[i]]--
      this.sortValueBuffer[
        this.sortIndexBuffer[this.sortValue[i]]
      ] = this.sortValue[i]
      this.sortIndex[this.sortIndexBuffer[this.sortValue[i]]] = i
    }
    for (i = 0; i < this.len; i++) {
      this.sortValue[i] = this.sortValueBuffer[i]
    }
  }
  sortParticles() {
    var i

    this.morton(this.len)
    for (i = 0; i < this.len; i++) {
      this.sortValue[i] = this.mortonIndex[i]
      this.sortIndex[i] = i
    }
    this.sort(this.len)
    for (i = 0; i < this.len; i++) {
      this.permutation[i] = this.sortIndex[i]
    }
    for (i = 0; i < this.len; i++) {
      this.buffer[i * 3] = this.positions[this.permutation[i] * 3]
      this.buffer[i * 3 + 1] = this.positions[this.permutation[i] * 3 + 1]
      this.buffer[i * 3 + 2] = this.positions[this.permutation[i] * 3 + 2]
    }
    for (i = 0; i < this.len; i++) {
      this.positions[i * 3] = this.buffer[i * 3]
      this.positions[i * 3 + 1] = this.buffer[i * 3 + 1]
      this.positions[i * 3 + 2] = this.buffer[i * 3 + 2]
    }
  }

  unsortParticles() {
    var i

    for (i = 0; i < this.len; i++) {
      this.buffer[this.permutation[i] * 3] = this.accelerations[i * 3]
      this.buffer[this.permutation[i] * 3 + 1] = this.accelerations[i * 3 + 1]
      this.buffer[this.permutation[i] * 3 + 2] = this.accelerations[i * 3 + 2]
    }
    for (i = 0; i < this.len; i++) {
      this.accelerations[i * 3] = this.buffer[i * 3]
      this.accelerations[i * 3 + 1] = this.buffer[i * 3 + 1]
      this.accelerations[i * 3 + 2] = this.buffer[i * 3 + 2]
    }
    for (i = 0; i < this.len; i++) {
      this.buffer[this.permutation[i] * 3] = this.positions[i * 3]
      this.buffer[this.permutation[i] * 3 + 1] = this.positions[i * 3 + 1]
      this.buffer[this.permutation[i] * 3 + 2] = this.positions[i * 3 + 2]
    }
    for (i = 0; i < this.len; i++) {
      this.positions[i * 3] = this.buffer[i * 3]
      this.positions[i * 3 + 1] = this.buffer[i * 3 + 1]
      this.positions[i * 3 + 2] = this.buffer[i * 3 + 2]
    }
  }

  countNonEmptyBoxes() {
    this.morton(this.len)
    for (i = 0; i < this.len; i++) {
      this.sortValue[i] = this.mortonIndex[i]
      this.sortIndex[i] = i
    }
    this.sort(this.len)

    // Count non-empty boxes at leaf level
    this.numBoxIndexLeaf = 0 // counter
    var currentIndex = -1
    for (var i = 0; i < this.len; i++) {
      if (this.sortValue[i] != currentIndex) {
        this.numBoxIndexLeaf++
        currentIndex = this.sortValue[i]
      }
    }

    // Count non-empty boxes for all levels
    this.numBoxIndexTotal = this.numBoxIndexLeaf
    for (var numLevel = this.maxLevel - 1; numLevel >= 2; numLevel--) {
      currentIndex = -1
      for (i = 0; i < this.len; i++) {
        if (
          this.sortValue[i] / (1 << (3 * (this.maxLevel - numLevel))) !=
          currentIndex
        ) {
          this.numBoxIndexTotal++
          currentIndex =
            this.sortValue[i] / (1 << (3 * (this.maxLevel - numLevel)))
        }
      }
    }
  }

  getBoxData() {
    this.morton(this.len)

    this.numBoxIndex = 0
    var currentIndex = -1
    for (var i = 0; i < this.numBoxIndexFull; i++) {
      this.boxIndexMask[i] = -1
    }
    for (i = 0; i < this.len; i++) {
      if (this.mortonIndex[i] != currentIndex) {
        this.boxIndexMask[this.mortonIndex[i]] = this.numBoxIndex
        this.boxIndexFull[this.numBoxIndex] = this.mortonIndex[i]
        this.particleOffset[this.numBoxIndex] = i
        if (this.numBoxIndex > 0) {
          this.particleOffset2[this.numBoxIndex - 1] = i - 1
        }
        currentIndex = this.mortonIndex[i]
        this.numBoxIndex++
      }
    }
    this.particleOffset2[this.numBoxIndex - 1] = this.len - 1
  }

  getInteractionList(numLevel, interactionType) {
    var jxmin,
      jxmax,
      jymin,
      jymax,
      jzmin,
      jzmax,
      ii,
      ib,
      jj,
      jb,
      ix,
      iy,
      iz,
      jx,
      jy,
      jz,
      boxIndex
    var ixp, iyp, izp, jxp, jyp, jzp
    var boxIndex3D = { x: 0, y: 0, z: 0 }

    // Initialize the minimum and maximum values
    jxmin = 1000000
    jxmax = -1000000
    jymin = 1000000
    jymax = -1000000
    jzmin = 1000000
    jzmax = -1000000
    // Calculate the minimum and maximum of boxIndex3D
    for (jj = 0; jj < this.numBoxIndex; jj++) {
      jb = jj + this.levelOffset[numLevel - 1]
      this.unmorton(this.boxIndexFull[jb], boxIndex3D)
      jxmin = Math.min(jxmin, boxIndex3D.x)
      jxmax = Math.max(jxmax, boxIndex3D.x)
      jymin = Math.min(jymin, boxIndex3D.y)
      jymax = Math.max(jymax, boxIndex3D.y)
      jzmin = Math.min(jzmin, boxIndex3D.z)
      jzmax = Math.max(jzmax, boxIndex3D.z)
    }
    // P2P
    if (interactionType == 0) {
      for (ii = 0; ii < this.numBoxIndex; ii++) {
        ib = ii + this.levelOffset[numLevel - 1]
        this.numInteraction[ii] = 0
        this.unmorton(this.boxIndexFull[ib], boxIndex3D)
        ix = boxIndex3D.x
        iy = boxIndex3D.y
        iz = boxIndex3D.z
        for (
          jx = Math.max(ix - 1, jxmin);
          jx <= Math.min(ix + 1, jxmax);
          jx++
        ) {
          for (
            jy = Math.max(iy - 1, jymin);
            jy <= Math.min(iy + 1, jymax);
            jy++
          ) {
            for (
              jz = Math.max(iz - 1, jzmin);
              jz <= Math.min(iz + 1, jzmax);
              jz++
            ) {
              boxIndex3D.x = jx
              boxIndex3D.y = jy
              boxIndex3D.z = jz
              boxIndex = this.morton1(boxIndex3D, numLevel)
              jj = this.boxIndexMask[boxIndex]
              if (jj != -1) {
                this.interactionList[ii][this.numInteraction[ii]] = jj
                this.numInteraction[ii]++
              }
            }
          }
        }
      }
      // M2L at level 2
    } else if (interactionType == 1) {
      for (ii = 0; ii < this.numBoxIndex; ii++) {
        ib = ii + this.levelOffset[numLevel - 1]
        this.numInteraction[ii] = 0
        this.unmorton(this.boxIndexFull[ib], boxIndex3D)
        ix = boxIndex3D.x
        iy = boxIndex3D.y
        iz = boxIndex3D.z
        for (jj = 0; jj < this.numBoxIndex; jj++) {
          jb = jj + this.levelOffset[numLevel - 1]
          this.unmorton(this.boxIndexFull[jb], boxIndex3D)
          jx = boxIndex3D.x
          jy = boxIndex3D.y
          jz = boxIndex3D.z
          if (
            jx < ix - 1 ||
            ix + 1 < jx ||
            jy < iy - 1 ||
            iy + 1 < jy ||
            jz < iz - 1 ||
            iz + 1 < jz
          ) {
            this.interactionList[ii][this.numInteraction[ii]] = jj
            this.numInteraction[ii]++
          }
        }
      }
      // M2L at lower levels
    } else if (interactionType == 2) {
      for (ii = 0; ii < this.numBoxIndex; ii++) {
        ib = ii + this.levelOffset[numLevel - 1]
        this.numInteraction[ii] = 0
        this.unmorton(this.boxIndexFull[ib], boxIndex3D)
        ix = boxIndex3D.x
        iy = boxIndex3D.y
        iz = boxIndex3D.z
        ixp = (ix + 2) / 2
        iyp = (iy + 2) / 2
        izp = (iz + 2) / 2
        for (jxp = ixp - 1; jxp <= ixp + 1; jxp++) {
          for (jyp = iyp - 1; jyp <= iyp + 1; jyp++) {
            for (jzp = izp - 1; jzp <= izp + 1; jzp++) {
              for (
                jx = Math.max(2 * jxp - 2, jxmin);
                jx <= Math.min(2 * jxp - 1, jxmax);
                jx++
              ) {
                for (
                  jy = Math.max(2 * jyp - 2, jymin);
                  jy <= Math.min(2 * jyp - 1, jymax);
                  jy++
                ) {
                  for (
                    jz = Math.max(2 * jzp - 2, jzmin);
                    jz <= Math.min(2 * jzp - 1, jzmax);
                    jz++
                  ) {
                    if (
                      jx < ix - 1 ||
                      ix + 1 < jx ||
                      jy < iy - 1 ||
                      iy + 1 < jy ||
                      jz < iz - 1 ||
                      iz + 1 < jz
                    ) {
                      boxIndex3D.x = jx
                      boxIndex3D.y = jy
                      boxIndex3D.z = jz
                      boxIndex = this.morton1(boxIndex3D, numLevel)
                      jj = this.boxIndexMask[boxIndex]
                      if (jj != -1) {
                        this.interactionList[ii][this.numInteraction[ii]] = jj
                        this.numInteraction[ii]++
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  direct(G, softening2) {
    var i,
      j,
      invDist,
      invDistCube,
      ai,
      dist = { x: 0, y: 0, z: 0 }

    for (i = 0; i < this.len; i++) {
      ai = { x: 0, y: 0, z: 0 }
      for (j = 0; j < this.len; j++) {
        dist.x = this.positions[i * 3] - this.positions[j * 3]
        dist.y = this.positions[i * 3 + 1] - this.positions[j * 3 + 1]
        dist.z = this.positions[i * 3 + 2] - this.positions[j * 3 + 2]
        invDist =
          1.0 /
          Math.sqrt(
            dist.x * dist.x + dist.y * dist.y + dist.z * dist.z + softening2
          )
        invDistCube = this.masses[j] * invDist * invDist * invDist
        ai.x -= dist.x * invDistCube
        ai.y -= dist.y * invDistCube
        ai.z -= dist.z * invDistCube
      }
      this.accelerations[i * 3] += G * ai.x
      this.accelerations[i * 3 + 1] += G * ai.y
      this.accelerations[i * 3 + 2] += G * ai.z
    }
  }

  sum(G, is, ie, js, je, softening2) {
    var dx, dy, dz, ax, ay, az
    for (var i = is; i <= ie; i++) {
      ax = 0
      ay = 0
      az = 0
      for (var j = js; j <= je; j++) {
        dx = this.positions[i * 3] - this.positions[j * 3]
        dy = this.positions[i * 3 + 1] - this.positions[j * 3 + 1]
        dz = this.positions[i * 3 + 2] - this.positions[j * 3 + 2]
        var invDist = 1 / Math.sqrt(dx * dx + dy * dy + dz * dz + softening2)
        var s = this.masses[j] * invDist * invDist * invDist
        ax -= dx * s
        ay -= dy * s
        az -= dz * s
      }
      this.accelerations[i * 3] += G * ax
      this.accelerations[i * 3 + 1] += G * ay
      this.accelerations[i * 3 + 2] += G * az
    }
  }

  p2p(G, softening2) {
    var ii, ij, jj

    for (ii = 0; ii < this.numBoxIndex; ii++) {
      for (ij = 0; ij < this.numInteraction[ii]; ij++) {
        jj = this.interactionList[ii][ij]

        var is = this.particleOffset[ii],
          ie = this.particleOffset2[ii],
          js = this.particleOffset[jj],
          je = this.particleOffset2[jj]
        this.sum(G, is, ie, js, je, softening2)
      }
    }
  }
  frog_leap(dt) {
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      for (var k = 0; k < 3; k++) {
        this.speeds[i * 3 + k] += this.accelerations[i * 3 + k] * half_dt
        this.positions[i * 3 + k] += this.speeds[i * 3 + k] * dt
      }
    }
  }
  simulate(G, softening) {
    // this.direct(G, softening * softening)
    this.setDomainSize()
    this.setOptimumLevel()
    this.sortParticles()
    this.countNonEmptyBoxes()
    this.allocate()

    let numLevel = this.maxLevel
    this.levelOffset[numLevel - 1] = 0
    // TODO this.precalc() // kernel
    this.getBoxData()

    this.getInteractionList(numLevel, 0)

    for (var i = 0; i < this.len; i++) {
      this.accelerations[i * 3] = 0
      this.accelerations[i * 3 + 1] = 0
      this.accelerations[i * 3 + 2] = 0
    }
    this.p2p(G, softening * softening)

    this.unsortParticles()
    return this.len
  }

  frog_drop(dt) {
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      for (var k = 0; k < 3; k++) {
        this.speeds[i * 3 + k] += this.accelerations[i * 3 + k] * half_dt
      }
    }
  }

  free() {
    delete this.positions
    delete this.masses
    delete this.temperatures
    delete this.speeds
    delete this.acceleration
  }
}
