import { getAccelerations } from './bh-cell'
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
