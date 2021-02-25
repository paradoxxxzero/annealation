import NoGravity from './none'

const hasSAB = typeof SharedArrayBuffer !== 'undefined'
const SAB = hasSAB ? SharedArrayBuffer : ArrayBuffer

const workerPromise = (worker, ...args) => {
  return new Promise(resolve => {
    worker.postMessage(...args)
    worker.onmessage = e => resolve(e.data)
  })
}

export default class P2PThreadedGravity extends NoGravity {
  constructor(orbs, params) {
    super(orbs, params)
    this.positionsBuffer = new SAB(3 * this.len * 4) // 32 / 8
    this.positions = new Float32Array(this.positionsBuffer)
    this.speedsBuffer = new SAB(3 * this.len * 4) // 32 / 8
    this.speeds = new Float32Array(this.speedsBuffer)
    this.accelerationsBuffer = new SAB(3 * this.len * 4) // 32 / 8
    this.accelerations = new Float32Array(this.accelerationsBuffer)
    this.massesBuffer = new SAB(this.len * 4) // 32 / 8
    this.masses = new Float32Array(this.massesBuffer)

    this.pool = new Array(~~params.resolution)
      .fill()
      .map(
        () => new Worker(new URL('../../worker/p2p-thread.js', import.meta.url))
      )
    if (hasSAB) {
      this.pool.forEach(worker => {
        worker.postMessage([
          'init',
          this.accelerationsBuffer,
          this.positionsBuffer,
          this.massesBuffer,
        ])
      })
    }

    orbs.forEach(({ position, mass, speed, temperature }, i) => {
      this.positions[i * 3] = position.x
      this.positions[i * 3 + 1] = position.y
      this.positions[i * 3 + 2] = position.z
      this.speeds[i * 3] = speed.x
      this.speeds[i * 3 + 1] = speed.y
      this.speeds[i * 3 + 2] = speed.z
      this.masses[i] = mass
      this.temperatures[i] = temperature
    })
  }

  frog_leap() {
    const dt = this.params.simulationSpeed
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      this.speeds[i * 3] += this.accelerations[i * 3] * half_dt
      this.speeds[i * 3 + 1] += this.accelerations[i * 3 + 1] * half_dt
      this.speeds[i * 3 + 2] += this.accelerations[i * 3 + 2] * half_dt
      this.positions[i * 3] += this.speeds[i * 3] * dt
      this.positions[i * 3 + 1] += this.speeds[i * 3 + 1] * dt
      this.positions[i * 3 + 2] += this.speeds[i * 3 + 2] * dt
    }
  }

  async simulate() {
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

    let parts = ~~(this.len / this.pool.length)

    const accelerationBuffers = await Promise.all(
      this.pool.map((worker, i) =>
        workerPromise(
          worker,
          [
            'iterate',
            i * parts,
            i == this.pool.length - 1 ? this.len : (i + 1) * parts,
            this.len,
            gravitationalConstant,
            softening2,
          ].concat(
            hasSAB
              ? []
              : [
                  this.accelerationsBuffer,
                  this.positionsBuffer,
                  this.massesBuffer,
                ]
          )
        )
      )
    )
    if (!hasSAB) {
      accelerationBuffers.forEach(([accelerationBuffer, start, end]) => {
        const accelerations = new Float32Array(accelerationBuffer)
        for (let i = start; i < end; i++) {
          this.accelerations[i * 3] = accelerations[i * 3]
          this.accelerations[i * 3 + 1] = accelerations[i * 3 + 1]
          this.accelerations[i * 3 + 2] = accelerations[i * 3 + 2]
        }
      })
    }

    // escapeDistance && this.solveEscapes(skip)
    // collided.length && this.solveCollisions(collided)
    // skip.length && (this.len = this.crunchOrbs(skip))

    return this.len
  }

  frog_drop() {
    const dt = this.params.simulationSpeed
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      this.speeds[i * 3] += this.accelerations[i * 3] * half_dt
      this.speeds[i * 3 + 1] += this.accelerations[i * 3 + 1] * half_dt
      this.speeds[i * 3 + 2] += this.accelerations[i * 3 + 2] * half_dt
    }
  }
  free() {
    super.free()
    this.pool.forEach(worker => worker.terminate())
  }
}
