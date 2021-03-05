import { HyperRenderer } from 'four-js'

export default class Gravity {
  constructor(orbs, params, allocLen) {
    this.alive = true
    this.params = params
    this.N = params.dimensions
    this.vectorSuffix = 'xyzw'
    this.len = orbs.length
    if (this.N > 3) {
      this.projector = new HyperRenderer(
        (params.wFov * Math.PI) / 180,
        params.w
      )
    }

    this.xyz = new Float32Array(allocLen * 3)
    this.positions =
      this.N === 3 ? this.xyz : new Float32Array(allocLen * this.N)
    this.speeds = new Float32Array(this.N * allocLen)
    this.accelerations = new Float32Array(this.N * allocLen)
    this.masses = new Float32Array(allocLen)
    this.temperatures = new Float32Array(allocLen)

    orbs.forEach((orb, i) => this.set_orb(i, orb))
  }

  params_change(params) {
    if (this.projector) {
      this.projector.fov = (params.wFov * Math.PI) / 180
      this.projector.w = params.w
    }
  }

  frog_leap() {
    const dt = this.params.simulationSpeed
    const half_dt = dt * 0.5

    for (let i = 0, n = this.len; i < n; i++) {
      let I = i * this.N
      for (let s = 0; s < this.N; s++) {
        this.speeds[I + s] += this.accelerations[I + s] * half_dt
        this.positions[I + s] += this.speeds[I + s] * dt
      }
    }
  }

  aggregateCollisions(collided) {
    const aggregated = []
    for (let l = 0, n = collided.length; l < n; l++) {
      const [i, j] = collided[l]
      let isNew = true
      for (let k = 0, m = aggregated.length; k < m; k++) {
        const cell = aggregated[k]
        const isIin = cell.includes(i)
        const isJin = cell.includes(j)
        if (isIin || isJin) {
          isNew = false
        }
        if (isIin !== isJin) {
          let newI = isIin ? j : i
          if (newI > cell[0]) {
            cell.push(newI)
          } else {
            cell.unshift(newI)
          }
          break
        }
      }
      if (isNew) {
        aggregated.push(i > j ? [j, i] : [i, j])
      }
    }
    return aggregated
  }

  solveCollisions(collided) {
    for (let l = 0, n = collided.length; l < n; l++) {
      const cell = collided[l]
      let i = cell[0]
      let I = i * this.N
      for (let m = 1, o = cell.length; m < o; m++) {
        let j = cell[m]
        let J = j * this.N
        let mass_ratio = 1 / (this.masses[i] + this.masses[j])
        for (let s = 0; s < this.N; s++) {
          this.positions[I + s] =
            mass_ratio *
            (this.positions[I + s] * this.masses[i] +
              this.positions[J + s] * this.masses[j])

          this.speeds[I + s] =
            mass_ratio *
            (this.speeds[I + s] * this.masses[i] +
              this.speeds[J + s] * this.masses[j])
        }
        this.temperatures[i] =
          mass_ratio *
          (this.temperatures[i] * this.masses[i] +
            this.temperatures[j] * this.masses[j])

        this.masses[i] += this.masses[j]
      }
    }
  }

  solveEscapes() {
    const skip = []
    const { escapeDistance } = this.params
    if (!escapeDistance) {
      return skip
    }
    const escapeDistance2 = escapeDistance * escapeDistance
    for (let i = 0, n = this.len; i < n; i++) {
      let I = i * this.N
      let d = 0
      for (let s = 0; s < this.N; s++) {
        d += this.positions[I + s] * this.positions[I + s]
      }
      if (d > escapeDistance2) {
        skip.push(i)
      }
    }
    return skip
  }

  crunchOrbs(skip) {
    let i = 0
    let shift = 0
    while (i + shift < this.len) {
      if (skip.includes(i + shift)) {
        shift += 1
        continue
      }
      if (shift == 0) {
        i += 1
        continue
      }
      let I = i * this.N
      let Is = (i + shift) * this.N
      for (let s = 0; s < this.N; s++) {
        this.positions[I + s] = this.positions[Is + s]
        this.speeds[I + s] = this.speeds[Is + s]
        this.accelerations[I + s] = this.accelerations[Is + s]
      }
      this.temperatures[i] = this.temperatures[i + shift]
      this.masses[i] = this.masses[i + shift]
      i += 1
    }
    return this.len - shift
  }

  solve(collided) {
    const skip = this.solveEscapes()
    if (collided.length) {
      collided = this.aggregateCollisions(collided)
      collided.forEach(cell => {
        skip.push(...cell.slice(1))
      })
      this.solveCollisions(collided)
    }
    if (skip.length) {
      this.len = this.crunchOrbs(skip)
    }
    return this.len
  }

  async simulate() {
    return this.solve([])
  }

  frog_drop() {
    const dt = this.params.simulationSpeed
    const half_dt = dt * 0.5

    for (let i = 0, n = this.len; i < n; i++) {
      let I = i * this.N
      for (let s = 0; s < this.N; s++) {
        this.speeds[I + s] += this.accelerations[I + s] * half_dt
      }
    }

    if (this.projector) {
      this.projector.rotate(this.params)
    }
  }

  set_orb(i, { position, mass, speed, temperature }) {
    let I = i * this.N
    for (let s = 0; s < this.N; s++) {
      let suffix = this.vectorSuffix[s]
      this.positions[I + s] = position[suffix] || 0
      this.speeds[I + s] = speed[suffix] || 0
    }
    this.masses[i] = mass
    this.temperatures[i] = temperature
  }

  grow(orbs) {
    if (this.len + orbs.length > this.temperatures.length) {
      console.warn("Can't grow")
      return
    }
    orbs.forEach((orb, i) => this.set_orb(this.len + i, orb))
    this.len += orbs.length
  }

  shrink(n) {
    if (this.len - n < 0) {
      console.warn("Can't shrink")
      return
    }
    this.len -= n
  }

  project() {
    if (this.N === 3) {
      return
    } else if (this.N === 2) {
      for (let i = 0, n = this.len; i < n; i++) {
        let i2 = i * 2
        let i3 = i2 + i
        this.xyz[i3] = this.positions[i2]
        this.xyz[i3 + 1] = this.positions[i2 + 1]
        this.xyz[i3 + 2] = 0
      }
    } else if (this.N === 4) {
      for (let i = 0, n = this.len; i < n; i++) {
        let i3 = i * 3
        let i4 = i3 + i
        let p = this.projector.project([
          this.positions[i4],
          this.positions[i4 + 1],
          this.positions[i4 + 2],
          this.positions[i4 + 3],
        ])
        this.xyz[i3] = p[0]
        this.xyz[i3 + 1] = p[1]
        this.xyz[i3 + 2] = p[2]
      }
    }
  }

  free() {
    this.alive = false
    delete this.temperatures
    delete this.masses
    delete this.accelerations
    delete this.speeds
    delete this.positions
    delete this.xyz
  }
}
