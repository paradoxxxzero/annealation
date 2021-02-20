export default class FMMGemsGravity {
  constructor(len) {
    this.len = len
    this.positions = new Float32Array(3 * this.len)
    this.masses = new Float32Array(this.len)
    this.temperatures = new Float32Array(this.len)
    this.speeds = new Float32Array(3 * this.len)
    this.accelerations = new Float32Array(3 * this.len)
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

  direct(G, softening2) {
    var i, j, dist_x, dist_y, dist_z, invDist, invDistCube

    for (i = 0; i < this.len; i++) {
      this.accelerations[i * 3] = 0
      this.accelerations[i * 3 + 1] = 0
      this.accelerations[i * 3 + 2] = 0
      for (j = 0; j < this.len; j++) {
        dist_x = this.positions[i * 3] - this.positions[j * 3]
        dist_y = this.positions[i * 3 + 1] - this.positions[j * 3 + 1]
        dist_z = this.positions[i * 3 + 2] - this.positions[j * 3 + 2]
        invDist =
          1.0 /
          Math.sqrt(
            dist_x * dist_x + dist_y * dist_y + dist_z * dist_z + softening2
          )
        invDistCube = G * this.masses[j] * invDist * invDist * invDist
        this.accelerations[i * 3] -= dist_x * invDistCube
        this.accelerations[i * 3 + 1] -= dist_y * invDistCube
        this.accelerations[i * 3 + 2] -= dist_z * invDistCube
      }
    }
  }

  simulate(G, softening) {
    this.direct(G, softening * softening)
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
