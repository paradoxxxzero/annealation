import Gravity from './gravity'

export const QUADRANTS = [
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 1],
]
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
export const HEXADECANTS = [
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 0, 1, 1],
  [0, 0, 1, 1],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
]

// This code is not factored for performance reasons
export default class BarnesHutGravity extends Gravity {
  subdivide2(cell) {
    const size = cell.size / 2.0

    //   y |
    //    0 --- x
    // z /

    //   4 5
    //  7 6
    //   0 1
    //  3 2
    cell.leaf = false
    cell.quadrants = QUADRANTS.map(([x, y]) => ({
      x: cell.x + x * size,
      y: cell.y + y * size,
      size,
      index: null,
      mass: 0,
      cx: 0,
      cy: 0,
      quadrants: null,
      leaf: true,
    }))
  }

  getSubCell2(cell, index) {
    let i2 = index * 2
    const x = this.positions[i2] > cell.quadrants[2].x
    const y = this.positions[i2 + 1] > cell.quadrants[2].y
    return cell.quadrants[
      QUADRANTS.findIndex(([xc, yc]) => !!xc == x && !!yc == y)
    ]
  }

  addParticle2(cell, index) {
    // If this cell is empty, add particle to it
    if (cell.index === null) {
      cell.index = index
      return
    }

    // Subdivide this cell
    this.subdivide2(cell)

    // Inserting existing particle to subCell
    const existingSubCell = this.getSubCell2(cell, cell.index)
    existingSubCell.index = cell.index

    const newSubCell = this.getSubCell2(cell, index)
    // If both cells end up in same octant, subdivide again
    if (existingSubCell === newSubCell) {
      // Prevent same position infinite loop
      let i2 = index * 2
      let ci2 = cell.index * 2
      if (
        !(
          this.positions[ci2] === this.positions[i2] &&
          this.positions[ci2 + 1] === this.positions[i2 + 1]
        )
      ) {
        this.addParticle2(existingSubCell, index)
      }
    }

    newSubCell.index = index
  }

  makeOctree2(origin, range) {
    const rootCell = {
      x: origin,
      y: origin,
      size: range,
      index: null,
      mass: 0,
      cx: 0,
      cy: 0,
      quadrants: null,
      leaf: true,
    }

    // Let's insert every particles:
    for (let i = 0; i < this.len; i++) {
      let cell = rootCell

      while (!cell.leaf) {
        cell = this.getSubCell2(cell, i)
      }

      this.addParticle2(cell, i)
    }
    return rootCell
  }

  massDistribution2(cell) {
    if (cell.leaf) {
      // If this cell is a leaf set particle mass to it
      let i2 = cell.index * 2
      cell.cx = this.positions[i2]
      cell.cy = this.positions[i2 + 1]
      cell.mass = this.masses[cell.index]
    } else {
      // For each octant
      for (let i = 0, n = cell.quadrants.length; i < n; i++) {
        const subCell = cell.quadrants[i]
        // If it has particles
        if (subCell.index !== null) {
          // Compute its distribution
          this.massDistribution2(subCell)
          cell.mass += subCell.mass
          cell.cx += subCell.cx * subCell.mass
          cell.cy += subCell.cy * subCell.mass
        }
      }

      // Compute center of mass
      cell.cx /= cell.mass
      cell.cy /= cell.mass
    }
  }

