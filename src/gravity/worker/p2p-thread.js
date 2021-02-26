onmessage = function (e) {
  const [
    start,
    end,
    len,
    gravitationalConstant,
    softening2,
    collisions,
    threshold2,
    accelerationsBuffer,
    positionsBuffer,
    massesBuffer,
  ] = e.data
  const positions = new Float32Array(positionsBuffer)
  const accelerations = new Float32Array(accelerationsBuffer)
  const masses = new Float32Array(massesBuffer)
  const collided = []
  const u = [0, 0, 0]
  for (var i = start; i < end; i++) {
    accelerations[i * 3] = 0
    accelerations[i * 3 + 1] = 0
    accelerations[i * 3 + 2] = 0
    for (var j = 0; j < len; j++) {
      if (i === j) {
        continue
      }
      u[0] = positions[j * 3] - positions[i * 3]
      u[1] = positions[j * 3 + 1] - positions[i * 3 + 1]
      u[2] = positions[j * 3 + 2] - positions[i * 3 + 2]
      let distance2 = u[0] * u[0] + u[1] * u[1] + u[2] * u[2]
      let distance = Math.sqrt(distance2 + softening2)
      if (collisions) {
        if (distance2 < threshold2) {
          collided.push([i, j])
        }
      }

      let fact =
        (masses[j] * gravitationalConstant) / (distance * distance * distance)

      accelerations[i * 3] += u[0] * fact
      accelerations[i * 3 + 1] += u[1] * fact
      accelerations[i * 3 + 2] += u[2] * fact
    }
  }
  postMessage([accelerationsBuffer, start, end, collided])
}
