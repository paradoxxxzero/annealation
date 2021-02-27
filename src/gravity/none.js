import Gravity from './gravity'

export default class NoGravity extends Gravity {
  frog_leap() {
    const dt = this.params.simulationSpeed

    for (let i = 0, n = this.len; i < n; i++) {
      let i3 = i * 3
      this.positions[i3] += this.speeds[i3] * dt
      this.positions[i3 + 1] += this.speeds[i3 + 1] * dt
      this.positions[i3 + 2] += this.speeds[i3 + 2] * dt
    }
  }

  simulate() {
    return this.len
  }

  frog_drop() {}
}