  compute2(cell, index, theta, softening2, collisions, collided, threshold2) {
    // If it's a leaf and cell is not containing cell
    if (cell.leaf) {
      if (cell.index !== null && cell.index !== index) {
        // Compute classical interactions between index particle and cell particle
        const i2 = index * 2
        const j2 = cell.index * 2
        const x = this.positions[j2] - this.positions[i2]
        const y = this.positions[j2 + 1] - this.positions[i2 + 1]
        const d2 = x * x + y * y
        if (collisions) {
          if (d2 < threshold2) {
            collided.push([index, cell.index])
          }
        }
        const fact = this.masses[cell.index] / (d2 + softening2)

        this.accelerations[i2] += fact * x
        this.accelerations[i2 + 1] += fact * y
      }
    } else {
      // If this cell contains quadrants
      // Compute distance between this particle and the cell center of mass
      const i2 = index * 2
      const x = cell.cx - this.positions[i2]
      const y = cell.cy - this.positions[i2 + 1]
      const r2 = x * x + y * y
      const d2 = cell.size * cell.size

      if (d2 < theta * theta * r2) {
        // If the ratio of distance and radius is below theta, use approximation
        // Compute interaction between this particle and this cell
        const fact = cell.mass / r2

        this.accelerations[i2] += fact * x
        this.accelerations[i2 + 1] += fact * y
      } else {
        // Otherwise compute accelerations for each octant
        for (let i = 0, n = cell.quadrants.length; i < n; i++) {
          this.compute2(
            cell.quadrants[i],
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

  subdivide3(cell) {
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

  getSubCell3(cell, index) {
    let i3 = index * 3
    const x = this.positions[i3] > cell.octants[6].x
    const y = this.positions[i3 + 1] > cell.octants[6].y
    const z = this.positions[i3 + 2] > cell.octants[6].z
    return cell.octants[
      OCTANTS.findIndex(([xc, yc, zc]) => !!xc == x && !!yc == y && !!zc == z)
    ]
  }

  addParticle3(cell, index) {
    // If this cell is empty, add particle to it
    if (cell.index === null) {
      cell.index = index
      return
    }

    // Subdivide this cell
    this.subdivide3(cell)

    // Inserting existing particle to subCell
    const existingSubCell = this.getSubCell3(cell, cell.index)
    existingSubCell.index = cell.index

    const newSubCell = this.getSubCell3(cell, index)
    // If both cells end up in same octant, subdivide again
    if (existingSubCell === newSubCell) {
      // Prevent same position infinite loop
      let i3 = index * 3
      let ci3 = cell.index * 3
      if (
        !(
          this.positions[ci3] === this.positions[i3] &&
          this.positions[ci3 + 1] === this.positions[i3 + 1] &&
          this.positions[ci3 + 2] === this.positions[i3 + 2]
        )
      ) {
        this.addParticle3(existingSubCell, index)
      }
    }

    newSubCell.index = index
  }

  makeOctree3(origin, range) {
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
        cell = this.getSubCell3(cell, i)
      }

      this.addParticle3(cell, i)
    }
    return rootCell
  }

  massDistribution3(cell) {
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
          this.massDistribution3(subCell)
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

  compute3(cell, index, theta, softening2, collisions, collided, threshold2) {
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
          this.compute3(
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

  subdivide4(cell) {
    const size = cell.size / 2.0

    //   y |
    //    0 --- x
    // z /

    //   4 5
    //  7 6
    //   0 1
    //  3 2
    cell.leaf = false
    cell.hexadecants = HEXADECANTS.map(([x, y, z, w]) => ({
      x: cell.x + x * size,
      y: cell.y + y * size,
      z: cell.z + z * size,
      w: cell.w + w * size,
      size,
      index: null,
      mass: 0,
      cx: 0,
      cy: 0,
      cz: 0,
      cw: 0,
      hexadecants: null,
      leaf: true,
    }))
  }

  getSubCell4(cell, index) {
    let i4 = index * 4
    const x = this.positions[i4] > cell.hexadecants[14].x
    const y = this.positions[i4 + 1] > cell.hexadecants[14].y
    const z = this.positions[i4 + 2] > cell.hexadecants[14].z
    const w = this.positions[i4 + 3] > cell.hexadecants[14].w
    return cell.hexadecants[
      HEXADECANTS.findIndex(
        ([xc, yc, zc, wc]) => !!xc == x && !!yc == y && !!zc == z && !!wc == w
      )
    ]
  }

  addParticle4(cell, index) {
    // If this cell is empty, add particle to it
    if (cell.index === null) {
      cell.index = index
      return
    }

    // Subdivide this cell
    this.subdivide4(cell)

    // Inserting existing particle to subCell
    const existingSubCell = this.getSubCell4(cell, cell.index)
    existingSubCell.index = cell.index

    const newSubCell = this.getSubCell4(cell, index)
    // If both cells end up in same octant, subdivide again
    if (existingSubCell === newSubCell) {
      // Prevent same position infinite loop
      let i4 = index * 4
      let ci4 = cell.index * 4
      if (
        !(
          this.positions[ci4] === this.positions[i4] &&
          this.positions[ci4 + 1] === this.positions[i4 + 1] &&
          this.positions[ci4 + 2] === this.positions[i4 + 2] &&
          this.positions[ci4 + 3] === this.positions[i4 + 3]
        )
      ) {
        this.addParticle4(existingSubCell, index)
      }
    }

    newSubCell.index = index
  }

  makeOctree4(origin, range) {
    const rootCell = {
      x: origin,
      y: origin,
      z: origin,
      w: origin,
      size: range,
      index: null,
      mass: 0,
      cx: 0,
      cy: 0,
      cz: 0,
      cw: 0,
      hexadecants: null,
      leaf: true,
    }

    // Let's insert every particles:
    for (let i = 0; i < this.len; i++) {
      let cell = rootCell

      while (!cell.leaf) {
        cell = this.getSubCell4(cell, i)
      }

      this.addParticle4(cell, i)
    }
    return rootCell
  }

  massDistribution4(cell) {
    if (cell.leaf) {
      // If this cell is a leaf set particle mass to it
      let i4 = cell.index * 4
      cell.cx = this.positions[i4]
      cell.cy = this.positions[i4 + 1]
      cell.cz = this.positions[i4 + 2]
      cell.cw = this.positions[i4 + 3]
      cell.mass = this.masses[cell.index]
    } else {
      // For each octant
      for (let i = 0, n = cell.hexadecants.length; i < n; i++) {
        const subCell = cell.hexadecants[i]
        // If it has particles
        if (subCell.index !== null) {
          // Compute its distribution
          this.massDistribution4(subCell)
          cell.mass += subCell.mass
          cell.cx += subCell.cx * subCell.mass
          cell.cy += subCell.cy * subCell.mass
          cell.cz += subCell.cz * subCell.mass
          cell.cw += subCell.cw * subCell.mass
        }
      }

      // Compute center of mass
      cell.cx /= cell.mass
      cell.cy /= cell.mass
      cell.cz /= cell.mass
      cell.cw /= cell.mass
    }
  }

  compute4(cell, index, theta, softening2, collisions, collided, threshold2) {
    // If it's a leaf and cell is not containing cell
    if (cell.leaf) {
      if (cell.index !== null && cell.index !== index) {
        // Compute classical interactions between index particle and cell particle
        const i4 = index * 4
        const j4 = cell.index * 4
        const x = this.positions[j4] - this.positions[i4]
        const y = this.positions[j4 + 1] - this.positions[i4 + 1]
        const z = this.positions[j4 + 2] - this.positions[i4 + 2]
        const w = this.positions[j4 + 3] - this.positions[i4 + 3]
        const d2 = x * x + y * y + z * z + w * w
        const d2s = d2 + softening2
        if (collisions) {
          if (d2 < threshold2) {
            collided.push([index, cell.index])
          }
        }
        const fact = this.masses[cell.index] / (d2s * d2s)

        this.accelerations[i4] += fact * x
        this.accelerations[i4 + 1] += fact * y
        this.accelerations[i4 + 2] += fact * z
        this.accelerations[i4 + 3] += fact * w
      }
    } else {
      // If this cell contains hexadecants
      // Compute distance between this particle and the cell center of mass
      const i4 = index * 4
      const x = cell.cx - this.positions[i4]
      const y = cell.cy - this.positions[i4 + 1]
      const z = cell.cz - this.positions[i4 + 2]
      const w = cell.cw - this.positions[i4 + 3]
      const r2 = x * x + y * y + z * z + w * w
      const d2 = cell.size * cell.size

      if (d2 < theta * theta * r2) {
        // If the ratio of distance and radius is below theta, use approximation
        // Compute interaction between this particle and this cell
        const fact = cell.mass / (r2 * r2)

        this.accelerations[i4] += fact * x
        this.accelerations[i4 + 1] += fact * y
        this.accelerations[i4 + 2] += fact * z
        this.accelerations[i4 + 3] += fact * w
      } else {
        // Otherwise compute accelerations for each octant
        for (let i = 0, n = cell.hexadecants.length; i < n; i++) {
          this.compute4(
            cell.hexadecants[i],
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
    const computeN = this[`compute${this.N}`].bind(this)

    const rootCell = this[`makeOctree${this.N}`](min, max - min)
    this[`massDistribution${this.N}`](rootCell)

    for (let i = 0; i < this.len; i++) {
      let I = i * this.N
      for (let s = 0; s < this.N; s++) {
        this.accelerations[I + s] = 0
      }

      computeN(rootCell, i, theta, softening2, collisions, collided, threshold2)

      for (let s = 0; s < this.N; s++) {
        this.accelerations[I + s] *= gravitationalConstant
      }
    }

    return this.solve(collided)
  }
}
