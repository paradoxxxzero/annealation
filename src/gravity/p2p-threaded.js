import Gravity from './gravity'

export const workerPromise = (worker, ...args) => {
  return new Promise(resolve => {
    worker.postMessage(...args)
    worker.onmessage = e => resolve(e.data)
  })
}

export default class P2PThreadedGravity extends Gravity {
  constructor(orbs, params) {
    super(orbs, params)

    this.pool = new Array(~~params.threads).fill().map(() => {
      const url = import.meta.url
      return new Worker(
        // Handle bundling
        url.includes('gravity')
          ? new URL('../../worker/p2p-thread.js', import.meta.url)
          : new URL('./gravity/worker/p2p-thread.js', import.meta.url)
      )
    })
  }

  async simulate() {
    const {
      gravitationalConstant,
      softening,
      collisions,
      collisionThreshold,
    } = this.params
    let collided = []

    const softening2 = softening * softening
    const threshold2 = collisionThreshold * collisionThreshold

    let parts = ~~(this.len / this.pool.length)

    const workersResults = await Promise.all(
      this.pool.map((worker, i) =>
        workerPromise(worker, [
          i * parts,
          i == this.pool.length - 1 ? this.len : (i + 1) * parts,
          this.len,
          gravitationalConstant,
          softening2,
          collisions,
          threshold2,
          this.accelerations.buffer,
          this.positions.buffer,
          this.masses.buffer,
        ])
      )
    )
    if (!this.alive) {
      return
    }
    workersResults.forEach(([accelerationBuffer, start, end, collidedPart]) => {
      const accelerations = new Float32Array(accelerationBuffer)
      for (let i = start; i < end; i++) {
        let i3 = i * 3
        this.accelerations[i3] = accelerations[i3]
        this.accelerations[i3 + 1] = accelerations[i3 + 1]
        this.accelerations[i3 + 2] = accelerations[i3 + 2]
      }
      collided.push(...collidedPart)
    })

    return this.solve(collided)
  }

  free() {
    super.free()
    this.pool.forEach(worker => worker.terminate())
  }
}
