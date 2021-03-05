import Gravity from './gravity'

export default class P2PGravity extends Gravity {
  compute2(a, u, i, I, j, J, softening2, collisions, threshold2, collided) {
    u[0] = this.positions[J] - this.positions[I]
    u[1] = this.positions[J + 1] - this.positions[I + 1]
    let distance2 = u[0] * u[0] + u[1] * u[1]
    if (collisions) {
      if (distance2 < threshold2) {
        collided.push([i, j])
      }
    }

    let fact = this.masses[j] / (distance2 + softening2)

    a[0] += u[0] * fact
    a[1] += u[1] * fact
  }

  compute3(a, u, i, I, j, J, softening2, collisions, threshold2, collided) {
    u[0] = this.positions[J] - this.positions[I]
    u[1] = this.positions[J + 1] - this.positions[I + 1]
    u[2] = this.positions[J + 2] - this.positions[I + 2]
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

  compute4(a, u, i, I, j, J, softening2, collisions, threshold2, collided) {
    u[0] = this.positions[J] - this.positions[I]
    u[1] = this.positions[J + 1] - this.positions[I + 1]
    u[2] = this.positions[J + 2] - this.positions[I + 2]
    u[3] = this.positions[J + 3] - this.positions[I + 3]
    let distance2 = u[0] * u[0] + u[1] * u[1] + u[2] * u[2] + u[3] * u[3]
    if (collisions) {
      if (distance2 < threshold2) {
        collided.push([i, j])
      }
    }
    let distance2Soft = distance2 + softening2
    let fact = this.masses[j] / (distance2Soft * distance2Soft)

    a[0] += u[0] * fact
    a[1] += u[1] * fact
    a[2] += u[2] * fact
    a[3] += u[3] * fact
  }

  compute(
    start,
    end,
    N,
    len,
    gravitationalConstant,
    softening2,
    collisions,
    threshold2,
    collided
  ) {
    // Unfactored for perf
    const computeN = this[`compute${N}`].bind(this)

    const u = new Array(N).fill(0)
    const a = new Array(N).fill(0)
    for (let i = start, n = end; i < n; i++) {
      let I = i * N
      a.fill(0)
      for (let j = 0; j < len; j++) {
        if (i === j) {
          continue
        }
        let J = j * N
        computeN(a, u, i, I, j, J, softening2, collisions, threshold2, collided)
      }
      for (let s = 0; s < N; s++) {
        this.accelerations[I + s] = a[s] * gravitationalConstant
      }
    }
  }

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

    this.compute(
      0,
      this.len,
      this.N,
      this.len,
      gravitationalConstant,
      softening2,
      collisions,
      threshold2,
      collided
    )

    return this.solve(collided)
  }
}
