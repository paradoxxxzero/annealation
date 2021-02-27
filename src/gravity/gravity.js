export default class Gravity {
  constructor(orbs, params) {
    this.params = params

    this.len = orbs.length
    this.positions = new Float32Array(3 * this.len)
    this.speeds = new Float32Array(3 * this.len)
    this.accelerations = new Float32Array(3 * this.len)
    this.masses = new Float32Array(this.len)
    this.temperatures = new Float32Array(this.len)

    orbs.forEach(({ position, mass, speed, temperature }, i) => {
      this.positions[i * 3] = position.x
      this.positions[i * 3 + 1] = position.y
      this.positions[i * 3 + 2] = position.z
      this.speeds[i * 3] = speed.x
      this.speeds[i * 3 + 1] = speed.y
      this.speeds[i * 3 + 2] = speed.z
      this.masses[i] = mass
      this.temperatures[i] = temperature
    })
  }

  paramsChange() {}

  frog_leap() {
    const dt = this.params.simulationSpeed
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      this.speeds[i * 3] += this.accelerations[i * 3] * half_dt
      this.speeds[i * 3 + 1] += this.accelerations[i * 3 + 1] * half_dt
      this.speeds[i * 3 + 2] += this.accelerations[i * 3 + 2] * half_dt
      this.positions[i * 3] += this.speeds[i * 3] * dt
      this.positions[i * 3 + 1] += this.speeds[i * 3 + 1] * dt
      this.positions[i * 3 + 2] += this.speeds[i * 3 + 2] * dt
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
      for (let m = 1, o = cell.length; m < o; m++) {
        let j = cell[m]
        let mass_ratio = 1 / (this.masses[i] + this.masses[j])
        this.positions[i * 3] =
          mass_ratio *
          (this.positions[i * 3] * this.masses[i] +
            this.positions[j * 3] * this.masses[j])
        this.positions[i * 3 + 1] =
          mass_ratio *
          (this.positions[i * 3 + 1] * this.masses[i] +
            this.positions[j * 3 + 1] * this.masses[j])
        this.positions[i * 3 + 2] =
          mass_ratio *
          (this.positions[i * 3 + 2] * this.masses[i] +
            this.positions[j * 3 + 2] * this.masses[j])

        this.speeds[i * 3] =
          mass_ratio *
          (this.speeds[i * 3] * this.masses[i] +
            this.speeds[j * 3] * this.masses[j])
        this.speeds[i * 3 + 1] =
          mass_ratio *
          (this.speeds[i * 3 + 1] * this.masses[i] +
            this.speeds[j * 3 + 1] * this.masses[j])
        this.speeds[i * 3 + 2] =
          mass_ratio *
          (this.speeds[i * 3 + 2] * this.masses[i] +
            this.speeds[j * 3 + 2] * this.masses[j])

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
      if (
        this.positions[i * 3] * this.positions[i * 3] +
          this.positions[i * 3 + 1] * this.positions[i * 3 + 1] +
          this.positions[i * 3 + 2] * this.positions[i * 3 + 2] >
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
      this.positions[i * 3] = this.positions[(i + shift) * 3]
      this.positions[i * 3 + 1] = this.positions[(i + shift) * 3 + 1]
      this.positions[i * 3 + 2] = this.positions[(i + shift) * 3 + 2]
      this.speeds[i * 3] = this.speeds[(i + shift) * 3]
      this.speeds[i * 3 + 1] = this.speeds[(i + shift) * 3 + 1]
      this.speeds[i * 3 + 2] = this.speeds[(i + shift) * 3 + 2]
      this.accelerations[i * 3] = this.accelerations[(i + shift) * 3]
      this.accelerations[i * 3 + 1] = this.accelerations[(i + shift) * 3 + 1]
      this.accelerations[i * 3 + 2] = this.accelerations[(i + shift) * 3 + 2]
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

    for (var i = 0, n = this.len; i < n; i++) {
      this.speeds[i * 3] += this.accelerations[i * 3] * half_dt
      this.speeds[i * 3 + 1] += this.accelerations[i * 3 + 1] * half_dt
      this.speeds[i * 3 + 2] += this.accelerations[i * 3 + 2] * half_dt
    }
  }

  free() {
    delete this.temperatures
    delete this.masses
    delete this.accelerations
    delete this.speeds
    delete this.positions
  }
}
