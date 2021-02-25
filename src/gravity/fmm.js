import NoGravity from './none'

export default class FMMGravity extends NoGravity {
  constructor(orbs, params) {
    super(orbs, params)
    this.paramsChange()
  }

  paramsChange() {
    this.grid_dimension_size = 1 << (3 * ~~this.params.resolution)
    this.grid = new Float32Array(this.grid_dimension_size * 3)
  }

  getCells(position) {
    const cells = []
    var num,
      size,
      x,
      y,
      z,
      half_range = this.params.range * 0.5

    for (var level = 1; level < ~~this.params.resolution; level++) {
      num = 1 << level
      size = this.params.range / num
      x = Math.floor((position.x + half_range) / size)
      y = Math.floor((position.y + half_range) / size)
      z = Math.floor((position.z + half_range) / size)

      // in bounds
      if (0 <= x && x < num && 0 <= y && y < num && 0 <= z && z < num) {
        cells.push([level, x, y, z])
      }
    }
    return cells
  }

  getHash(level, x, y, z) {
    return (
      (1 << (3 * level)) + x * (1 << (2 * level)) + y * (1 << (1 * level)) + z
    )
  }

  simulate() {
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
    this.grid.fill(0)

    var i,
      n,
      cells,
      cell_size,
      cell_hash,
      half_range = this.params.range * 0.5,
      childrenShifts = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 0],
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ]

    // Computing cells from all particles
    for (i = 0, n = this.len; i < n; i++) {
      cells = this.getCells(this.position[i])
      var cell_level = 0,
        cell_x = 0,
        cell_y = 0,
        cell_z = 0,
        cell_num,
        occ_level,
        occ_x,
        occ_y,
        occ_z,
        x,
        y,
        z,
        level,
        shift,
        cell_i,
        shift_i,
        offset_x,
        offset_y,
        offset_z,
        k,
        distance
      for (cell_i = 1; cell_i < cells.length; cell_i++) {
        ;[occ_level, occ_x, occ_y, occ_z] = cells[cell_i]
        for (shift_i = 0; shift_i < childrenShifts.length; shift_i++) {
          shift = childrenShifts[shift_i]
          x = 2 * cell_x + shift[0]
          y = 2 * cell_y + shift[1]
          z = 2 * cell_z + shift[2]
          level = cell_level + 1

          cell_num = 1 << level

          if (!(x == occ_x && y == occ_y && z == occ_z && level == occ_level)) {
            cell_hash = this.getHash(level, x, y, z)

            cell_size = this.params.range / cell_num
            offset_x = this.position[i].x - (x + 0.5) * cell_size + half_range
            offset_y = this.position[i].y - (y + 0.5) * cell_size + half_range
            offset_z = this.position[i].z - (z + 0.5) * cell_size + half_range
            distance = Math.sqrt(
              offset_x * offset_x +
                offset_y * offset_y +
                offset_z * offset_z +
                softening2
            )
            k =
              (gravitationalConstant * this.masses[i]) /
              (distance * distance * distance)

            this.grid[cell_hash] += k * offset_x
            this.grid[cell_hash + this.grid_dimension_size] += k * offset_y
            this.grid[cell_hash + 2 * this.grid_dimension_size] += k * offset_z
          }
        }
        cell_level = occ_level
        cell_x = occ_x
        cell_y = occ_y
        cell_z = occ_z
      }
    }

    // Applying force from all cells to particles
    for (i = 0, n = this.len; i < n; i++) {
      cells = this.getCells(this.position[i])
      this.acceleration[i].set(0, 0, 0)
      for (cell_i = 0; cell_i < cells.length; cell_i++) {
        cell_hash = this.getHash(...cells[cell_i])
        this.acceleration[i].x += this.grid[cell_hash]
        this.acceleration[i].y += this.grid[
          cell_hash + this.grid_dimension_size
        ]
        this.acceleration[i].z += this.grid[
          cell_hash + 2 * this.grid_dimension_size
        ]
      }
    }

    escapeDistance && this.solveEscapes(skip)
    collided.length && this.solveCollisions(collided)
    skip.length && (this.len = this.crunchOrbs(skip))

    return this.len
  }
}
