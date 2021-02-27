import Gravity from './gravity'

export default class P2PGravity extends Gravity {
  async simulate() {
    const {
      gravitationalConstant,
      softening,
      collisions,
      collisionThreshold,
    } = this.params
    const softening2 = softening * softening
    const threshold2 = collisionThreshold * collisionThreshold

    const collided = []
    const u = [0, 0, 0]
    const a = [0, 0, 0]
    for (let i = 0, n = this.len; i < n; i++) {
      let i3 = i * 3
      a.fill(0)
      for (let j = 0; j < this.len; j++) {
        if (i === j) {
          continue
        }
        let j3 = j * 3
        u[0] = this.positions[j3] - this.positions[i3]
        u[1] = this.positions[j3 + 1] - this.positions[i3 + 1]
        u[2] = this.positions[j3 + 2] - this.positions[i3 + 2]
        let distance2 = u[0] * u[0] + u[1] * u[1] + u[2] * u[2]
        let distance = Math.sqrt(distance2 + softening2)
        if (collisions) {
          if (distance2 < threshold2) {
            collided.push([i, j])
          }
        }

        let fact = this.masses[j] / (distance * distance * distance)

        a[0] += u[0] * fact
        a[1] += u[1] * fact
        a[2] += u[2] * fact
      }
      this.accelerations[i3] = a[0] * gravitationalConstant
      this.accelerations[i3 + 1] = a[1] * gravitationalConstant
      this.accelerations[i3 + 2] = a[2] * gravitationalConstant
    }

    return this.solve(collided)
  }
}
