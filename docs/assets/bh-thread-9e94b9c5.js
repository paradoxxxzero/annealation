(function() {
  "use strict";
  const compute2 = (cells, cell, index, theta, softening2, collisions, collided, threshold2, positions, accelerations, masses) => {
    if (isNaN(cells[cell + 5])) {
      const cellIndex = cells[cell + 1];
      if (cellIndex !== null && cellIndex !== index) {
        const i2 = index * 2;
        const j2 = cellIndex * 2;
        const x = positions[j2] - positions[i2];
        const y = positions[j2 + 1] - positions[i2 + 1];
        const d2 = x * x + y * y;
        if (collisions) {
          if (d2 < threshold2) {
            collided.push([index, cellIndex]);
          }
        }
        const fact = masses[cellIndex] / (d2 + softening2);
        accelerations[i2] += fact * x;
        accelerations[i2 + 1] += fact * y;
      }
    } else {
      const i2 = index * 2;
      const x = cells[cell + 3] - positions[i2];
      const y = cells[cell + 4] - positions[i2 + 1];
      const r2 = x * x + y * y;
      const d2 = cell.size * cell.size;
      if (d2 < theta * theta * r2) {
        const fact = cells[cell + 2] / r2;
        accelerations[i2] += fact * x;
        accelerations[i2 + 1] += fact * y;
      } else {
        for (let i = 0, n = 4; i < n; i++) {
          compute2(
            cells,
            cells[cell + i + 5],
            index,
            theta,
            softening2,
            collisions,
            collided,
            threshold2,
            positions,
            accelerations,
            masses
          );
        }
      }
    }
  };
  const compute3 = (cells, cell, index, theta, softening2, collisions, collided, threshold2, positions, accelerations, masses) => {
    if (isNaN(cells[cell + 6])) {
      const cellIndex = cells[cell + 1];
      if (cellIndex !== null && cellIndex !== index) {
        const i3 = index * 3;
        const j3 = cellIndex * 3;
        const x = positions[j3] - positions[i3];
        const y = positions[j3 + 1] - positions[i3 + 1];
        const z = positions[j3 + 2] - positions[i3 + 2];
        const d2 = x * x + y * y + z * z;
        const d = Math.sqrt(d2 + softening2);
        if (collisions) {
          if (d2 < threshold2) {
            collided.push([index, cellIndex]);
          }
        }
        const fact = masses[cellIndex] / (d * d * d);
        accelerations[i3] += fact * x;
        accelerations[i3 + 1] += fact * y;
        accelerations[i3 + 2] += fact * z;
      }
    } else {
      const i3 = index * 3;
      const x = cells[cell + 3] - positions[i3];
      const y = cells[cell + 4] - positions[i3 + 1];
      const z = cells[cell + 5] - positions[i3 + 2];
      const r = Math.sqrt(x * x + y * y + z * z);
      const d = cells[cell];
      if (d / r < theta) {
        const fact = cells[cell + 2] / (r * r * r);
        accelerations[i3] += fact * x;
        accelerations[i3 + 1] += fact * y;
        accelerations[i3 + 2] += fact * z;
      } else {
        for (let i = 0, n = 8; i < n; i++) {
          compute3(
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
          );
        }
      }
    }
  };
  const compute4 = (cells, cell, index, theta, softening2, collisions, collided, threshold2, positions, accelerations, masses) => {
    if (isNaN(cells[cell + 7])) {
      const cellIndex = cells[cell + 1];
      if (cellIndex !== null && cellIndex !== index) {
        const i4 = index * 4;
        const j4 = cellIndex * 4;
        const x = positions[j4] - positions[i4];
        const y = positions[j4 + 1] - positions[i4 + 1];
        const z = positions[j4 + 2] - positions[i4 + 2];
        const w = positions[j4 + 3] - positions[i4 + 3];
        const d2 = x * x + y * y + z * z + w * w;
        const d2s = d2 + softening2;
        if (collisions) {
          if (d2 < threshold2) {
            collided.push([index, cellIndex]);
          }
        }
        const fact = masses[cellIndex] / (d2s * d2s);
        accelerations[i4] += fact * x;
        accelerations[i4 + 1] += fact * y;
        accelerations[i4 + 2] += fact * z;
        accelerations[i4 + 3] += fact * w;
      }
    } else {
      const i4 = index * 4;
      const x = cells[cell + 4] - positions[i4];
      const y = cells[cell + 4] - positions[i4 + 1];
      const z = cells[cell + 5] - positions[i4 + 2];
      const w = cells[cell + 6] - positions[i4 + 3];
      const r2 = x * x + y * y + z * z + w * w;
      const d2 = cell.size * cell.size;
      if (d2 < theta * theta * r2) {
        const fact = cells[cell + 2] / (r2 * r2);
        accelerations[i4] += fact * x;
        accelerations[i4 + 1] += fact * y;
        accelerations[i4 + 2] += fact * z;
        accelerations[i4 + 3] += fact * w;
      } else {
        for (let i = 0, n = 16; i < n; i++) {
          compute4(
            cells,
            cells[cell + i + 7],
            index,
            theta,
            softening2,
            collisions,
            collided,
            threshold2,
            positions,
            accelerations,
            masses
          );
        }
      }
    }
  };
  onmessage = function(e) {
    const [
      start,
      end,
      N,
      theta,
      gravitationalConstant,
      softening2,
      collisions,
      threshold2,
      accelerationsBuffer,
      positionsBuffer,
      massesBuffer,
      cellsBuffer
    ] = e.data;
    const positions = new Float32Array(positionsBuffer);
    const accelerations = new Float32Array(accelerationsBuffer);
    const masses = new Float32Array(massesBuffer);
    const cells = new Float32Array(cellsBuffer);
    const collided = [];
    const computeN = { 2: compute2, 3: compute3, 4: compute4 }[N];
    for (let i = start; i < end; i++) {
      let I = i * N;
      for (let s = 0; s < N; s++) {
        accelerations[I + s] = 0;
      }
      computeN(
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
      );
      for (let s = 0; s < N; s++) {
        accelerations[I + s] *= gravitationalConstant;
      }
    }
    postMessage([accelerationsBuffer, start, end, collided]);
  };
})();
