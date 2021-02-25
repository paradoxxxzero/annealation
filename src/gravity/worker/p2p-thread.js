let accelerationsBuffer,
  positionsBuffer,
  massesBuffer,
  hasSAB = false

onmessage = function (e) {
  const type = e.data[0]
  if (type === 'init') {
    ;[, accelerationsBuffer, positionsBuffer, massesBuffer] = e.data
    hasSAB = true
    return
  }
  const [, start, end, len, gravitationalConstant, softening2] = e.data
  if (!hasSAB) {
    ;[, , , , , , accelerationsBuffer, positionsBuffer, massesBuffer] = e.data
  }
  const positions = new Float32Array(positionsBuffer)
  const accelerations = new Float32Array(accelerationsBuffer)
  const masses = new Float32Array(massesBuffer)
  const u = [0, 0, 0]
  for (var i = start; i < end; i++) {
    accelerations[i * 3] = 0
    accelerations[i * 3 + 1] = 0
    accelerations[i * 3 + 2] = 0
    for (let j = 0; j < len; j++) {
      u[0] = positions[j * 3] - positions[i * 3]
      u[1] = positions[j * 3 + 1] - positions[i * 3 + 1]
      u[2] = positions[j * 3 + 2] - positions[i * 3 + 2]
      let distance2 = u[0] * u[0] + u[1] * u[1] + u[2] * u[2]
      let distance = Math.sqrt(distance2 + softening2)
      // if (collisions) {
      //   if (distance2 < threshold2) {
      //     skip.push(j)
      //     collided.push((i, j))
      //   }
      // }

      let fact =
        (masses[j] * gravitationalConstant) / (distance * distance * distance)

      accelerations[i * 3] += u[0] * fact
      accelerations[i * 3 + 1] += u[1] * fact
      accelerations[i * 3 + 2] += u[2] * fact
    }
  }
  postMessage(hasSAB ? 'ok' : [accelerationsBuffer, start, end])
}
