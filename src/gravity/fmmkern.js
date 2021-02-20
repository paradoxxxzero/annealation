import { Vector3 } from 'three'
const maxParticles = 10000000 // max of particles
const numExpansions = 10 // order of expansion in FMM
const maxP2PInteraction = 27 // max of P2P interacting boxes
const maxM2LInteraction = 189 // max of M2L interacting boxes
const numRelativeBox = 512 // max of relative box positioning
const targetBufferSize = 200000 // max of GPU target buffer
const sourceBufferSize = 100000 // max of GPU source buffer
const threadsPerBlockTypeA = 128 // size of GPU thread block P2P
const threadsPerBlockTypeB = 64 // size of GPU thread block M2L
const eps = 1e-6 // single precision epsilon
const inv4PI = 0.25 / Math.PI // Laplace kernel coefficient

const numExpansion2 = numExpansions * numExpansions
const numExpansion4 = numExpansion2 * numExpansion2
const numCoefficients = (numExpansions * (numExpansions + 1)) / 2
const DnmSize = (4 * numExpansion2 * numExpansions - numExpansions) / 3

var Anm, anm, tree
var particleOffset,
  boxIndexMask,
  boxIndexFull,
  levelOffset,
  numInteraction,
  interactionList,
  boxOffsetStart,
  boxOffsetEnd,
  factorial,
  Lnm,
  LnmOld,
  Mnm,
  Ynm,
  Dnm

function cart2sph(r, theta, phi, dx, dy, dz) {
  r = Math.sqrtf(dx * dx + dy * dy + dz * dz) + eps
  theta = Math.aMath.cos(dz / r)
  if (Math.abs(dx) + Math.abs(dy) < eps) {
    phi = 0
  } else if (Math.abs(dx) < eps) {
    phi = (dy / Math.abs(dy)) * Math.PI * 0.5
  } else if (dx > 0) {
    phi = Math.aMath.tan(dy / dx)
  } else {
    phi = Math.aMath.tan(dy / dx) + Math.PI
  }
}

class Kernel {
  // direct summation kernel
  direct(n) {
    var i, j, dist, invDist, invDistCube

    for (i = 0; i < n; i++) {
      var ai = { x: 0.0, y: 0.0, z: 0.0 }
      for (j = 0; j < n; j++) {
        dist.x = bodyPos[i].x - bodyPos[j].x
        dist.y = bodyPos[i].y - bodyPos[j].y
        dist.z = bodyPos[i].z - bodyPos[j].z
        invDist =
          1.0 /
          Math.sqrt(dist.x * dist.x + dist.y * dist.y + dist.z * dist.z + eps)
        invDistCube = bodyPos[j].w * invDist * invDist * invDist
        ai.x -= dist.x * invDistCube
        ai.y -= dist.y * invDistCube
        ai.z -= dist.z * invDistCube
      }
      bodyAccel[i].x = inv4PI * ai.x
      bodyAccel[i].y = inv4PI * ai.y
      bodyAccel[i].z = inv4PI * ai.z
    }
  }

