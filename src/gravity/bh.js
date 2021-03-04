import Gravity from './gravity'

export const OCTANTS = [
  [0, 0, 0],
  [1, 0, 0],
  [1, 0, 1],
  [0, 0, 1],
  [0, 1, 0],
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]

export default class BarnesHutGravity extends Gravity {
  subdivide(cell) {
    const size = cell.size / 2.0

    //   y |
    //    0 --- x
    // z /

    //   4 5
    //  7 6
    //   0 1
    //  3 2
    cell.leaf = false
    cell.octants = OCTANTS.map(([x, y, z]) => ({
      x: cell.x + x * size,
      y: cell.y + y * size,
      z: cell.z + z * size,
      size,
      index: null,
      mass: 0,
      cx: 0,
      cy: 0,
      cz: 0,
      octants: null,
      leaf: true,
    }))
  }

  getSubCell(cell, index) {
    let i3 = index * 3
    const x = this.positions[i3] > cell.octants[6].x
    const y = this.positions[i3 + 1] > cell.octants[6].y
    const z = this.positions[i3 + 2] > cell.octants[6].z
    return cell.octants[
      OCTANTS.findIndex(([xc, yc, zc]) => !!xc == x && !!yc == y && !!zc == z)
    ]
  }

  addParticle(cell, index) {
    // If this cell is empty, add particle to it
    if (cell.index === null) {
      cell.index = index
      return
    }

    // Subdivide this cell
    this.subdivide(cell)

    // Inserting existing particle to subCell
    const existingSubCell = this.getSubCell(cell, cell.index)
    existingSubCell.index = cell.index

    const newSubCell = this.getSubCell(cell, index)
    // If both cells end up in same octant, subdivide again
    if (existingSubCell === newSubCell) {
      // Prevent same position infinite loop
      let i3 = index * 3
      let ci3 = cell.index * 3
      if (
        this.positions[ci3] !== this.positions[i3] &&
        this.positions[ci3 + 1] !== this.positions[i3 + 1] &&
        this.positions[ci3 + 2] !== this.positions[i3 + 2]
      ) {
        this.addParticle(existingSubCell, index)
      }
    }

    newSubCell.index = index
  }

  makeOctree(origin, range) {
    const rootCell = {
      x: origin,
      y: origin,
      z: origin,
      size: range,
      index: null,
      mass: 0,
      cx: 0,
      cy: 0,
      cz: 0,
      octants: null,
      leaf: true,
    }

    // Let's insert every particles:
    for (let i = 0; i < this.len; i++) {
      let cell = rootCell

      while (!cell.leaf) {
        cell = this.getSubCell(cell, i)
      }

      this.addParticle(cell, i)
    }
    return rootCell
  }

  massDistribution(cell) {
    if (cell.leaf) {
      // If this cell is a leaf set particle mass to it
      let i3 = cell.index * 3
      cell.cx = this.positions[i3]
      cell.cy = this.positions[i3 + 1]
      cell.cz = this.positions[i3 + 2]
      cell.mass = this.masses[cell.index]
    } else {
      // For each octant
      for (let i = 0, n = cell.octants.length; i < n; i++) {
        const subCell = cell.octants[i]
        // If it has particles
        if (subCell.index !== null) {
          // Compute its distribution
          this.massDistribution(subCell)
          cell.mass += subCell.mass
          cell.cx += subCell.cx * subCell.mass
          cell.cy += subCell.cy * subCell.mass
          cell.cz += subCell.cz * subCell.mass
        }
      }

      // Compute center of mass
      cell.cx /= cell.mass
      cell.cy /= cell.mass
      cell.cz /= cell.mass
    }
  }

  getAccelerations(
    cell,
    index,
    theta,
    softening2,
    collisions,
    collided,
    threshold2
  ) {
    // If it's a leaf and cell is not containing cell
    if (cell.leaf) {
      if (cell.index !== null && cell.index !== index) {
        // Compute classical interactions between index particle and cell particle
        const i3 = index * 3
        const j3 = cell.index * 3
        const x = this.positions[j3] - this.positions[i3]
        const y = this.positions[j3 + 1] - this.positions[i3 + 1]
        const z = this.positions[j3 + 2] - this.positions[i3 + 2]
        const d2 = x * x + y * y + z * z
        const d = Math.sqrt(d2 + softening2)
        if (collisions) {
          if (d2 < threshold2) {
            collided.push([index, cell.index])
          }
        }
        const fact = this.masses[cell.index] / (d * d * d)

        this.accelerations[i3] += fact * x
        this.accelerations[i3 + 1] += fact * y
        this.accelerations[i3 + 2] += fact * z
      }
    } else {
      // If this cell contains octants
      // Compute distance between this particle and the cell center of mass
      const i3 = index * 3
      const x = cell.cx - this.positions[i3]
      const y = cell.cy - this.positions[i3 + 1]
      const z = cell.cz - this.positions[i3 + 2]
      const r = Math.sqrt(x * x + y * y + z * z)
      const d = cell.size

      if (d < theta * r) {
        // If the ratio of distance and radius is below theta, use approximation
        // Compute interaction between this particle and this cell
        const fact = cell.mass / (r * r * r)

        this.accelerations[i3] += fact * x
        this.accelerations[i3 + 1] += fact * y
        this.accelerations[i3 + 2] += fact * z
      } else {
        // Otherwise compute accelerations for each octant
        for (let i = 0, n = cell.octants.length; i < n; i++) {
          this.getAccelerations(
            cell.octants[i],
            index,
            theta,
            softening2,
            collisions,
            collided,
            threshold2
          )
        }
      }
    }
  }

  async simulate() {
    const {
      theta,
      softening,
      gravitationalConstant,
      collisions,
      collisionThreshold,
    } = this.params
    // TODO: implement collisions somehow

    const collided = []
    const softening2 = softening * softening
    const threshold2 = collisionThreshold * collisionThreshold
    const min = Math.min.apply(null, this.positions)
    const max = Math.max.apply(null, this.positions)

    const rootCell = this.makeOctree(min, max - min)
    this.massDistribution(rootCell)

    for (let i = 0; i < this.len; i++) {
      let i3 = i * 3
      this.accelerations[i3] = 0
      this.accelerations[i3 + 1] = 0
      this.accelerations[i3 + 2] = 0

      this.getAccelerations(
        rootCell,
        i,
        theta,
        softening2,
        collisions,
        collided,
        threshold2
      )

      this.accelerations[i3] *= gravitationalConstant
      this.accelerations[i3 + 1] *= gravitationalConstant
      this.accelerations[i3 + 2] *= gravitationalConstant
    }

    return this.solve(collided)
  }
}
