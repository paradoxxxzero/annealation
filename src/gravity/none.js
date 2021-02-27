import Gravity from './gravity'

export default class NoGravity extends Gravity {
  frog_leap() {
    const dt = this.params.simulationSpeed

    for (var i = 0, n = this.len; i < n; i++) {
      this.positions[i * 3] += this.speeds[i * 3] * dt
      this.positions[i * 3 + 1] += this.speeds[i * 3 + 1] * dt
      this.positions[i * 3 + 2] += this.speeds[i * 3 + 2] * dt
    }
  }

  simulate() {
    return this.len
  }

  frog_drop() {}
}
