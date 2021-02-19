import { Vector3 } from 'three'
export default class NoGravity {
  constructor(orbs) {
    this.len = orbs.length
    this.positions = new Float32Array(3 * this.len)
    this.masses = new Float32Array(this.len)
    this.temperatures = new Float32Array(this.len)

    this.position = orbs.map(({ position }) => position)
    this.speed = orbs.map(({ speed }) => speed)
    this.u = new Vector3()
    this.origin = new Vector3()
  }

  frog_leap(dt) {
    for (var i = 0, n = this.len; i < n; i++) {
      this.position[i].addScaledVector(this.speed[i], dt)
    }
  }

  simulate(G, softening, collisions, collisionThreshold, escapeDistance) {
    var i, n, j, l
    const collided = []
    const skip = []
    const threshold2 = collisionThreshold * collisionThreshold
    if (collisions) {
      for (i = 0, n = this.len; i < n; i++) {
        for (j = 0; j < i; j++) {
          this.u.subVectors(this.position[j], this.position[i])
          let distance2 = this.u.lengthSq()
          if (distance2 < threshold2) {
            collided.push([i, j])
            skip.push(j)
          }
        }
      }
    }

    for (i = 0, n = this.len; i < n; i++) {
      if (this.position[i].distanceTo(this.origin) > escapeDistance) {
        skip.push(i)
      }
    }

    if (skip.length) {
      for (l = 0, n = collided.length; l < n; l++) {
        ;[i, j] = collided[l]
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
      const positions = [...this.position].filter((_, i) => !skip.includes(i))
      const speeds = [...this.speed].filter((_, i) => !skip.includes(i))
      const masses = [...this.masses].filter((_, i) => !skip.includes(i))
      const temperatures = [...this.temperatures].filter(
        (_, i) => !skip.includes(i)
      )
      this.len -= skip.length
      for (i = 0, n = this.len; i < n; i++) {
        this.position[i] = positions[i]
        this.speed[i] = speeds[i]
        this.masses[i] = masses[i]
        this.temperatures[i] = temperatures[i]
      }
    }

    return this.len
  }

  frog_drop(dt) {
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
  }
}
