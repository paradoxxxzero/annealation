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
  const a = [0, 0, 0]
  for (let i = start; i < end; i++) {
    a.fill(0)
    for (let j = 0; j < len; j++) {
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

      let fact = masses[j] / (distance * distance * distance)
      a[0] += u[0] * fact
      a[1] += u[1] * fact
      a[2] += u[2] * fact
    }
    accelerations[i * 3] = a[0] * gravitationalConstant
    accelerations[i * 3 + 1] = a[1] * gravitationalConstant
    accelerations[i * 3 + 2] = a[2] * gravitationalConstant
  }
  postMessage([accelerationsBuffer, start, end, collided])
}
