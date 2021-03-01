export default class Gravity {
  constructor(orbs, params, allocLen) {
    this.alive = true
    this.params = params

    this.len = orbs.length

    this.positions = new Float32Array(3 * allocLen)
    this.speeds = new Float32Array(3 * allocLen)
    this.accelerations = new Float32Array(3 * allocLen)
    this.masses = new Float32Array(allocLen)
    this.temperatures = new Float32Array(allocLen)

    orbs.forEach((orb, i) => this.setOrb(i, orb))
  }

  params_change(obj, key, value) {}

  frog_leap() {
    const dt = this.params.simulationSpeed
    const half_dt = dt * 0.5

    for (let i = 0, n = this.len; i < n; i++) {
      let i3 = i * 3
      this.speeds[i3] += this.accelerations[i3] * half_dt
      this.speeds[i3 + 1] += this.accelerations[i3 + 1] * half_dt
      this.speeds[i3 + 2] += this.accelerations[i3 + 2] * half_dt
      this.positions[i3] += this.speeds[i3] * dt
      this.positions[i3 + 1] += this.speeds[i3 + 1] * dt
      this.positions[i3 + 2] += this.speeds[i3 + 2] * dt
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
      let i3 = i * 3
      for (let m = 1, o = cell.length; m < o; m++) {
        let j = cell[m]
        let j3 = j * 3
        let mass_ratio = 1 / (this.masses[i] + this.masses[j])
        this.positions[i3] =
          mass_ratio *
          (this.positions[i3] * this.masses[i] +
            this.positions[j3] * this.masses[j])
        this.positions[i3 + 1] =
          mass_ratio *
          (this.positions[i3 + 1] * this.masses[i] +
            this.positions[j3 + 1] * this.masses[j])
        this.positions[i3 + 2] =
          mass_ratio *
          (this.positions[i3 + 2] * this.masses[i] +
            this.positions[j3 + 2] * this.masses[j])

        this.speeds[i3] =
          mass_ratio *
          (this.speeds[i3] * this.masses[i] + this.speeds[j3] * this.masses[j])
        this.speeds[i3 + 1] =
          mass_ratio *
          (this.speeds[i3 + 1] * this.masses[i] +
            this.speeds[j3 + 1] * this.masses[j])
        this.speeds[i3 + 2] =
          mass_ratio *
          (this.speeds[i3 + 2] * this.masses[i] +
            this.speeds[j3 + 2] * this.masses[j])

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
      let i3 = i * 3
      if (
        this.positions[i3] * this.positions[i3] +
          this.positions[i3 + 1] * this.positions[i3 + 1] +
          this.positions[i3 + 2] * this.positions[i3 + 2] >
        escapeDistance2
      ) {
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
      let i3 = i * 3
      let is3 = (i + shift) * 3
      this.positions[i3] = this.positions[is3]
      this.positions[i3 + 1] = this.positions[is3 + 1]
      this.positions[i3 + 2] = this.positions[is3 + 2]
      this.speeds[i3] = this.speeds[is3]
      this.speeds[i3 + 1] = this.speeds[is3 + 1]
      this.speeds[i3 + 2] = this.speeds[is3 + 2]
      this.accelerations[i3] = this.accelerations[is3]
      this.accelerations[i3 + 1] = this.accelerations[is3 + 1]
      this.accelerations[i3 + 2] = this.accelerations[is3 + 2]
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
      let i3 = i * 3
      this.speeds[i3] += this.accelerations[i3] * half_dt
      this.speeds[i3 + 1] += this.accelerations[i3 + 1] * half_dt
      this.speeds[i3 + 2] += this.accelerations[i3 + 2] * half_dt
    }
  }

  setOrb(i, { position, mass, speed, temperature }) {
    this.positions[i * 3] = position.x
    this.positions[i * 3 + 1] = position.y
    this.positions[i * 3 + 2] = position.z
    this.speeds[i * 3] = speed.x
    this.speeds[i * 3 + 1] = speed.y
    this.speeds[i * 3 + 2] = speed.z
    this.masses[i] = mass
    this.temperatures[i] = temperature
  }

  grow(orbs) {
    if (this.len + orbs.length > this.temperatures.length) {
      console.warn("Can't grow")
      return
    }
    orbs.forEach((orb, i) => this.setOrb(this.len + i, orb))
    this.len += orbs.length
  }

  shrink(n) {
    if (this.len - n < 0) {
      console.warn("Can't shrink")
      return
    }
    this.len -= n
  }

  free() {
    this.alive = false
    delete this.temperatures
    delete this.masses
    delete this.accelerations
    delete this.speeds
    delete this.positions
  }
}
