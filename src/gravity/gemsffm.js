export default class FMMGemsGravity {
  constructor(len) {
    this.len = len
    this.positions = new Float32Array(3 * this.len)
    this.masses = new Float32Array(this.len)
    this.temperatures = new Float32Array(this.len)
    this.speeds = new Float32Array(3 * this.len)
    this.accelerations = new Float32Array(3 * this.len)

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
    this.particleOffset = [null, null]
    this.boxIndexMask = null
    this.boxIndexFull = null
    this.levelOffset = null
    this.numInteraction = null
    this.interactionList = null
    this.boxOffsetStart = null
    this.boxOffsetEnd = null
  }

  allocate() {
    this.particleOffset[0] = new Uint32Array(this.numBoxIndexLeaf)
    this.particleOffset[1] = new Uint32Array(this.numBoxIndexLeaf)
    this.boxIndexMask = new Uint32Array(this.numBoxIndexFull)
    this.boxIndexFull = new Uint32Array(this.numBoxIndexTotal)
    this.levelOffset = new Uint32Array(this.maxLevel)
    this.numInteraction = new Uint32Array(this.numBoxIndexLeaf)
    this.interactionList = new Uint32Array(this.numBoxIndexLeaf)
    // TODO this.interactionList -> this.numBoxIndexLeaf ->maxM2LInteraction
    this.boxOffsetStart = new Uint32Array(this.numBoxIndexLeaf)
    this.boxOffsetEnd = new Uint32Array(this.numBoxIndexLeaf)
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
    //  const level_switch=[2e4,1.7e5,1.3e6,1e7,7e7,5e8] // cpu-tree
    //  const level_switch=[1.3e4,1e5,7e5,5e6,3e7,1.5e8] // cpu-fmm
    //  const level_switch=[1e5,5e5,5e6,3e7,2e8,1.5e9] // gpu-tree
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

  morton() {
    const boxSize = this.rootBoxSize / (1 << this.maxLevel)

    for (var j = 0; j < this.len; j++) {
      var nx = ~~((this.position[j * 3] - this.boxMin.x) / boxSize)
      var ny = ~~((this.position[j * 3 + 1] - this.boxMin.y) / boxSize)
      var nz = ~~((this.position[j * 3 + 2] - this.boxMin.z) / boxSize)
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

  getBoxData() {
    this.morton(this.len)

    this.numBoxIndex = 0
    var currentIndex = -1
    for (var i = 0; i < this.numBoxIndexFull; i++) this.boxIndexMask[i] = -1
    for (i = 0; i < this.len; i++) {
      if (this.mortonIndex[i] != currentIndex) {
        this.boxIndexMask[this.mortonIndex[i]] = this.numBoxIndex
        this.boxIndexFull[this.numBoxIndex] = this.mortonIndex[i]
        this.particleOffset[0][this.numBoxIndex] = i
        if (this.numBoxIndex > 0)
          this.particleOffset[1][this.numBoxIndex - 1] = i - 1
        currentIndex = this.mortonIndex[i]
        this.numBoxIndex++
      }
    }
    this.particleOffset[1][this.numBoxIndex - 1] = this.len - 1
  }

  direct(G, softening2) {
    var i, j, invDist, invDistCube

    var dist = { x: 0, y: 0, z: 0 }
    for (i = 0; i < this.len; i++) {
      var ai = { x: 0, y: 0, z: 0 }
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
      this.accelerations[i * 3] -= G * ai.x
      this.accelerations[i * 3 + 1] -= G * ai.y
      this.accelerations[i * 3 + 2] -= G * ai.z
    }
  }

  p2p(G, softening2) {
    var ii, ij, jj, i, j

    var dist = { x: 0, y: 0, z: 0 }
    for (ii = 0; ii < this.numBoxIndex; ii++) {
      for (ij = 0; ij < this.numInteraction[ii]; ij++) {
        jj = this.interactionList[ii][ij]
        for (
          i = this.particleOffset[0][ii];
          i <= this.particleOffset[1][ii];
          i++
        ) {
          var ai = { x: 0.0, y: 0.0, z: 0.0 }
          for (
            j = this.particleOffset[0][jj];
            j <= this.particleOffset[1][jj];
            j++
          ) {
            dist.x = this.positions[i * 3] - this.positions[j * 3]
            dist.y = this.positions[i * 3 + 1] - this.positions[j * 3 + 1]
            dist.z = this.positions[i * 3 + 2] - this.positions[j * 3 + 2]
            var invDist =
              1.0 /
              Math.sqrt(
                dist.x * dist.x + dist.y * dist.y + dist.z * dist.z + softening2
              )
            var invDistCube = invDist * invDist * invDist
            var s = this.masses[j].w * invDistCube
            ai.x -= dist.x * s
            ai.y -= dist.y * s
            ai.z -= dist.z * s
          }
          this.accelerations[i * 3] -= G * ai.x
          this.accelerations[i * 3 + 1] -= G * ai.y
          this.accelerations[i * 3 + 2] -= G * ai.z
        }
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
    this.precalc() // kernel
    this.getBoxData()

    this.getInteractionList(numLevel, 0)

    for (var i = 0; i < this.len; i++) {
      this.accelerations[i * 3] = 0
      this.accelerations[i * 3 + 1] = 0
      this.accelerations[i * 3 + 2] = 0
    }
    this.p2p(G, softening * softening)

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
    delete this.position
    delete this.speed
    delete this.acceleration
  }
}
