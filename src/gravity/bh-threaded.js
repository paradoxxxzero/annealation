import P2PThreadedGravity from './p2p-threaded'
import BarnesHutGravity from './bh'
import { mix } from '../utils'
import { workerPromise } from '../utils'

export default class BarnesHutThreadedGravity extends mix(
  P2PThreadedGravity,
  BarnesHutGravity
) {
  constructor(orbs, params, allocLen, workerName = 'bh-thread') {
    super(orbs, params, allocLen, workerName)
  }

  fill(cell, cells, flag) {
    const s = flag.shift
    cells[0 + s] = cell.size
    cells[1 + s] = cell.index
    cells[2 + s] = cell.mass
    cells[3 + s] = cell.cx
    cells[4 + s] = cell.cy
    cells[5 + s] = cell.cz
    if (cell.leaf) {
      for (let i = 0; i < 8; i++) {
        cells[6 + i + s] = NaN
      }
    } else {
      for (let i = 0; i < 8; i++) {
        flag.shift += 14
        cells[6 + i + s] = flag.shift
        this.fill(cell.octants[i], cells, flag)
      }
    }

    return s
  }

  async simulate() {
    const {
      gravitationalConstant,
      softening,
      collisions,
      collisionThreshold,
      theta,
    } = this.params
    let collided = []

    const softening2 = softening * softening
    const threshold2 = collisionThreshold * collisionThreshold
    const min = Math.min.apply(null, this.positions)
    const max = Math.max.apply(null, this.positions)
    const rootCell = this.makeOctree(min, max - min)
    this.massDistribution(rootCell)
    const count = c =>
      c.octants
        ? c.octants.length + c.octants.map(count).reduce((a, b) => a + b, 0)
        : 0
    const cellCount = count(rootCell) + 1
    const cells = new Float32Array(cellCount * 14)
    this.fill(rootCell, cells, { shift: 0 })

    let parts = ~~(this.len / this.pool.length)

    const workersResults = await Promise.all(
      this.pool.map((worker, i) =>
        workerPromise(worker, [
          i * parts,
          i == this.pool.length - 1 ? this.len : (i + 1) * parts,
          theta,
          gravitationalConstant,
          softening2,
          collisions,
          threshold2,
          this.accelerations.buffer,
          this.positions.buffer,
          this.masses.buffer,
          cells.buffer,
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
}
