import Gravity from './gravity'

export default class NoGravity extends Gravity {
  frog_leap() {
    const dt = this.params.simulationSpeed

    for (let i = 0, n = this.len; i < n; i++) {
      let I = i * this.N
      for (let s = 0; s < this.N; s++) {
        this.positions[I + s] += this.speeds[I + s] * dt
      }
    }
  }

  simulate() {
    return this.len
  }

  frog_drop() {}
}