  // precalculate M2L translation matrix and Wigner rotation matrix
  precalc() {
    var n,
      m,
      nm,
      nabsm,
      j,
      k,
      nk,
      npn,
      nmn,
      npm,
      nmm,
      nmk,
      i,
      nmk1,
      nm1k,
      nmk2,
      boxIndex3D,
      dist,
      anmk,
      Dnmd,
      fnma,
      fnpa,
      pn,
      p,
      p1,
      p2,
      anmd,
      anmkd,
      rho,
      alpha,
      beta,
      sc,
      ank,
      ek,
      expBeta,
      jk,
      jkn,
      jnk,
      fnmm,
      fnpm,
      fad

    for (n = 0; n < 2 * numExpansions; n++) {
      for (m = -n; m <= n; m++) {
        nm = n * n + n + m
        nabsm = Math.abs(m)
        fnmm = 1.0
        for (i = 1; i <= n - m; i++) fnmm *= i
        fnpm = 1.0
        for (i = 1; i <= n + m; i++) fnpm *= i
        fnma = 1.0
        for (i = 1; i <= n - nabsm; i++) fnma *= i
        fnpa = 1.0
        for (i = 1; i <= n + nabsm; i++) fnpa *= i
        factorial[nm] = Math.sqrt(fnma / fnpa)
        fad = Math.sqrt(fnmm * fnpm)
        anm[nm] = Math.pow(-1.0, n) / fad
      }
    }

    for (j = 0; j < numExpansions; j++) {
      for (k = -j; k <= j; k++) {
        jk = j * j + j + k
        for (n = Math.abs(k); n < numExpansions; n++) {
          nk = n * n + n + k
          jkn = jk * numExpansion2 + nk
          jnk = (j + n) * (j + n) + j + n
          Anm[jkn] = (Math.pow(-1.0, j + k) * anm[nk] * anm[jk]) / anm[jnk]
        }
      }
    }

    pn = 1
    for (m = 0; m < 2 * numExpansions; m++) {
      p = pn
      npn = m * m + 2 * m
      nmn = m * m
      Ynm[npn] = factorial[npn] * p
      Ynm[nmn] = conj(Ynm[npn])
      p1 = p
      p = (2 * m + 1) * p
      for (n = m + 1; n < 2 * numExpansions; n++) {
        npm = n * n + n + m
        nmm = n * n + n - m
        Ynm[npm] = factorial[npm] * p
        Ynm[nmm] = conj(Ynm[npm])
        p2 = p1
        p1 = p
        p = ((2 * n + 1) * p1 - (n + m) * p2) / (n - m + 1)
      }
      pn = 0
    }

    for (n = 0; n < numExpansions; n++) {
      for (m = 1; m <= n; m++) {
        anmd = n * (n + 1) - m * (m - 1)
        for (k = 1 - m; k < m; k++) {
          nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k
          anmkd = (n * (n + 1) - k * (k + 1)) / (n * (n + 1) - m * (m - 1))
          anmk[0][nmk] = -(m + k) / Math.sqrt(anmd)
          anmk[1][nmk] = Math.sqrt(anmkd)
        }
      }
    }

    for (i = 0; i < numRelativeBox; i++) {
      tree.unmorton(i, boxIndex3D)
      dist.x = boxIndex3D.x - 3
      dist.y = boxIndex3D.y - 3
      dist.z = boxIndex3D.z - 3
      cart2sph(rho, alpha, beta, dist.x, dist.y, dist.z)

      sc = Math.sin(alpha) / (1 + Math.cos(alpha))
      for (n = 0; n < 4 * numExpansions - 3; n++) {
        expBeta[n] = exp((n - 2 * numExpansions + 2) * beta * I)
      }

      for (n = 0; n < numExpansions; n++) {
        nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + n
        Dnmd[nmk] = Math.pow(Math.cos(alpha * 0.5), 2 * n)
        for (k = n; k >= 1 - n; k--) {
          nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k
          nmk1 =
            (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k - 1
          ank = (n + k) / (n - k + 1)
          Dnmd[nmk1] = Math.sqrt(ank) * Math.tan(alpha * 0.5) * Dnmd[nmk]
        }
        for (m = n; m >= 1; m--) {
          for (k = m - 1; k >= 1 - m; k--) {
            nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k
            nmk1 =
              (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k + 1
            nm1k =
              (4 * n * n * n + 6 * n * n + 5 * n) / 3 +
              (m - 1) * (2 * n + 1) +
              k
            Dnmd[nm1k] =
              anmk[1][nmk] * Dnmd[nmk1] + anmk[0][nmk] * sc * Dnmd[nmk]
          }
        }
      }

      for (n = 1; n < numExpansions; n++) {
        for (m = 0; m <= n; m++) {
          for (k = -m; k <= -1; k++) {
            ek = Math.pow(-1.0, k)
            nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k
            nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m
            Dnmd[nmk] = ek * Dnmd[nmk]
            Dnmd[nmk1] = Math.pow(-1.0, m + k) * Dnmd[nmk]
          }
          for (k = 0; k <= m; k++) {
            nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k
            nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + k * (2 * n + 1) + m
            nmk2 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m
            Dnmd[nmk1] = Math.pow(-1.0, m + k) * Dnmd[nmk]
            Dnmd[nmk2] = Dnmd[nmk1]
          }
        }
      }

      for (n = 0; n < numExpansions; n++) {
        for (m = 0; m <= n; m++) {
          for (k = -n; k <= n; k++) {
            nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k
            nk = n * (n + 1) + k
            Dnm[i][m][nk] = Dnmd[nmk] * expBeta[k + m + 2 * numExpansions - 2]
          }
        }
      }

      alpha = -alpha
      beta = -beta

      sc = Math.sin(alpha) / (1 + Math.cos(alpha))
      for (n = 0; n < 4 * numExpansions - 3; n++) {
        expBeta[n] = exp((n - 2 * numExpansions + 2) * beta * I)
      }

      for (n = 0; n < numExpansions; n++) {
        nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + n
        Dnmd[nmk] = Math.pow(Math.cos(alpha * 0.5), 2 * n)
        for (k = n; k >= 1 - n; k--) {
          nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k
          nmk1 =
            (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k - 1
          ank = (n + k) / (n - k + 1)
          Dnmd[nmk1] = Math.sqrt(ank) * Math.tan(alpha * 0.5) * Dnmd[nmk]
        }
        for (m = n; m >= 1; m--) {
          for (k = m - 1; k >= 1 - m; k--) {
            nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k
            nmk1 =
              (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k + 1
            nm1k =
              (4 * n * n * n + 6 * n * n + 5 * n) / 3 +
              (m - 1) * (2 * n + 1) +
              k
            Dnmd[nm1k] =
              anmk[1][nmk] * Dnmd[nmk1] + anmk[0][nmk] * sc * Dnmd[nmk]
          }
        }
      }

      for (n = 1; n < numExpansions; n++) {
        for (m = 0; m <= n; m++) {
          for (k = -m; k <= -1; k++) {
            ek = Math.pow(-1.0, k)
            nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k
            nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m
            Dnmd[nmk] = ek * Dnmd[nmk]
            Dnmd[nmk1] = Math.pow(-1.0, m + k) * Dnmd[nmk]
          }
          for (k = 0; k <= m; k++) {
            nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k
            nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + k * (2 * n + 1) + m
            nmk2 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m
            Dnmd[nmk1] = Math.pow(-1.0, m + k) * Dnmd[nmk]
            Dnmd[nmk2] = Dnmd[nmk1]
          }
        }
      }

      for (n = 0; n < numExpansions; n++) {
        for (m = 0; m <= n; m++) {
          for (k = -n; k <= n; k++) {
            nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k
            nk = n * (n + 1) + k
            Dnm[i + numRelativeBox][m][nk] =
              Dnmd[nmk] * expBeta[k + m + 2 * numExpansions - 2]
          }
        }
      }
    }

    for (j = 0; j < numBoxIndexTotal; j++) {
      for (i = 0; i < numCoefficients; i++) {
        Mnm[j][i] = 0
      }
    }
  }

  // Spherical harmonic rotation
  rotation(Cnm, CnmOut, Dnm) {
    var n, m, nms, k, nk, nks, CnmScalar

    for (n = 0; n < numExpansions; n++) {
      for (m = 0; m <= n; m++) {
        nms = (n * (n + 1)) / 2 + m
        CnmScalar = 0
        for (k = -n; k <= -1; k++) {
          nk = n * (n + 1) + k
          nks = (n * (n + 1)) / 2 - k
          CnmScalar += Dnm[m][nk] * conj(Cnm[nks])
        }
        for (k = 0; k <= n; k++) {
          nk = n * (n + 1) + k
          nks = (n * (n + 1)) / 2 + k
          CnmScalar += Dnm[m][nk] * Cnm[nks]
        }
        CnmOut[nms] = CnmScalar
      }
    }
  }

  // p2p
  p2p(numBoxIndex) {
    var ii, ij, jj, i, j, dist

    for (ii = 0; ii < numBoxIndex; ii++) {
      for (ij = 0; ij < numInteraction[ii]; ij++) {
        jj = interactionList[ii][ij]
        for (i = particleOffset[0][ii]; i <= particleOffset[1][ii]; i++) {
          ai = { x: 0.0, y: 0.0, z: 0.0 }
          for (j = particleOffset[0][jj]; j <= particleOffset[1][jj]; j++) {
            dist.x = bodyPos[i].x - bodyPos[j].x
            dist.y = bodyPos[i].y - bodyPos[j].y
            dist.z = bodyPos[i].z - bodyPos[j].z
            var invDist =
              1.0 /
              Math.sqrt(
                dist.x * dist.x + dist.y * dist.y + dist.z * dist.z + eps
              )
            var invDistCube = invDist * invDist * invDist
            var s = bodyPos[j].w * invDistCube
            ai.x -= dist.x * s
            ai.y -= dist.y * s
            ai.z -= dist.z * s
          }
          bodyAccel[i].x += inv4PI * ai.x
          bodyAccel[i].y += inv4PI * ai.y
          bodyAccel[i].z += inv4PI * ai.z
        }
      }
    }
  }

  // p2m
  p2m(numBoxIndex) {
    var jj,
      j,
      n,
      m,
      nm,
      nms,
      boxIndex3D,
      boxCenter,
      dist,
      boxSize,
      rho,
      alpha,
      beta,
      xx,
      s2,
      fact,
      pn,
      p,
      p1,
      p2,
      rhom,
      rhon,
      YnmReal,
      MnmVector,
      eim

    boxSize = rootBoxSize / (1 << maxLevel)
    for (jj = 0; jj < numBoxIndex; jj++) {
      tree.unmorton(boxIndexFull[jj], boxIndex3D)
      boxCenter.x = boxMin.x + (boxIndex3D.x + 0.5) * boxSize
      boxCenter.y = boxMin.y + (boxIndex3D.y + 0.5) * boxSize
      boxCenter.z = boxMin.z + (boxIndex3D.z + 0.5) * boxSize
      for (j = 0; j < numCoefficients; j++) {
        MnmVector[j] = 0
      }
      for (j = particleOffset[0][jj]; j <= particleOffset[1][jj]; j++) {
        dist.x = bodyPos[j].x - boxCenter.x
        dist.y = bodyPos[j].y - boxCenter.y
        dist.z = bodyPos[j].z - boxCenter.z
        cart2sph(rho, alpha, beta, dist.x, dist.y, dist.z)
        xx = Math.cos(alpha)
        s2 = Math.sqrt((1 - xx) * (1 + xx))
        fact = 1
        pn = 1
        rhom = 1
        for (m = 0; m < numExpansions; m++) {
          p = pn
          nm = m * m + 2 * m
          YnmReal[nm] = rhom * factorial[nm] * p
          p1 = p
          p = xx * (2 * m + 1) * p
          rhom *= rho
          rhon = rhom
          for (n = m + 1; n < numExpansions; n++) {
            nm = n * n + n + m
            YnmReal[nm] = rhon * factorial[nm] * p
            p2 = p1
            p1 = p
            p = (xx * (2 * n + 1) * p1 - (n + m) * p2) / (n - m + 1)
            rhon *= rho
          }
          pn = -pn * fact * s2
          fact += 2
        }
        for (n = 0; n < numExpansions; n++) {
          for (m = 0; m <= n; m++) {
            nm = n * n + n + m
            nms = (n * (n + 1)) / 2 + m
            eim = exp(-m * beta * I)
            MnmVector[nms] += bodyPos[j].w * YnmReal[nm] * eim
          }
        }
      }
      for (j = 0; j < numCoefficients; j++) {
        Mnm[jj][j] = MnmVector[j]
      }
    }
  }

  // m2m
  m2m(numBoxIndex, numBoxIndexOld, numLevel) {
    var ii,
      ib,
      j,
      jj,
      nfjp,
      nfjc,
      jb,
      je,
      k,
      jk,
      jks,
      n,
      jnk,
      jnks,
      nm,
      boxIndex3D,
      boxSize,
      rho,
      cnm,
      MnmScalar,
      MnmVectorB,
      MnmVectorA

    boxSize = rootBoxSize / (1 << numLevel)
    for (ii = 0; ii < numBoxIndex; ii++) {
      ib = ii + levelOffset[numLevel - 1]
      for (j = 0; j < numCoefficients; j++) {
        Mnm[ib][j] = 0
      }
    }
    for (jj = 0; jj < numBoxIndexOld; jj++) {
      jb = jj + levelOffset[numLevel]
      nfjp = boxIndexFull[jb] / 8
      nfjc = boxIndexFull[jb] % 8
      ib = boxIndexMask[nfjp] + levelOffset[numLevel - 1]
      tree.unmorton(nfjc, boxIndex3D)
      boxIndex3D.x = 4 - boxIndex3D.x * 2
      boxIndex3D.y = 4 - boxIndex3D.y * 2
      boxIndex3D.z = 4 - boxIndex3D.z * 2
      tree.morton1(boxIndex3D, je, 3)
      rho = (boxSize * Math.sqrt(3.0)) / 4
      for (j = 0; j < numCoefficients; j++) {
        MnmVectorA[j] = Mnm[jb][j]
      }
      this.rotation(MnmVectorA, MnmVectorB, Dnm[je])
      for (j = 0; j < numExpansions; j++) {
        for (k = 0; k <= j; k++) {
          jk = j * j + j + k
          jks = (j * (j + 1)) / 2 + k
          MnmScalar = 0
          for (n = 0; n <= j - Math.abs(k); n++) {
            jnk = (j - n) * (j - n) + j - n + k
            jnks = ((j - n) * (j - n + 1)) / 2 + k
            nm = n * n + n
            cnm =
              ((Math.pow(-1.0, n) * anm[nm] * anm[jnk]) / anm[jk]) *
              Math.pow(rho, n) *
              Ynm[nm]
            MnmScalar += MnmVectorB[jnks] * cnm
          }
          MnmVectorA[jks] = MnmScalar
        }
      }
      this.rotation(MnmVectorA, MnmVectorB, Dnm[je + numRelativeBox])
      for (j = 0; j < numCoefficients; j++) {
        Mnm[ib][j] += MnmVectorB[j]
      }
    }
  }

  // m2l
  m2l(numBoxIndex, numLevel) {
    var i,
      j,
      ii,
      ib,
      ix,
      iy,
      iz,
      ij,
      jj,
      jb,
      jx,
      jy,
      jz,
      je,
      k,
      jk,
      jks,
      n,
      nk,
      nks,
      jkn,
      jnk,
      boxIndex3D,
      dist,
      boxSize,
      rho,
      rhoj,
      rhojk,
      rhojn,
      LnmVectorA,
      MnmVectorA,
      LnmVectorB,
      MnmVectorB,
      cnm,
      LnmScalar

    boxSize = rootBoxSize / (1 << numLevel)
    if (numLevel == 2) {
      for (i = 0; i < numBoxIndex; i++) {
        for (j = 0; j < numCoefficients; j++) {
          Lnm[i][j] = 0
        }
      }
    }
    for (ii = 0; ii < numBoxIndex; ii++) {
      ib = ii + levelOffset[numLevel - 1]
      tree.unmorton(boxIndexFull[ib], boxIndex3D)
      ix = boxIndex3D.x
      iy = boxIndex3D.y
      iz = boxIndex3D.z
      for (ij = 0; ij < numInteraction[ii]; ij++) {
        jj = interactionList[ii][ij]
        jb = jj + levelOffset[numLevel - 1]
        for (j = 0; j < numCoefficients; j++) {
          MnmVectorB[j] = Mnm[jb][j]
        }
        tree.unmorton(boxIndexFull[jb], boxIndex3D)
        jx = boxIndex3D.x
        jy = boxIndex3D.y
        jz = boxIndex3D.z
        dist.x = (ix - jx) * boxSize
        dist.y = (iy - jy) * boxSize
        dist.z = (iz - jz) * boxSize
        boxIndex3D.x = ix - jx + 3
        boxIndex3D.y = iy - jy + 3
        boxIndex3D.z = iz - jz + 3
        tree.morton1(boxIndex3D, je, 3)
        rho =
          Math.sqrt(dist.x * dist.x + dist.y * dist.y + dist.z * dist.z) + eps
        this.rotation(MnmVectorB, MnmVectorA, Dnm[je])
        rhoj = 1
        for (j = 0; j < numExpansions; j++) {
          rhojk = rhoj
          rhoj *= rho
          for (k = 0; k <= j; k++) {
            jk = j * j + j + k
            jks = (j * (j + 1)) / 2 + k
            LnmScalar = 0
            rhojn = rhojk
            rhojk *= rho
            for (n = Math.abs(k); n < numExpansions; n++) {
              rhojn *= rho
              nk = n * n + n + k
              nks = (n * (n + 1)) / 2 + k
              jkn = jk * numExpansion2 + nk
              jnk = (j + n) * (j + n) + j + n
              cnm = (Anm[jkn] / rhojn) * Ynm[jnk]
              LnmScalar += MnmVectorA[nks] * cnm
            }
            LnmVectorA[jks] = LnmScalar
          }
        }
        this.rotation(LnmVectorA, LnmVectorB, Dnm[je + numRelativeBox])
        for (j = 0; j < numCoefficients; j++) {
          Lnm[ii][j] += LnmVectorB[j]
        }
      }
    }
    for (jj = 0; jj < numBoxIndex; jj++) {
      jb = jj + levelOffset[numLevel - 1]
      for (j = 0; j < numCoefficients; j++) {
        Mnm[jb][j] = 0
      }
    }
  }

  // l2l
  l2l(numBoxIndex, numLevel) {
    var numBoxIndexOld,
      ii,
      ib,
      i,
      nfip,
      nfic,
      je,
      j,
      k,
      jk,
      jks,
      n,
      jnk,
      nk,
      nks,
      boxIndex3D,
      boxSize,
      rho,
      cnm,
      LnmScalar,
      LnmVectorA,
      LnmVectorB

    boxSize = rootBoxSize / (1 << numLevel)
    numBoxIndexOld = numBoxIndex
    if (numBoxIndexOld < 8) numBoxIndexOld = 8
    for (ii = 0; ii < numBoxIndexOld; ii++) {
      for (i = 0; i < numCoefficients; i++) {
        LnmOld[ii][i] = Lnm[ii][i]
      }
    }

    var nbc, neo
    nbc = -1
    numBoxIndexOld = 0
    for (i = 0; i < numBoxIndexFull; i++) neo[i] = -1
    for (ii = 0; ii < numBoxIndex; ii++) {
      ib = ii + levelOffset[numLevel - 1]
      if (nbc != boxIndexFull[ib] / 8) {
        nbc = boxIndexFull[ib] / 8
        neo[nbc] = numBoxIndexOld
        numBoxIndexOld++
      }
    }

    for (ii = 0; ii < numBoxIndex; ii++) {
      ib = ii + levelOffset[numLevel - 1]
      nfip = boxIndexFull[ib] / 8
      nfic = boxIndexFull[ib] % 8
      tree.unmorton(nfic, boxIndex3D)
      boxIndex3D.x = boxIndex3D.x * 2 + 2
      boxIndex3D.y = boxIndex3D.y * 2 + 2
      boxIndex3D.z = boxIndex3D.z * 2 + 2
      tree.morton1(boxIndex3D, je, 3)
      rho = (boxSize * Math.sqrt(3.0)) / 2
      ib = neo[nfip]
      for (i = 0; i < numCoefficients; i++) {
        LnmVectorA[i] = LnmOld[ib][i]
      }
      this.rotation(LnmVectorA, LnmVectorB, Dnm[je])
      for (j = 0; j < numExpansions; j++) {
        for (k = 0; k <= j; k++) {
          jk = j * j + j + k
          jks = (j * (j + 1)) / 2 + k
          LnmScalar = 0
          for (n = j; n < numExpansions; n++) {
            jnk = (n - j) * (n - j) + n - j
            nk = n * n + n + k
            nks = (n * (n + 1)) / 2 + k
            cnm =
              ((anm[jnk] * anm[jk]) / anm[nk]) * Math.pow(rho, n - j) * Ynm[jnk]
            LnmScalar += LnmVectorB[nks] * cnm
          }
          LnmVectorA[jks] = LnmScalar
        }
      }
      this.rotation(LnmVectorA, LnmVectorB, Dnm[je + numRelativeBox])
      for (i = 0; i < numCoefficients; i++) {
        Lnm[ii][i] = LnmVectorB[i]
      }
    }
  }

  // l2p
  l2p(numBoxIndex) {
    var ii,
      i,
      n,
      nm,
      nms,
      m,
      boxIndex3D,
      boxCenter,
      accel,
      dist,
      boxSize,
      r,
      theta,
      phi,
      accelR,
      accelTheta,
      accelPhi,
      xx,
      yy,
      s2,
      fact,
      pn,
      p,
      p1,
      p2,
      rn,
      YnmReal,
      YnmRealTheta,
      LnmVector,
      rr,
      rtheta,
      rphi,
      eim,
      boxSize = rootBoxSize / (1 << maxLevel)
    for (ii = 0; ii < numBoxIndex; ii++) {
      tree.unmorton(boxIndexFull[ii], boxIndex3D)
      boxCenter.x = boxMin.x + (boxIndex3D.x + 0.5) * boxSize
      boxCenter.y = boxMin.y + (boxIndex3D.y + 0.5) * boxSize
      boxCenter.z = boxMin.z + (boxIndex3D.z + 0.5) * boxSize
      for (i = 0; i < numCoefficients; i++) LnmVector[i] = Lnm[ii][i]
      for (i = particleOffset[0][ii]; i <= particleOffset[1][ii]; i++) {
        dist.x = bodyPos[i].x - boxCenter.x
        dist.y = bodyPos[i].y - boxCenter.y
        dist.z = bodyPos[i].z - boxCenter.z
        cart2sph(r, theta, phi, dist.x, dist.y, dist.z)
        xx = Math.cos(theta)
        yy = Math.sin(theta)
        s2 = Math.sqrt((1 - xx) * (1 + xx))
        fact = 1
        pn = 1
        for (m = 0; m < numExpansions; m++) {
          p = pn
          nm = m * m + 2 * m
          YnmReal[nm] = factorial[nm] * p
          p1 = p
          p = xx * (2 * m + 1) * p
          YnmRealTheta[nm] = (factorial[nm] * (p - (m + 1) * xx * p1)) / yy
          for (n = m + 1; n < numExpansions; n++) {
            nm = n * n + n + m
            YnmReal[nm] = factorial[nm] * p
            p2 = p1
            p1 = p
            p = (xx * (2 * n + 1) * p1 - (n + m) * p2) / (n - m + 1)
            YnmRealTheta[nm] =
              (factorial[nm] * ((n - m + 1) * p - (n + 1) * xx * p1)) / yy
          }
          pn = -pn * fact * s2
          fact += 2
        }
        accelR = 0
        accelTheta = 0
        accelPhi = 0
        rn = 1
        for (n = 0; n < numExpansions; n++) {
          nm = n * n + n
          nms = (n * (n + 1)) / 2
          rr = ((n * rn) / r) * YnmReal[nm]
          rtheta = rn * YnmRealTheta[nm]
          accelR += real(rr * LnmVector[nms])
          accelTheta += real(rtheta * LnmVector[nms])
          for (m = 1; m <= n; m++) {
            nm = n * n + n + m
            nms = (n * (n + 1)) / 2 + m
            eim = exp(m * phi * I)
            rr = ((n * rn) / r) * YnmReal[nm] * eim
            rtheta = rn * YnmRealTheta[nm] * eim
            rphi = m * rn * YnmReal[nm] * eim * I
            accelR += 2 * real(rr * LnmVector[nms])
            accelTheta += 2 * real(rtheta * LnmVector[nms])
            accelPhi += 2 * real(rphi * LnmVector[nms])
          }
          rn *= r
        }
        accel.x =
          Math.sin(theta) * Math.cos(phi) * accelR +
          ((Math.cos(theta) * Math.cos(phi)) / r) * accelTheta -
          (Math.sin(phi) / r / Math.sin(theta)) * accelPhi
        accel.y =
          Math.sin(theta) * Math.sin(phi) * accelR +
          ((Math.cos(theta) * Math.sin(phi)) / r) * accelTheta +
          (Math.cos(phi) / r / Math.sin(theta)) * accelPhi
        accel.z = Math.cos(theta) * accelR - (Math.sin(theta) / r) * accelTheta
        bodyAccel[i].x += inv4PI * accel.x
        bodyAccel[i].y += inv4PI * accel.y
        bodyAccel[i].z += inv4PI * accel.z
      }
    }
  }

  // m2p
  m2p(numBoxIndex, numLevel) {
    var ii,
      i,
      ij,
      jj,
      jb,
      j,
      n,
      nm,
      nms,
      m,
      boxIndex3D,
      boxCenter,
      accel,
      dist,
      boxSize,
      r,
      theta,
      phi,
      rn,
      accelR,
      accelTheta,
      accelPhi,
      xx,
      yy,
      s2,
      fact,
      pn,
      p,
      p1,
      p2,
      YnmReal,
      YnmRealTheta,
      MnmVector,
      rr,
      rtheta,
      rphi,
      eim

    boxSize = rootBoxSize / (1 << numLevel)
    for (ii = 0; ii < numBoxIndex; ii++) {
      for (i = particleOffset[0][ii]; i <= particleOffset[1][ii]; i++) {
        for (ij = 0; ij < numInteraction[ii]; ij++) {
          jj = interactionList[ii][ij]
          jb = jj + levelOffset[numLevel - 1]
          for (j = 0; j < numCoefficients; j++) MnmVector[j] = Mnm[jb][j]
          tree.unmorton(boxIndexFull[jb], boxIndex3D)
          boxCenter.x = boxMin.x + (boxIndex3D.x + 0.5) * boxSize
          boxCenter.y = boxMin.y + (boxIndex3D.y + 0.5) * boxSize
          boxCenter.z = boxMin.z + (boxIndex3D.z + 0.5) * boxSize
          dist.x = bodyPos[i].x - boxCenter.x
          dist.y = bodyPos[i].y - boxCenter.y
          dist.z = bodyPos[i].z - boxCenter.z
          cart2sph(r, theta, phi, dist.x, dist.y, dist.z)
          xx = Math.cos(theta)
          yy = Math.sin(theta)
          s2 = Math.sqrt((1 - xx) * (1 + xx))
          fact = 1
          pn = 1
          for (m = 0; m < numExpansions; m++) {
            p = pn
            nm = m * m + 2 * m
            YnmReal[nm] = factorial[nm] * p
            p1 = p
            p = xx * (2 * m + 1) * p
            YnmRealTheta[nm] = (factorial[nm] * (p - (m + 1) * xx * p1)) / yy
            for (n = m + 1; n < numExpansions; n++) {
              nm = n * n + n + m
              YnmReal[nm] = factorial[nm] * p
              p2 = p1
              p1 = p
              p = (xx * (2 * n + 1) * p1 - (n + m) * p2) / (n - m + 1)
              YnmRealTheta[nm] =
                (factorial[nm] * ((n - m + 1) * p - (n + 1) * xx * p1)) / yy
            }
            pn = -pn * fact * s2
            fact += 2
          }
          accelR = 0
          accelTheta = 0
          accelPhi = 0
          rn = 1 / r
          for (n = 0; n < numExpansions; n++) {
            rn /= r
            nm = n * n + n
            nms = (n * (n + 1)) / 2
            rr = -(n + 1) * rn * YnmReal[nm]
            rtheta = rn * r * YnmRealTheta[nm]
            accelR += real(rr * MnmVector[nms])
            accelTheta += real(rtheta * MnmVector[nms])
            for (m = 1; m <= n; m++) {
              nm = n * n + n + m
              nms = (n * (n + 1)) / 2 + m
              eim = exp(m * phi * I)
              rr = -(n + 1) * rn * YnmReal[nm] * eim
              rtheta = rn * r * YnmRealTheta[nm] * eim
              rphi = m * rn * r * YnmReal[nm] * eim * I
              accelR += 2 * real(rr * MnmVector[nms])
              accelTheta += 2 * real(rtheta * MnmVector[nms])
              accelPhi += 2 * real(rphi * MnmVector[nms])
            }
          }
          accel.x =
            Math.sin(theta) * Math.cos(phi) * accelR +
            ((Math.cos(theta) * Math.cos(phi)) / r) * accelTheta -
            (Math.sin(phi) / r / Math.sin(theta)) * accelPhi
          accel.y =
            Math.sin(theta) * Math.sin(phi) * accelR +
            ((Math.cos(theta) * Math.sin(phi)) / r) * accelTheta +
            (Math.cos(phi) / r / Math.sin(theta)) * accelPhi
          accel.z =
            Math.cos(theta) * accelR - (Math.sin(theta) / r) * accelTheta
          bodyAccel[i].x += inv4PI * accel.x
          bodyAccel[i].y += inv4PI * accel.y
          bodyAccel[i].z += inv4PI * accel.z
        }
      }
    }
  }
}

class System {
  allocate() {
    particleOffset = new Array(2).fill(0)
    for (var i = 0; i < 2; i++)
      particleOffset[i] = new Array(numBoxIndexLeaf).fill(0)
    boxIndexMask = new Array(numBoxIndexFull).fill(0)
    boxIndexFull = new Arary(numBoxIndexTotal).fill()
    levelOffset = new Arary(maxLevel).fill()
    numInteraction = new Arary(numBoxIndexLeaf).fill()
    interactionList = new Arary(numBoxIndexLeaf)
      .fill()
      .map(() => new Array(maxM2LInteraction).fill())
    boxOffsetStart = new Arary(numBoxIndexLeaf).fill()
    boxOffsetEnd = new Arary(numBoxIndexLeaf).fill()

    factorial = new Arary(4 * numExpansion2).fill()
    Lnm = new Arary(numBoxIndexLeaf)
      .fill()
      .map(() => new Array(numCoefficients))
      .fill()
      .map(() => ({ r: 0, i: 0 }))
    LnmOld = new Arary(numBoxIndexLeaf)
      .fill()
      .map(() => new Array(numCoefficients))
      .fill()
      .map(() => ({ r: 0, i: 0 }))
    Mnm = new Arary(numBoxIndexTotal)
      .fill()
      .map(() => new Array(numCoefficients))
      .fill()
      .map(() => ({ r: 0, i: 0 }))
    Ynm = new Array(4 * numExpansion2).fill().map(() => ({ r: 0, i: 0 }))
    Dnm = new Array(2 * numRelativeBox).fill().map(() => ({ r: 0, i: 0 }))
    for (i = 0; i < 2 * numRelativeBox; i++) {
      Dnm[i] = new Array(numExpansion).fill().map(() => ({ r: 0, i: 0 }))
      for (j = 0; j < numExpansions; j++)
        Dnm[i][j] = new Array(numExpansion2).fill().map(() => ({ r: 0, i: 0 }))
    }
  }

  deallocate() {
    // var i, j
    // for (i = 0; i < 2; i++) {
    //   delete particleOffset[i]
    // }
    // delete particleOffset
    // delete boxIndexMask
    // delete boxIndexFull
    // delete levelOffset
    // delete numInteraction
    // delete interactionList
    // delete boxOffsetStart
    // delete boxOffsetEnd
    // delete mortonIndex
    // delete sortValue
    // delete sortIndex
    // delete sortValueBuffer
    // delete sortIndexBuffer
    // delete factorial
    // delete Lnm
    // delete LnmOld
    // delete Mnm
    // delete Ynm
    // for (i = 0; i < 2 * numRelativeBox; i++) {
    //   for (j = 0; j < numExpansions; j++) delete Dnm[i][j]
    //   delete Dnm[i]
    // }
    // delete Dnm
  }

  main(numParticles, treeOrFMM) {
    var i,
      numLevel,
      numBoxIndex,
      numBoxIndexOld,
      kernel = new Kernel()
    for (i = 0; i < 9; i++) t[i] = 0

    mortonIndex = new int[numParticles]()
    sortValue = new int[numParticles]()
    sortIndex = new int[numParticles]()
    sortValueBuffer = new int[numParticles]()
    sortIndexBuffer = new int[numParticles]()

    setDomainSize(numParticles)

    setOptimumLevel(numParticles)

    sortParticles(numParticles)

    countNonEmptyBoxes(numParticles)

    allocate()

    numLevel = maxLevel

    levelOffset[numLevel - 1] = 0

    kernel.precalc()

    getBoxData(numParticles, numBoxIndex)

    // P2P

    getInteractionList(numBoxIndex, numLevel, 0)

    for (i = 0; i < numParticles; i++) {
      bodyAccel[i].x = 0
      bodyAccel[i].y = 0
      bodyAccel[i].z = 0
    }

    kernel.p2p(numBoxIndex)

    numLevel = maxLevel

    // P2M

    kernel.p2m(numBoxIndex)

    if (maxLevel > 2) {
      for (numLevel = maxLevel - 1; numLevel >= 2; numLevel--) {
        if (treeOrFMM == 0) {
          // M2P at lower levels

          getInteractionList(numBoxIndex, numLevel + 1, 2)

          kernel.m2p(numBoxIndex, numLevel + 1)
        }

        // M2M

        numBoxIndexOld = numBoxIndex

        getBoxDataOfParent(numBoxIndex, numLevel, treeOrFMM)

        kernel.m2m(numBoxIndex, numBoxIndexOld, numLevel)
      }

      numLevel = 2
    } else {
      getBoxIndexMask(numBoxIndex, numLevel)
    }

    if (treeOrFMM == 0) {
      // M2P at level 2

      getInteractionList(numBoxIndex, numLevel, 1)

      kernel.m2p(numBoxIndex, numLevel)
    } else {
      // M2L at level 2

      getInteractionList(numBoxIndex, numLevel, 1)

      kernel.m2l(numBoxIndex, numLevel)

      // L2L

      if (maxLevel > 2) {
        for (numLevel = 3; numLevel <= maxLevel; numLevel++) {
          numBoxIndex = levelOffset[numLevel - 2] - levelOffset[numLevel - 1]

          kernel.l2l(numBoxIndex, numLevel)

          getBoxIndexMask(numBoxIndex, numLevel)

          // M2L at lower levels

          getInteractionList(numBoxIndex, numLevel, 2)

          kernel.m2l(numBoxIndex, numLevel)
        }

        numLevel = maxLevel
      }

      // L2P
      kernel.l2p(numBoxIndex)
    }

    // unsortParticles(numParticles);

    deallocate()
  }
}

export default class FMMKernGravity {
  constructor(orbs, range, resolution) {
    this.len = orbs.length
    this.positions = new Float32Array(3 * this.len)
    this.masses = new Float32Array(this.len)
    this.temperatures = new Float32Array(this.len)

    this.position = orbs.map(({ position }) => position)
    this.speed = orbs.map(({ speed }) => speed)
    this.acceleration = orbs.map(() => new Vector3())
    this.u = new Vector3()
    this.origin = new Vector3()

    this.range = range
    this.levels = ~~resolution

    this.grid_dimension_size = 1 << (3 * this.levels)
    this.grid = new Float32Array(this.grid_dimension_size * 3)
  }

  frog_leap(dt) {
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      this.speed[i].addScaledVector(this.acceleration[i], half_dt)
      this.position[i].addScaledVector(this.speed[i], dt)
    }
  }

  getCells(position) {
    const cells = []
    var num,
      size,
      x,
      y,
      z,
      half_range = this.range * 0.5

    for (var level = 1; level < this.levels; level++) {
      num = 1 << level
      size = this.range / num
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

  simulate(G) {
    this.grid.fill(0)

    var i,
      n,
      cells,
      cell_size,
      cell_hash,
      half_range = this.range * 0.5,
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

            cell_size = this.range / cell_num
            offset_x = this.position[i].x - (x + 0.5) * cell_size + half_range
            offset_y = this.position[i].y - (y + 0.5) * cell_size + half_range
            offset_z = this.position[i].z - (z + 0.5) * cell_size + half_range
            distance = Math.sqrt(
              offset_x * offset_x + offset_y * offset_y + offset_z * offset_z
            )
            k = (G * this.masses[i]) / (distance * distance * distance)

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
    return this.len
  }

  frog_drop(dt) {
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      this.speed[i].addScaledVector(this.acceleration[i], half_dt)
    }
    this.update()
  }

  update() {
    for (var i = 0, n = this.len; i < n; i++) {
      this.positions[i * 3] = this.position[i].x
      this.positions[i * 3 + 1] = this.position[i].y
      this.positions[i * 3 + 2] = this.position[i].z
    }
  }

  free() {
    delete this.positions
    delete this.masses
    delete this.temperatures
    delete this.position
    delete this.speed
    delete this.acceleration
  }
}
