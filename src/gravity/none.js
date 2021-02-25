import { Vector3 } from 'three'

export default class NoGravity {
  constructor(orbs, params) {
    this.params = params

    this.len = orbs.length
    this.positions = new Float32Array(3 * this.len)
    this.masses = new Float32Array(this.len)
    this.temperatures = new Float32Array(this.len)

    orbs.forEach(({ position, mass, temperature }, i) => {
      this.positions[i * 3] = position.x
      this.positions[i * 3 + 1] = position.y
      this.positions[i * 3 + 2] = position.z
      this.masses[i] = mass
      this.temperatures[i] = temperature
    })

    // Vector array utils
    this.position = orbs.map(({ position }) => position)
    this.speed = orbs.map(({ speed }) => speed)
    this.acceleration = orbs.map(() => new Vector3())
    this.u = new Vector3()
    this.origin = new Vector3()
    this.update()
  }

  paramsChange() {}

  frog_leap() {
    const dt = this.params.simulationSpeed
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      this.speed[i].addScaledVector(this.acceleration[i], half_dt)
      this.position[i].addScaledVector(this.speed[i], dt)
    }
  }

  solveCollisions(collided) {
    for (let l = 0, n = collided.length; l < n; l++) {
      let [i, j] = collided[l]
      let mass_ratio = 1 / (this.masses[i] + this.masses[j])
      this.position[i]
        .multiplyScalar(this.masses[i])
        .addScaledVector(this.position[j], this.masses[j])
        .multiplyScalar(mass_ratio)
      this.speed[i]
        .multiplyScalar(this.masses[i])
        .addScaledVector(this.speed[j], this.masses[j])
        .multiplyScalar(mass_ratio)
      this.temperatures[i] =
        mass_ratio *
        (this.temperatures[i] * this.masses[i] +
          this.temperatures[j] * this.masses[j])
      this.masses[i] += this.masses[j]
    }
  }

  solveEscapes(skip) {
    const { escapeDistance } = this.params
    if (!escapeDistance) {
      return
    }
    for (let i = 0, n = this.len; i < n; i++) {
      if (this.position[i].distanceTo(this.origin) > escapeDistance) {
        skip.push(i)
      }
    }
  }

  crunchOrbs(skip) {
    const positions = [...this.position].filter((_, i) => !skip.includes(i))
    const speeds = [...this.speed].filter((_, i) => !skip.includes(i))
    const masses = [...this.masses].filter((_, i) => !skip.includes(i))
    const temperatures = [...this.temperatures].filter(
      (_, i) => !skip.includes(i)
    )
    this.len -= skip.length
    for (let i = 0, n = this.len; i < n; i++) {
      this.position[i] = positions[i]
      this.speed[i] = speeds[i]
      this.masses[i] = masses[i]
      this.temperatures[i] = temperatures[i]
    }
  }

  simulate() {
    const collided = []
    const skip = []

    this.solveEscapes(skip)
    collided.length && this.solveCollisions(collided)
    skip.length && this.crunchOrbs(skip)
    return this.len
  }

  frog_drop() {
    const half_dt = this.params.simulationSpeed * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      this.speed[i].addScaledVector(this.acceleration[i], half_dt)
    }
    this.update()
  }

  update() {
    for (var i = 0, n = this.len; i < n; i++) {
      this.positions[i * 3] = this.position[i].x
      this.positions[i * 3 + 1] = this.position[i].y
      this.positions[i * 3 + 2] = this.position[i].z
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
