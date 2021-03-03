function getAccelerations(
  cells,
  cell,
  index,
  theta,
  softening2,
  collisions,
  collided,
  threshold2,
  positions,
  accelerations,
  masses
) {
  // If it's a leaf and cell is not containing cell
  if (isNaN(cells[cell + 6])) {
    const cellIndex = cells[cell + 1]
    if (cellIndex !== null && cellIndex !== index) {
      // Compute classical interactions between index particle and cell particle
      const i3 = index * 3
      const j3 = cellIndex * 3
      const x = positions[j3] - positions[i3]
      const y = positions[j3 + 1] - positions[i3 + 1]
      const z = positions[j3 + 2] - positions[i3 + 2]
      const d2 = x * x + y * y + z * z
      const d = Math.sqrt(d2 + softening2)
      if (collisions) {
        if (d2 < threshold2) {
          collided.push([index, cellIndex])
        }
      }
      const fact = masses[cellIndex] / (d * d * d)

      accelerations[i3] += fact * x
      accelerations[i3 + 1] += fact * y
      accelerations[i3 + 2] += fact * z
    }
  } else {
    // If this cell contains octants
    // Compute distance between this particle and the cell center of mass
    const i3 = index * 3
    const x = cells[cell + 3] - positions[i3]
    const y = cells[cell + 4] - positions[i3 + 1]
    const z = cells[cell + 5] - positions[i3 + 2]
    const r = Math.sqrt(x * x + y * y + z * z)
    const d = cells[cell]

    if (d / r < theta) {
      // If the ratio of distance and radius is below theta, use approximation
      // Compute interaction between this particle and this cell
      const fact = cells[cell + 2] / (r * r * r)

      accelerations[i3] += fact * x
      accelerations[i3 + 1] += fact * y
      accelerations[i3 + 2] += fact * z
    } else {
      // Otherwise compute accelerations for each octant
      for (let i = 0, n = 8; i < n; i++) {
        getAccelerations(
          cells,
          cells[cell + i + 6],
          index,
          theta,
          softening2,
          collisions,
          collided,
          threshold2,
          positions,
          accelerations,
          masses
        )
      }
    }
  }
}

onmessage = function (e) {
  const [
    start,
    end,
    theta,
    gravitationalConstant,
    softening2,
    collisions,
    threshold2,
    accelerationsBuffer,
    positionsBuffer,
    massesBuffer,
    cellsBuffer,
  ] = e.data
  const positions = new Float32Array(positionsBuffer)
  const accelerations = new Float32Array(accelerationsBuffer)
  const masses = new Float32Array(massesBuffer)
  const cells = new Float32Array(cellsBuffer)
  const collided = []
  for (let i = start; i < end; i++) {
    let i3 = i * 3
    accelerations[i3] = 0
    accelerations[i3 + 1] = 0
    accelerations[i3 + 2] = 0

    getAccelerations(
      cells,
      0,
      i,
      theta,
      softening2,
      collisions,
      collided,
      threshold2,
      positions,
      accelerations,
      masses
    )

    accelerations[i3] *= gravitationalConstant
    accelerations[i3 + 1] *= gravitationalConstant
    accelerations[i3 + 2] *= gravitationalConstant
  }
  postMessage([accelerationsBuffer, start, end, collided])
}
