import NoGravity from './none'

export default class P2PGravity extends NoGravity {
  simulate() {
    const {
      gravitationalConstant,
      softening,
      collisions,
      collisionThreshold,
      escapeDistance,
    } = this.params

    const collided = []
    const skip = []

    const softening2 = softening * softening
    const threshold2 = collisionThreshold * collisionThreshold
    for (let i = 0, n = this.len; i < n; i++) {
      this.acceleration[i].set(0, 0, 0)
      for (let j = 0; j < i; j++) {
        this.u.subVectors(this.position[j], this.position[i])
        let distance2 = this.u.lengthSq()
        let distance = Math.sqrt(distance2 + softening2)
        if (collisions) {
          if (distance2 < threshold2) {
            collided.push([i, j])
            skip.push(j)
          }
        }

        // a = G * M / d²
        this.u
          .normalize()
          .multiplyScalar(gravitationalConstant / (distance * distance))
        this.acceleration[i].addScaledVector(this.u, this.masses[j])
        this.acceleration[j].addScaledVector(this.u, -this.masses[i])
      }
    }

    escapeDistance && this.solveEscapes(escapeDistance, skip)
    collided.length && this.solveCollisions(collided)
    skip.length && this.crunchOrbs(skip)

    return this.len
  }
}
