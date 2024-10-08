#![allow(non_snake_case, non_upper_case_globals)]
/*
 Vastly inspired from cpp code by Rio Yokota   rioyokota@gmail.com
   June 2010

  Reference : GPU Gems Vol.4 "Treecode and fast multipole method for N-body simulation with CUDA"
*/
use crate::gravity::Gravity;
use crate::projector::Projector;
use crate::{Orb, Params};
use js_sys::Array;

use num_complex::Complex64 as Complex;
use std::f32;
use std::f64;
use std::usize;
use wasm_bindgen::prelude::*;

// Spherical harmonic rotation
fn rotation(Cnm: &Vec<Complex>, Dnm: &Vec<Vec<Complex>>) -> Vec<Complex> {
  let mut CnmOut = vec![Complex::new(0f64, 0f64); numCoefficients];

  for n in 0..(numExpansions as i32) {
    for m in 0..=n {
      let nms = n * (n + 1) / 2 + m;
      let mut CnmScalar = Complex::new(0f64, 0f64);
      for k in -n..=-1 {
        let nk = n * (n + 1) + k;
        let nks = n * (n + 1) / 2 - k;
        CnmScalar += Dnm[m as usize][nk as usize] * Cnm[nks as usize].conj();
      }
      for k in 0..=n {
        let nk = n * (n + 1) + k;
        let nks = n * (n + 1) / 2 + k;
        CnmScalar += Dnm[m as usize][nk as usize] * Cnm[nks as usize];
      }
      CnmOut[nms as usize] = CnmScalar;
    }
  }
  CnmOut
}

fn cart2sph(dx: f32, dy: f32, dz: f32, softening: f32) -> (f64, f64, f64) {
  let r = ((dx * dx + dy * dy + dz * dz).sqrt() + softening) as f64;
  let theta = (dz as f64 / r).acos();
  let phi;

  if ((dx.abs() + dy.abs()) as f64) < softening as f64 {
    phi = 0f64;
  } else if (dx.abs() as f64) < softening as f64 {
    phi = dy as f64 / (dy as f64).abs() * f64::consts::PI * 0.5;
  } else if dx > 0f32 {
    phi = (dy as f64 / dx as f64).atan();
  } else {
    phi = (dy as f64 / dx as f64).atan() + f64::consts::PI;
  }
  (r, theta, phi)
}

pub trait FMM {
  fn _len(&self) -> usize;
  fn _params(&self) -> &Params;
  fn _accelerations(&mut self) -> &mut Vec<f32>;
  fn _positions(&mut self) -> &mut Vec<f32>;
  fn _masses(&mut self) -> &mut Vec<f32>;
  fn _mortonIndex(&mut self) -> &mut Vec<usize>;
  fn _sortValue(&mut self) -> &mut Vec<usize>;
  fn _sortIndex(&mut self) -> &mut Vec<usize>;
  fn _sortValueBuffer(&mut self) -> &mut Vec<usize>;
  fn _sortIndexBuffer(&mut self) -> &mut Vec<usize>;
  fn _sortPositionBuffer(&mut self) -> &mut Vec<f32>;
  fn _sortMassBuffer(&mut self) -> &mut Vec<f32>;
  fn _factorial(&mut self) -> &mut Vec<f64>;
  fn _Anm(&mut self) -> &mut Vec<f64>;
  fn _anm(&mut self) -> &mut Vec<f64>;
  fn _Dnm(&mut self) -> &mut Vec<Vec<Vec<Complex>>>;
  fn _Ynm(&mut self) -> &mut Vec<Complex>;

  // Calculate range of FMM domain from particle positions
  fn setDomainSize(&mut self) -> (Vec3<f32>, f32) {
    // Initialize the minimum and maximum values
    let mut xmin = 1000000f32;
    let mut xmax = -1000000f32;
    let mut ymin = 1000000f32;
    let mut ymax = -1000000f32;
    let mut zmin = 1000000f32;
    let mut zmax = -1000000f32;
    // Calculate the minimum and maximum of particle positions
    for i in 0..self._len() {
      xmin = xmin.min(self._positions()[i * 3]);
      xmax = xmax.max(self._positions()[i * 3]);
      ymin = ymin.min(self._positions()[i * 3 + 1]);
      ymax = ymax.max(self._positions()[i * 3 + 1]);
      zmin = zmin.min(self._positions()[i * 3 + 2]);
      zmax = zmax.max(self._positions()[i * 3 + 2]);
    }

    let boxMin = Vec3::new(xmin, ymin, zmin);
    // Calculat the domain size
    let mut rootBoxSize = 0f32;
    rootBoxSize = rootBoxSize.max(xmax - xmin);
    rootBoxSize = rootBoxSize.max(ymax - ymin);
    rootBoxSize = rootBoxSize.max(zmax - zmin);
    rootBoxSize *= 1.00001; // Keep particle on the edge from falling out

    (boxMin, rootBoxSize)
  }

  // Calculate leaf level optimally from tabulated theshold values of self.len
  fn setOptimumLevel(&mut self) -> (usize, usize) {
    let level_switch = [
      2e4 as usize,
      1.7e5 as usize,
      1.3e6 as usize,
      1e7 as usize,
      7e7 as usize,
      5e8 as usize,
    ]; // cpu-tree
       //  let level_switch = [1.3e4,1e5,7e5,5e6,3e7,1.5e8]; // cpu-fmm
       //  let level_switch = [1e5,5e5,5e6,3e7,2e8,1.5e9]; // gpu-tree
       // let level_switch = [
       //   1e5 as usize,
       //   7e5 as usize,
       //   7e6 as usize,
       //   5e7 as usize,
       //   3e8 as usize,
       //   2e9 as usize,
       // ]; // gpu-fmm  // f32

    let mut maxLevel = 1;
    if self._len() < level_switch[0] {
      maxLevel += 1;
    } else if self._len() < level_switch[1] {
      maxLevel += 2;
    } else if self._len() < level_switch[2] {
      maxLevel += 3;
    } else if self._len() < level_switch[3] {
      maxLevel += 4;
    } else if self._len() < level_switch[4] {
      maxLevel += 5;
    } else if self._len() < level_switch[5] {
      maxLevel += 6;
    } else {
      maxLevel += 7;
    }
    let numBoxIndexFull = 1 << 3 * maxLevel;
    (maxLevel, numBoxIndexFull)
  }

  // Generate Morton index from particle coordinates
  fn morton(&mut self, maxLevel: usize, rootBoxSize: f32, boxMin: Vec3<f32>) {
    let boxSize = rootBoxSize / (1 << maxLevel) as f32;
    let mut boxIndex;

    for j in 0..self._len() {
      let mut nx = ((self._positions()[j * 3] - boxMin.x) / boxSize) as usize;
      let mut ny = ((self._positions()[j * 3 + 1] - boxMin.y) / boxSize) as usize;
      let mut nz = ((self._positions()[j * 3 + 2] - boxMin.z) / boxSize) as usize;
      if nx >= (1 << maxLevel) {
        nx -= 1;
      };
      if ny >= (1 << maxLevel) {
        ny -= 1;
      };
      if nz >= (1 << maxLevel) {
        nz -= 1;
      };
      boxIndex = 0;
      for i in 0..maxLevel {
        boxIndex += nx % 2 << (3 * i + 1);
        nx >>= 1;

        boxIndex += ny % 2 << (3 * i);
        ny >>= 1;

        boxIndex += nz % 2 << (3 * i + 2);
        nz >>= 1;
      }
      self._mortonIndex()[j] = boxIndex;
    }
  }

  // Generate Morton index for a box center to use in M2L translation
  fn morton1(&self, boxIndex3D: &mut Vec3<i32>, numLevel: usize) -> usize {
    let mut boxIndex = 0;
    for i in 0..numLevel {
      let nx = boxIndex3D.x % 2;
      boxIndex3D.x >>= 1;
      boxIndex += nx * (1 << (3 * i + 1));

      let ny = boxIndex3D.y % 2;
      boxIndex3D.y >>= 1;
      boxIndex += ny * (1 << (3 * i));

      let nz = boxIndex3D.z % 2;
      boxIndex3D.z >>= 1;
      boxIndex += nz * (1 << (3 * i + 2));
    }
    boxIndex as usize
  }

  // Returns 3D box index from Morton index
  fn unmorton(&self, boxIndex: usize) -> Vec3<i32> {
    let mut mortonIndex3D = [0, 0, 0];
    let mut boxIndex3D = Vec3::new(0, 0, 0);
    let mut n = boxIndex;
    let mut k = 0;
    let mut i = 0;
    while n != 0 {
      let j = 2 - k;
      mortonIndex3D[j] += (n % 2) * (1 << i);
      n >>= 1;
      k = (k + 1) % 3;
      if k == 0 {
        i += 1;
      }
    }
    boxIndex3D.x = mortonIndex3D[1] as i32;
    boxIndex3D.y = mortonIndex3D[2] as i32;
    boxIndex3D.z = mortonIndex3D[0] as i32;
    boxIndex3D
  }

  // Prepare for binning particles by first sorting the Morton index
  fn sort(&mut self, numBoxIndexFull: usize) {
    for i in 0..numBoxIndexFull {
      self._sortIndexBuffer()[i] = 0;
    }
    for i in 0..self._len() {
      let sortValue = self._sortValue()[i];
      self._sortIndexBuffer()[sortValue] += 1;
    }
    for i in 1..numBoxIndexFull {
      self._sortIndexBuffer()[i] += self._sortIndexBuffer()[i - 1];
    }
    for i in (0..self._len()).rev() {
      let sortValue = self._sortValue()[i];
      self._sortIndexBuffer()[sortValue] -= 1;
      let buffValue = self._sortIndexBuffer()[sortValue];
      self._sortValueBuffer()[buffValue] = self._sortValue()[i];
      self._sortIndex()[buffValue] = i;
    }
    for i in 0..self._len() {
      self._sortValue()[i] = self._sortValueBuffer()[i];
    }
  }

  // Sort the particles according to the previously sorted Morton index
  fn sortParticles(&mut self, numBoxIndexFull: usize) -> Vec<usize> {
    //TODO this is bad

    let mut permutation = vec![0; self._len()];

    for i in 0..self._len() {
      self._sortValue()[i] = self._mortonIndex()[i];
      self._sortIndex()[i] = i;
    }
    self.sort(numBoxIndexFull);
    for i in 0..self._len() {
      permutation[i] = self._sortIndex()[i];
    }

    for i in 0..self._len() {
      self._sortPositionBuffer()[i * 3] = self._positions()[permutation[i] * 3];
      self._sortPositionBuffer()[i * 3 + 1] = self._positions()[permutation[i] * 3 + 1];
      self._sortPositionBuffer()[i * 3 + 2] = self._positions()[permutation[i] * 3 + 2];
      self._sortMassBuffer()[i] = self._masses()[permutation[i]];
    }
    for i in 0..self._len() {
      self._positions()[i * 3] = self._sortPositionBuffer()[i * 3];
      self._positions()[i * 3 + 1] = self._sortPositionBuffer()[i * 3 + 1];
      self._positions()[i * 3 + 2] = self._sortPositionBuffer()[i * 3 + 2];
      self._masses()[i] = self._sortMassBuffer()[i];
    }

    permutation
  }

  // Unsorting particles upon exit (optional)
  fn unsortParticles(&mut self, permutation: Vec<usize>) {
    for i in 0..self._len() {
      self._sortPositionBuffer()[permutation[i] * 3] = self._accelerations()[i * 3];
      self._sortPositionBuffer()[permutation[i] * 3 + 1] = self._accelerations()[i * 3 + 1];
      self._sortPositionBuffer()[permutation[i] * 3 + 2] = self._accelerations()[i * 3 + 2];
    }
    for i in 0..self._len() {
      self._accelerations()[i * 3] = self._sortPositionBuffer()[i * 3];
      self._accelerations()[i * 3 + 1] = self._sortPositionBuffer()[i * 3 + 1];
      self._accelerations()[i * 3 + 2] = self._sortPositionBuffer()[i * 3 + 2];
    }
    for i in 0..self._len() {
      self._sortPositionBuffer()[permutation[i] * 3] = self._positions()[i * 3];
      self._sortPositionBuffer()[permutation[i] * 3 + 1] = self._positions()[i * 3 + 1];
      self._sortPositionBuffer()[permutation[i] * 3 + 2] = self._positions()[i * 3 + 2];
      self._sortMassBuffer()[permutation[i]] = self._masses()[i];
    }
    for i in 0..self._len() {
      self._positions()[i * 3] = self._sortPositionBuffer()[i * 3];
      self._positions()[i * 3 + 1] = self._sortPositionBuffer()[i * 3 + 1];
      self._positions()[i * 3 + 2] = self._sortPositionBuffer()[i * 3 + 2];
      self._masses()[i] = self._sortMassBuffer()[i];
    }
  }

  // Estimate storage requirements adaptively to skip empty boxes
  fn countNonEmptyBoxes(&mut self, maxLevel: usize, numBoxIndexFull: usize) -> (usize, usize) {
    for i in 0..self._len() {
      self._sortValue()[i] = self._mortonIndex()[i];
      self._sortIndex()[i] = i;
    }
    self.sort(numBoxIndexFull);

    // Count non-empty boxes at leaf level
    let mut numBoxIndexLeaf = 0; // counter
    let mut currentIndex = usize::MAX;
    for i in 0..self._len() {
      if self._sortValue()[i] != currentIndex {
        numBoxIndexLeaf += 1;
        currentIndex = self._sortValue()[i];
      }
    }

    // Count non-empty boxes for all levels
    let mut numBoxIndexTotal = numBoxIndexLeaf;
    for numLevel in (2..maxLevel).rev() {
      currentIndex = usize::MAX;
      for i in 0..self._len() {
        if self._sortValue()[i] / (1 << 3 * (maxLevel - numLevel)) != currentIndex {
          numBoxIndexTotal += 1;
          currentIndex = self._sortValue()[i] / (1 << 3 * (maxLevel - numLevel));
        }
      }
    }
    (numBoxIndexLeaf, numBoxIndexTotal)
  }

  // Obtain two-way link list between non-empty and full box indices, and offset of particle index
  fn getBoxData(
    &mut self,
    numBoxIndexFull: usize,
    boxIndexMask: &mut Vec<usize>,
    boxIndexFull: &mut Vec<usize>,
    particleOffset: &mut [Vec<usize>; 2],
  ) -> usize {
    let mut numBoxIndex = 0;
    let mut currentIndex = usize::MAX;
    for i in 0..numBoxIndexFull {
      boxIndexMask[i] = usize::MAX;
    }
    for i in 0..self._len() {
      if self._mortonIndex()[i] != currentIndex {
        boxIndexMask[self._mortonIndex()[i]] = numBoxIndex;
        boxIndexFull[numBoxIndex] = self._mortonIndex()[i];
        particleOffset[0][numBoxIndex] = i;
        if numBoxIndex > 0 {
          particleOffset[1][numBoxIndex - 1] = i - 1;
        }
        currentIndex = self._mortonIndex()[i];
        numBoxIndex += 1;
      }
    }
    particleOffset[1][numBoxIndex - 1] = self._len() - 1;
    numBoxIndex
  }

  // Propagate non-empty/full link list to parent boxes
  fn getBoxDataOfParent(
    &self,
    numBoxIndex: usize,
    numBoxIndexFull: usize,
    numLevel: usize,
    levelOffset: &mut Vec<usize>,
    boxIndexMask: &mut Vec<usize>,
    boxIndexFull: &mut Vec<usize>,
    particleOffset: &mut [Vec<usize>; 2],
    tree: bool,
  ) -> usize {
    // let i,numBoxIndexOld,currentIndex,boxIndex; // i32
    levelOffset[numLevel - 1] = levelOffset[numLevel] + numBoxIndex;
    let numBoxIndexOld = numBoxIndex;
    let mut newNumBoxIndex = 0;
    let mut currentIndex = usize::MAX;
    for i in 0..numBoxIndexFull {
      boxIndexMask[i] = usize::MAX;
    }
    for i in 0..numBoxIndexOld {
      let boxIndex = i + levelOffset[numLevel];
      if currentIndex != boxIndexFull[boxIndex] / 8 {
        currentIndex = boxIndexFull[boxIndex] / 8;
        boxIndexMask[currentIndex] = newNumBoxIndex;
        boxIndexFull[newNumBoxIndex + levelOffset[numLevel - 1]] = currentIndex;
        if tree {
          particleOffset[0][newNumBoxIndex] = particleOffset[0][i];
          if newNumBoxIndex > 0 {
            particleOffset[1][newNumBoxIndex - 1] = particleOffset[0][i] - 1;
          }
        }
        newNumBoxIndex += 1;
      }
    }
    if tree {
      particleOffset[1][numBoxIndex - 1] = particleOffset[1][numBoxIndexOld - 1];
    }
    newNumBoxIndex
  }

  // Recalculate non-empty box index for current level
  fn getBoxIndexMask(
    &self,
    numBoxIndex: usize,
    numBoxIndexFull: usize,
    numLevel: usize,
    levelOffset: &Vec<usize>,
    boxIndexMask: &mut Vec<usize>,
    boxIndexFull: &Vec<usize>,
  ) {
    for i in 0..numBoxIndexFull {
      boxIndexMask[i] = usize::MAX;
    }
    for i in 0..numBoxIndex {
      let boxIndex = i + levelOffset[numLevel - 1];
      boxIndexMask[boxIndexFull[boxIndex]] = i;
    }
  }

  // Calculate the interaction list for P2P and M2L
  fn getInteractionList(
    &self,
    numBoxIndex: usize,
    numBoxIndexLeaf: usize,
    numLevel: usize,
    interactionType: usize,
    levelOffset: &Vec<usize>,
    boxIndexMask: &Vec<usize>,
    boxIndexFull: &Vec<usize>,
  ) -> (Vec<usize>, Vec<Vec<usize>>) {
    let mut numInteraction = vec![0; numBoxIndexLeaf];
    let mut interactionList = (0..numBoxIndexLeaf)
      .map(|_| vec![0; maxM2LInteraction])
      .collect::<Vec<_>>();
    // Initialize the minimum and maximum values
    let mut jxmin = 1000000;
    let mut jxmax = 0;
    let mut jymin = 1000000;
    let mut jymax = 0;
    let mut jzmin = 1000000;
    let mut jzmax = 0;
    // Calculate the minimum and maximum of boxIndex3D
    for jj in 0..numBoxIndex {
      let jb = jj + levelOffset[numLevel - 1];
      let boxIndex3D = self.unmorton(boxIndexFull[jb]);
      jxmin = jxmin.min(boxIndex3D.x);
      jxmax = jxmax.max(boxIndex3D.x);
      jymin = jymin.min(boxIndex3D.y);
      jymax = jymax.max(boxIndex3D.y);
      jzmin = jzmin.min(boxIndex3D.z);
      jzmax = jzmax.max(boxIndex3D.z);
    }
    // P2P
    if interactionType == 0 {
      for ii in 0..numBoxIndex {
        let ib = ii + levelOffset[numLevel - 1];
        numInteraction[ii] = 0;
        let mut boxIndex3D = self.unmorton(boxIndexFull[ib]);
        let ix = boxIndex3D.x;
        let iy = boxIndex3D.y;
        let iz = boxIndex3D.z;
        for jx in jxmin.max(ix - 1)..(jxmax.min(ix + 1) + 1) {
          for jy in jymin.max(iy - 1)..(jymax.min(iy + 1) + 1) {
            for jz in jzmin.max(iz - 1)..(jzmax.min(iz + 1) + 1) {
              boxIndex3D.x = jx;
              boxIndex3D.y = jy;
              boxIndex3D.z = jz;
              let boxIndex = self.morton1(&mut boxIndex3D, numLevel);
              let jj = boxIndexMask[boxIndex];
              if jj != usize::MAX {
                interactionList[ii][numInteraction[ii]] = jj;
                numInteraction[ii] += 1;
              }
            }
          }
        }
      }
    // M2L at level 2
    } else if interactionType == 1 {
      for ii in 0..numBoxIndex {
        let ib = ii + levelOffset[numLevel - 1];
        numInteraction[ii] = 0;
        let mut boxIndex3D = self.unmorton(boxIndexFull[ib]);
        let ix = boxIndex3D.x as i32;
        let iy = boxIndex3D.y as i32;
        let iz = boxIndex3D.z as i32;
        for jj in 0..numBoxIndex {
          let jb = jj + levelOffset[numLevel - 1];
          boxIndex3D = self.unmorton(boxIndexFull[jb]);
          let jx = boxIndex3D.x as i32;
          let jy = boxIndex3D.y as i32;
          let jz = boxIndex3D.z as i32;
          if jx < ix - 1 || ix + 1 < jx || jy < iy - 1 || iy + 1 < jy || jz < iz - 1 || iz + 1 < jz
          {
            interactionList[ii][numInteraction[ii]] = jj;
            numInteraction[ii] += 1;
          } else {
          }
        }
      }
      // M2L at lower levels
    } else if interactionType == 2 {
      for ii in 0..numBoxIndex {
        let ib = ii + levelOffset[numLevel - 1];
        numInteraction[ii] = 0;
        let mut boxIndex3D = self.unmorton(boxIndexFull[ib]);
        let ix = boxIndex3D.x as i32;
        let iy = boxIndex3D.y as i32;
        let iz = boxIndex3D.z as i32;
        let ixp = (ix + 2) / 2;
        let iyp = (iy + 2) / 2;
        let izp = (iz + 2) / 2;
        for jxp in (ixp - 1)..(ixp + 2) {
          for jyp in (iyp - 1)..(iyp + 2) {
            for jzp in (izp - 1)..(izp + 2) {
              // TODO: Check usize overflow
              for jx in (jxmin.max(2 * jxp - 2))..(jxmax.min(2 * jxp - 1) + 1) {
                for jy in (jymin.max(2 * jyp - 2))..(jymax.min(2 * jyp - 1) + 1) {
                  for jz in (jzmin.max(2 * jzp - 2))..(jzmax.min(2 * jzp - 1) + 1) {
                    if jx < ix - 1
                      || ix + 1 < jx
                      || jy < iy - 1
                      || iy + 1 < jy
                      || jz < iz - 1
                      || iz + 1 < jz
                    {
                      boxIndex3D.x = jx;
                      boxIndex3D.y = jy;
                      boxIndex3D.z = jz;
                      let boxIndex = self.morton1(&mut boxIndex3D, numLevel);
                      let jj = boxIndexMask[boxIndex];
                      if jj != usize::MAX {
                        interactionList[ii][numInteraction[ii]] = jj;
                        numInteraction[ii] += 1;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    (numInteraction, interactionList)
  }

  // direct summation kernel
  fn direct(&mut self, g: f32, softening: f32) {
    let mut dist = Vec3::new(0f32, 0f32, 0f32);
    for i in 0..self._len() {
      let mut ai = Vec3::new(0f32, 0f32, 0f32);
      for j in 0..self._len() {
        if i == j {
          continue;
        }
        dist.x = self._positions()[i * 3] - self._positions()[j * 3];
        dist.y = self._positions()[i * 3 + 1] - self._positions()[j * 3 + 1];
        dist.z = self._positions()[i * 3 + 2] - self._positions()[j * 3 + 2];
        let invDist =
          1f32 / (dist.x * dist.x + dist.y * dist.y + dist.z * dist.z + softening).sqrt();
        let invDistCube = self._masses()[j] * invDist * invDist * invDist;
        ai.x -= dist.x * invDistCube;
        ai.y -= dist.y * invDistCube;
        ai.z -= dist.z * invDistCube;
      }
      self._accelerations()[i * 3] = g * ai.x;
      self._accelerations()[i * 3 + 1] = g * ai.y;
      self._accelerations()[i * 3 + 2] = g * ai.z;
    }
  }

  // precalculate M2L translation matrix and Wigner rotation matrix
  fn precalc(&mut self, softening: f32) {
    for n in 0..(2 * numExpansions as i32) {
      for m in -n..=n {
        let nm = (n * n + n + m) as usize;
        let nabsm = m.abs();
        let mut fnmm = 1f64;
        for i in 1..=(n - m) {
          fnmm *= i as f64;
        }
        let mut fnpm = 1f64;
        for i in 1..=(n + m) {
          fnpm *= i as f64;
        }
        let mut fnma = 1f64;
        for i in 1..=(n - nabsm) {
          fnma *= i as f64;
        }
        let mut fnpa = 1f64;
        for i in 1..=(n + nabsm) {
          fnpa *= i as f64;
        }
        self._factorial()[nm] = (fnma / fnpa).sqrt();
        let fad = (fnmm * fnpm).sqrt();
        self._anm()[nm] = -1f64.powi(n) / fad;
      }
    }

    for j in 0..(numExpansions as i32) {
      for k in -j..=j {
        let jk = j * j + j + k;
        for n in k.abs()..(numExpansions as i32) {
          let nk = n * n + n + k;
          let jkn = jk * (numExpansion2 as i32) + nk;
          let jnk = (j + n) * (j + n) + j + n;
          self._Anm()[jkn as usize] =
            -1f64.powi(j + k) * self._anm()[nk as usize] * self._anm()[jk as usize]
              / self._anm()[jnk as usize];
        }
      }
    }

    let mut pn = 1f64;
    let mut p;
    let mut p1;
    let mut p2;
    for m in 0..(2 * numExpansions) {
      p = pn;
      let npn = m * m + 2 * m;
      let nmn = m * m;
      self._Ynm()[npn] = Complex::new(self._factorial()[npn] * p, 0f64);
      self._Ynm()[nmn] = self._Ynm()[npn].conj();
      p1 = p;
      p = (2 * m + 1) as f64 * p;
      for n in (m + 1)..(2 * numExpansions) {
        let npm = n * n + n + m;
        let nmm = n * n + n - m;
        self._Ynm()[npn] = Complex::new(self._factorial()[npm] * p, 0f64);
        self._Ynm()[nmm] = self._Ynm()[npm].conj();
        p2 = p1;
        p1 = p;
        p = ((2 * n + 1) as f64 * p1 - (n + m) as f64 * p2) / (n - m + 1) as f64;
      }
      pn = 0f64;
    }

    let mut anmk = [vec![0f64; numExpansion4], vec![0f64; numExpansion4]];
    for n in 0..numExpansions {
      for m in 1..=n {
        let anmd = (n * (n + 1) - m * (m - 1)) as f64;
        for k in (1 - m)..m {
          let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
          let anmkd = ((n * (n + 1) - k * (k + 1)) / (n * (n + 1) - m * (m - 1))) as f64;
          anmk[0][nmk] = -((m + k) as f64) / anmd.sqrt();
          anmk[1][nmk] = anmkd.sqrt();
        }
      }
    }
    let I = Complex::new(0f64, 1f64);
    let mut expBeta = vec![Complex::new(0f64, 0f64); numExpansion2];
    let mut Dnmd = vec![0f64; numExpansion4];

    for i in 0..numRelativeBox {
      let boxIndex3D = self.unmorton(i);
      let dist = Vec3::new(
        (boxIndex3D.x - 3) as f32,
        (boxIndex3D.y - 3) as f32,
        (boxIndex3D.z - 3) as f32,
      );
      let (_, mut alpha, mut beta) = cart2sph(dist.x, dist.y, dist.z, softening);

      let mut sc = alpha.sin() / (1f64 + alpha.cos());
      for n in 0..(4 * numExpansions - 3) {
        expBeta[n] = ((n - 2 * numExpansions + 2) as f64 * beta * I).exp();
      }

      for n in 0..numExpansions {
        let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + n;
        Dnmd[nmk] = (alpha * 0.5f64).cos().powi((2 * n) as i32);
        for k in ((1 - n)..(n + 1)).rev() {
          let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k;
          let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k - 1;
          let ank = (n + k) / (n - k + 1);
          Dnmd[nmk1] = (ank as f64).sqrt() * (alpha * 0.5f64).tan() * Dnmd[nmk];
        }
        for m in (1..=n).rev() {
          for k in ((1 - m)..m).rev() {
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k + 1;
            let nm1k = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + (m - 1) * (2 * n + 1) + k;
            Dnmd[nm1k] = anmk[1][nmk] * Dnmd[nmk1] + anmk[0][nmk] * sc * Dnmd[nmk];
          }
        }
      }
      for n in 1..(numExpansions as i32) {
        for m in 0..=n {
          for k in -m..0 {
            let ek = -1f64.powi(k);
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m;
            Dnmd[nmk as usize] = ek * Dnmd[nmk as usize];
            Dnmd[nmk1 as usize] = -1f64.powi(m + k) * Dnmd[nmk as usize];
          }
          for k in 0..=m {
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + k * (2 * n + 1) + m;
            let nmk2 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m;
            Dnmd[nmk1 as usize] = -1f64.powi(m + k) * Dnmd[nmk as usize];
            Dnmd[nmk2 as usize] = Dnmd[nmk1 as usize];
          }
        }
      }

      for n in 0..(numExpansions as i32) {
        for m in 0..=n {
          for k in -n..=n {
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nk = n * (n + 1) + k;
            self._Dnm()[i][m as usize][nk as usize] =
              Dnmd[nmk as usize] * expBeta[(k + m + 2 * (numExpansions as i32) - 2) as usize];
          }
        }
      }

      alpha = -alpha;
      beta = -beta;

      sc = alpha.sin() / (1f64 + alpha.cos());
      for n in 0..(4 * numExpansions - 3) {
        expBeta[n] = ((n - 2 * numExpansions + 2) as f64 * beta * I).exp();
      }

      for n in 0..numExpansions {
        let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + n;
        Dnmd[nmk] = (alpha * 0.5).cos().powi((2 * n) as i32);
        for k in ((1 - n)..=n).rev() {
          let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k;
          let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k - 1;
          let ank = (n + k) / (n - k + 1);
          Dnmd[nmk1] = (ank as f64).sqrt() * (alpha * 0.5).tan() * Dnmd[nmk];
        }
        for m in (1..=n).rev() {
          for k in ((1 - m)..m).rev() {
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k + 1;
            let nm1k = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + (m - 1) * (2 * n + 1) + k;
            Dnmd[nm1k] = anmk[1][nmk] * Dnmd[nmk1] + anmk[0][nmk] * sc * Dnmd[nmk];
          }
        }
      }

      for n in 1..(numExpansions as i32) {
        for m in 0..=n {
          for k in -m..0 {
            let ek = -1f64.powi(k);
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m;
            Dnmd[nmk as usize] = ek * Dnmd[nmk as usize];
            Dnmd[nmk1 as usize] = -1f64.powi(m + k) * Dnmd[nmk as usize];
          }
          for k in 0..=m {
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + k * (2 * n + 1) + m;
            let nmk2 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m;
            Dnmd[nmk1 as usize] = -1f64.powi(m + k) * Dnmd[nmk as usize];
            Dnmd[nmk2 as usize] = Dnmd[nmk1 as usize];
          }
        }
      }

      for n in 0..(numExpansions as i32) {
        for m in 0..=n {
          for k in -n..=n {
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nk = n * (n + 1) + k;
            self._Dnm()[i + numRelativeBox][m as usize][nk as usize] =
              Dnmd[nmk as usize] * expBeta[(k + m + 2 * (numExpansions as i32) - 2) as usize];
          }
        }
      }
    }
  }

  // // p2p
  fn p2p(
    &mut self,
    g: f32,
    softening: f32,
    numBoxIndex: usize,
    numInteraction: &Vec<usize>,
    interactionList: &Vec<Vec<usize>>,
    particleOffset: &[Vec<usize>; 2],
  ) {
    let softening2 = softening * softening;
    let mut dist = Vec3::new(0f32, 0f32, 0f32);
    for ii in 0..numBoxIndex {
      for ij in 0..numInteraction[ii] {
        let jj = interactionList[ii][ij];
        for i in particleOffset[0][ii]..=particleOffset[1][ii] {
          let mut ai = Vec3::new(0f32, 0f32, 0f32);
          for j in particleOffset[0][jj]..=particleOffset[1][jj] {
            if i == j {
              continue;
            }
            dist.x = self._positions()[i * 3] - self._positions()[j * 3];
            dist.y = self._positions()[i * 3 + 1] - self._positions()[j * 3 + 1];
            dist.z = self._positions()[i * 3 + 2] - self._positions()[j * 3 + 2];
            let invDist =
              1f32 / (dist.x * dist.x + dist.y * dist.y + dist.z * dist.z + softening2).sqrt();
            let invDistCube = self._masses()[j] * invDist * invDist * invDist;
            ai.x -= dist.x * invDistCube;
            ai.y -= dist.y * invDistCube;
            ai.z -= dist.z * invDistCube;
          }
          self._accelerations()[i * 3] += g * ai.x;
          self._accelerations()[i * 3 + 1] += g * ai.y;
          self._accelerations()[i * 3 + 2] += g * ai.z;
        }
      }
    }
  }

  // p2m
  fn p2m(
    &mut self,
    softening: f32,
    numBoxIndex: usize,
    rootBoxSize: f32,
    boxMin: &Vec3<f32>,
    maxLevel: usize,
    boxIndexFull: &Vec<usize>,
    particleOffset: &[Vec<usize>; 2],
    Mnm: &mut Vec<Vec<Complex>>,
  ) {
    let I = Complex::new(0f64, 1f64);
    let mut YnmReal = vec![0f64; numExpansion2];
    let boxSize = rootBoxSize / (1 << maxLevel) as f32;
    let mut dist = Vec3::new(0f32, 0f32, 0f32);
    let mut boxCenter = Vec3::new(0f32, 0f32, 0f32);
    for jj in 0..numBoxIndex {
      let boxIndex3D = self.unmorton(boxIndexFull[jj]);
      boxCenter.x = boxMin.x + (boxIndex3D.x as f32 + 0.5) * boxSize;
      boxCenter.y = boxMin.y + (boxIndex3D.y as f32 + 0.5) * boxSize;
      boxCenter.z = boxMin.z + (boxIndex3D.z as f32 + 0.5) * boxSize;
      let mut MnmVector = vec![Complex::new(0f64, 0f64); numCoefficients];
      for j in 0..numCoefficients {
        MnmVector[j] = Complex::new(0f64, 0f64);
      }
      for j in particleOffset[0][jj]..particleOffset[1][jj] {
        dist.x = self._positions()[j * 3] - boxCenter.x;
        dist.y = self._positions()[j * 3 + 1] - boxCenter.y;
        dist.z = self._positions()[j * 3 + 2] - boxCenter.z;
        let (rho, alpha, beta) = cart2sph(dist.x, dist.y, dist.z, softening);
        let xx = alpha.cos();
        let s2 = ((1f64 - xx) * (1f64 + xx)).sqrt();
        let mut fact = 1f64;
        let mut pn = 1f64;
        let mut rhom = 1f64;
        for m in 0..numExpansions {
          let mut p = pn;
          let mut nm = m * m + 2 * m;
          YnmReal[nm] = rhom * self._factorial()[nm] * p;
          let mut p1 = p;
          p = xx * (2 * m + 1) as f64 * p;
          rhom *= rho;
          let mut rhon = rhom;
          for n in (m + 1)..numExpansions {
            nm = n * n + n + m;
            YnmReal[nm] = rhon * self._factorial()[nm] * p;
            let p2 = p1;
            p1 = p;
            p = (xx * (2 * n + 1) as f64 * p1 - (n + m) as f64 * p2) / (n - m + 1) as f64;
            rhon *= rho;
          }
          pn = -pn * fact * s2;
          fact += 2f64;
        }
        for n in 0..numExpansions {
          for m in 0..=n {
            let nm = n * n + n + m;
            let nms = n * (n + 1) / 2 + m;
            let eim = (-(m as f64) * beta * I).exp();
            MnmVector[nms] += Complex::new(self._masses()[j] as f64, 0f64) * YnmReal[nm] * eim;
          }
        }
      }
      for j in 0..numCoefficients {
        Mnm[jj][j] = MnmVector[j];
      }
    }
  }

  // m2m
  fn m2m(
    &mut self,
    numBoxIndex: usize,
    numBoxIndexOld: usize,
    numLevel: usize,
    rootBoxSize: f32,
    levelOffset: &mut Vec<usize>,
    boxIndexMask: &mut Vec<usize>,
    boxIndexFull: &mut Vec<usize>,
    Mnm: &mut Vec<Vec<Complex>>,
  ) {
    let mut MnmVectorA = vec![Complex::new(0f64, 0f64); numCoefficients];

    let boxSize = rootBoxSize / (1 << numLevel) as f32;
    for ii in 0..numBoxIndex {
      let ib = ii + levelOffset[numLevel - 1];
      for j in 0..numCoefficients {
        Mnm[ib][j] = Complex::new(0f64, 0f64);
      }
    }
    for jj in 0..numBoxIndexOld {
      let jb = jj + levelOffset[numLevel];
      let nfjp = boxIndexFull[jb] / 8;
      let nfjc = boxIndexFull[jb] % 8;
      let ib = boxIndexMask[nfjp] + levelOffset[numLevel - 1];
      let mut boxIndex3D = self.unmorton(nfjc);
      boxIndex3D.x = 4 - boxIndex3D.x * 2;
      boxIndex3D.y = 4 - boxIndex3D.y * 2;
      boxIndex3D.z = 4 - boxIndex3D.z * 2;
      let je = self.morton1(&mut boxIndex3D, 3);
      let rho = boxSize as f64 * (3f64).sqrt() / 4f64;
      for j in 0..numCoefficients {
        MnmVectorA[j] = Mnm[jb][j];
      }
      let MnmVectorB = rotation(&MnmVectorA, &self._Dnm()[je]);
      for j in 0..numExpansions {
        for k in 0..=j {
          let jk = j * j + j + k;
          let jks = j * (j + 1) / 2 + k;
          let mut MnmScalar = Complex::new(0f64, 0f64);
          for n in 0..=j - k {
            let jnk = (j - n) * (j - n) + j - n + k;
            let jnks = (j - n) * (j - n + 1) / 2 + k;
            let nm = n * n + n;
            let cnm = -1f64.powi(n as i32) * self._anm()[nm] * self._anm()[jnk] / self._anm()[jk]
              * rho.powi(n as i32)
              * self._Ynm()[nm];
            MnmScalar += MnmVectorB[jnks] * cnm;
          }
          MnmVectorA[jks] = MnmScalar;
        }
      }
      let MnmVectorB = rotation(&MnmVectorA, &self._Dnm()[je + numRelativeBox]);
      for j in 0..numCoefficients {
        Mnm[ib][j] += MnmVectorB[j];
      }
    }
  }

  // m2l
  fn m2l(
    &mut self,
    softening: f32,
    numBoxIndex: usize,
    numLevel: usize,
    rootBoxSize: f32,
    numInteraction: &Vec<usize>,
    interactionList: &Vec<Vec<usize>>,
    levelOffset: &Vec<usize>,
    boxIndexFull: &Vec<usize>,
    Lnm: &mut Vec<Vec<Complex>>,
    Mnm: &mut Vec<Vec<Complex>>,
  ) {
    let mut LnmVectorA = vec![Complex::new(0f64, 0f64); numCoefficients];
    let mut MnmVectorB = vec![Complex::new(0f64, 0f64); numCoefficients];

    let boxSize = rootBoxSize / (1 << numLevel) as f32;
    let mut dist = Vec3::new(0f32, 0f32, 0f32);
    if numLevel == 2 {
      for i in 0..numBoxIndex {
        for j in 0..numCoefficients {
          Lnm[i][j] = Complex::new(0f64, 0f64);
        }
      }
    }
    for ii in 0..numBoxIndex {
      let ib = ii + levelOffset[numLevel - 1];
      let boxIndex3D = self.unmorton(boxIndexFull[ib]);
      let ix = boxIndex3D.x;
      let iy = boxIndex3D.y;
      let iz = boxIndex3D.z;
      for ij in 0..numInteraction[ii] {
        let jj = interactionList[ii][ij];
        let jb = jj + levelOffset[numLevel - 1];
        for j in 0..numCoefficients {
          MnmVectorB[j] = Mnm[jb][j];
        }
        let mut boxIndex3D = self.unmorton(boxIndexFull[jb]);
        let jx = boxIndex3D.x;
        let jy = boxIndex3D.y;
        let jz = boxIndex3D.z;
        dist.x = (ix - jx) as f32 * boxSize;
        dist.y = (iy - jy) as f32 * boxSize;
        dist.z = (iz - jz) as f32 * boxSize;
        boxIndex3D.x = (ix - jx) + 3;
        boxIndex3D.y = (iy - jy) + 3;
        boxIndex3D.z = (iz - jz) + 3;
        let je = self.morton1(&mut boxIndex3D, 3);
        let rho = ((dist.x * dist.x + dist.y * dist.y + dist.z * dist.z).sqrt() + softening) as f64;
        let MnmVectorA = rotation(&MnmVectorB, &self._Dnm()[je]);
        let mut rhoj = 1f64;
        for j in 0..numExpansions {
          let mut rhojk = rhoj;
          rhoj *= rho;
          for k in 0..=j {
            let jk = j * j + j + k;
            let jks = j * (j + 1) / 2 + k;
            let mut LnmScalar = Complex::new(0f64, 0f64);
            let mut rhojn = rhojk;
            rhojk *= rho;
            for n in k..numExpansions {
              // abs ?
              rhojn *= rho;
              let nk = n * n + n + k;
              let nks = n * (n + 1) / 2 + k;
              let jkn = jk * numExpansion2 + nk;
              let jnk = (j + n) * (j + n) + j + n;
              let cnm = self._Anm()[jkn] / rhojn * self._Ynm()[jnk];
              LnmScalar += MnmVectorA[nks] * cnm;
            }
            LnmVectorA[jks] = LnmScalar;
          }
        }
        let LnmVectorB = rotation(&LnmVectorA, &self._Dnm()[je + numRelativeBox]);
        for j in 0..numCoefficients {
          Lnm[ii][j] += LnmVectorB[j];
        }
      }
    }
    for jj in 0..numBoxIndex {
      let jb = jj + levelOffset[numLevel - 1];
      for j in 0..numCoefficients {
        Mnm[jb][j] = Complex::new(0f64, 0f64);
      }
    }
  }

  // l2l
  fn l2l(
    &mut self,
    numBoxIndex: usize,
    numBoxIndexFull: usize,
    numLevel: usize,
    rootBoxSize: f32,
    levelOffset: &Vec<usize>,
    boxIndexFull: &Vec<usize>,
    LnmOld: &mut Vec<Vec<Complex>>,
    Lnm: &mut Vec<Vec<Complex>>,
  ) {
    let mut LnmVectorA = vec![Complex::new(0f64, 0f64); numCoefficients];

    let boxSize = rootBoxSize / (1 << numLevel) as f32;
    let mut numBoxIndexOld = numBoxIndex;
    if numBoxIndexOld < 8 {
      numBoxIndexOld = 8;
    }
    for ii in 0..numBoxIndexOld {
      for i in 0..numCoefficients {
        LnmOld[ii][i] = Lnm[ii][i];
      }
    }

    // let nbc,neo[numBoxIndexFull]; // i32
    let mut neo = vec![usize::MAX; numBoxIndexFull];
    let mut nbc = usize::MAX;
    numBoxIndexOld = 0;
    for ii in 0..numBoxIndex {
      let ib = ii + levelOffset[numLevel - 1];
      if nbc != boxIndexFull[ib] / 8 {
        nbc = boxIndexFull[ib] / 8;
        neo[nbc] = numBoxIndexOld;
        numBoxIndexOld += 1;
      }
    }

    for ii in 0..numBoxIndex {
      let mut ib = ii + levelOffset[numLevel - 1];
      let nfip = boxIndexFull[ib] / 8;
      let nfic = boxIndexFull[ib] % 8;
      let mut boxIndex3D = self.unmorton(nfic);
      boxIndex3D.x = boxIndex3D.x * 2 + 2;
      boxIndex3D.y = boxIndex3D.y * 2 + 2;
      boxIndex3D.z = boxIndex3D.z * 2 + 2;
      let je = self.morton1(&mut boxIndex3D, 3);
      let rho = boxSize as f64 * (3f64).sqrt() / 2f64;
      ib = neo[nfip];
      for i in 0..numCoefficients {
        LnmVectorA[i] = LnmOld[ib][i];
      }
      let LnmVectorB = rotation(&LnmVectorA, &self._Dnm()[je]);
      for j in 0..numExpansions {
        for k in 0..=j {
          let jk = j * j + j + k;
          let jks = j * (j + 1) / 2 + k;
          let mut LnmScalar = Complex::new(0f64, 0f64);
          for n in j..numExpansions {
            let jnk = (n - j) * (n - j) + n - j;
            let nk = n * n + n + k;
            let nks = n * (n + 1) / 2 + k;
            let cnm = self._anm()[jnk] * self._anm()[jk] / self._anm()[nk]
              * rho.powi(n as i32 - j as i32)
              * self._Ynm()[jnk];
            LnmScalar += LnmVectorB[nks] * cnm;
          }
          LnmVectorA[jks] = LnmScalar;
        }
      }
      let LnmVectorB = rotation(&LnmVectorA, &self._Dnm()[je + numRelativeBox]);
      for i in 0..numCoefficients {
        Lnm[ii][i] = LnmVectorB[i];
      }
    }
  }

  // l2p
  fn l2p(
    &mut self,
    g: f32,
    softening: f32,
    numBoxIndex: usize,
    numLevel: usize,
    rootBoxSize: f32,
    boxMin: &Vec3<f32>,
    boxIndexFull: &Vec<usize>,
    particleOffset: &[Vec<usize>; 2],
    Lnm: &Vec<Vec<Complex>>,
  ) {
    let I = Complex::new(0f64, 1f64);
    let mut LnmVector = vec![Complex::new(0f64, 0f64); numCoefficients];
    let mut YnmReal = vec![0f64; numExpansion2];
    let mut YnmRealTheta = vec![0f64; numExpansion2];
    let mut dist = Vec3::new(0f32, 0f32, 0f32);
    let mut accel = Vec3::new(0f64, 0f64, 0f64);
    let mut boxCenter = Vec3::new(0f32, 0f32, 0f32);

    let boxSize = rootBoxSize / (1 << numLevel) as f32;
    for ii in 0..numBoxIndex {
      let boxIndex3D = self.unmorton(boxIndexFull[ii]);
      boxCenter.x = boxMin.x + (boxIndex3D.x as f32 + 0.5) * boxSize;
      boxCenter.y = boxMin.y + (boxIndex3D.y as f32 + 0.5) * boxSize;
      boxCenter.z = boxMin.z + (boxIndex3D.z as f32 + 0.5) * boxSize;
      for i in 0..numCoefficients {
        LnmVector[i] = Lnm[ii][i];
      }
      for i in particleOffset[0][ii]..=particleOffset[1][ii] {
        dist.x = self._positions()[i * 3] - boxCenter.x;
        dist.y = self._positions()[i * 3 + 1] - boxCenter.y;
        dist.z = self._positions()[i * 3 + 2] - boxCenter.z;
        let (r, theta, phi) = cart2sph(dist.x, dist.y, dist.z, softening);
        let xx = theta.cos();
        let yy = theta.sin();
        let s2 = ((1f64 - xx) * (1f64 + xx)).sqrt();
        let mut fact = 1f64;
        let mut pn = 1f64;
        for m in 0..numExpansions {
          let mut p = pn;
          let nm = m * m + 2 * m;
          YnmReal[nm] = self._factorial()[nm] * p;
          let mut p1 = p;
          p = xx * (2 * m + 1) as f64 * p;
          YnmRealTheta[nm] = self._factorial()[nm] * (p - (m + 1) as f64 * xx * p1) / yy;
          for n in (m + 1)..numExpansions {
            let nm = n * n + n + m;
            YnmReal[nm] = self._factorial()[nm] * p;
            let p2 = p1;
            p1 = p;
            p = (xx * (2 * n + 1) as f64 * p1 - (n + m) as f64 * p2) / (n - m + 1) as f64;
            YnmRealTheta[nm] =
              self._factorial()[nm] * ((n - m + 1) as f64 * p - (n + 1) as f64 * xx * p1) / yy;
          }
          pn = -pn * fact * s2;
          fact += 2f64;
        }
        let mut accelR = 0f64;
        let mut accelTheta = 0f64;
        let mut accelPhi = 0f64;
        let mut rn = 1f64;
        for n in 0..numExpansions {
          let nm = n * n + n;
          let nms = n * (n + 1) / 2;
          let rr = n as f64 * rn / r * YnmReal[nm];
          let rtheta = rn * YnmRealTheta[nm];
          accelR += (rr * LnmVector[nms]).re;
          accelTheta += (rtheta * LnmVector[nms]).re;
          for m in 1..=n {
            let nm = n * n + n + m;
            let nms = n * (n + 1) / 2 + m;
            let eim = (m as f64 * phi * I).exp();
            let rr = n as f64 * rn / r * YnmReal[nm] * eim;
            let rtheta = rn * YnmRealTheta[nm] * eim;
            let rphi = m as f64 * rn * YnmReal[nm] * eim * I;
            accelR += 2f64 * (rr * LnmVector[nms]).re;
            accelTheta += 2f64 * (rtheta * LnmVector[nms]).re;
            accelPhi += 2f64 * (rphi * LnmVector[nms]).re;
          }
          rn *= r;
        }
        accel.x = theta.sin() * phi.cos() * accelR + theta.cos() * phi.cos() / r * accelTheta
          - phi.sin() / r / theta.sin() * accelPhi;
        accel.y = theta.sin() * phi.sin() * accelR
          + theta.cos() * phi.sin() / r * accelTheta
          + phi.cos() / r / theta.sin() * accelPhi;
        accel.z = theta.cos() * accelR - theta.sin() / r * accelTheta;
        self._accelerations()[i * 3] += g * accel.x as f32;
        self._accelerations()[i * 3 + 1] += g * accel.y as f32;
        self._accelerations()[i * 3 + 2] += g * accel.z as f32;
      }
    }
  }

  // m2p
  fn m2p(
    &mut self,
    g: f32,
    softening: f32,
    numBoxIndex: usize,
    numLevel: usize,
    rootBoxSize: f32,
    boxMin: &Vec3<f32>,
    numInteraction: &Vec<usize>,
    interactionList: &Vec<Vec<usize>>,
    levelOffset: &Vec<usize>,
    boxIndexFull: &Vec<usize>,
    particleOffset: &[Vec<usize>; 2],
    Mnm: &Vec<Vec<Complex>>,
  ) {
    let I = Complex::new(0f64, 1f64);
    let mut MnmVector = vec![Complex::new(0f64, 0f64); numCoefficients];
    let mut YnmReal = vec![0f64; numExpansion2];
    let mut YnmRealTheta = vec![0f64; numExpansion2];
    let mut dist = Vec3::new(0f32, 0f32, 0f32);
    let mut accel = Vec3::new(0f64, 0f64, 0f64);
    let mut boxCenter = Vec3::new(0f32, 0f32, 0f32);

    let boxSize = rootBoxSize / (1 << numLevel) as f32;
    for ii in 0..numBoxIndex {
      for i in particleOffset[0][ii]..=particleOffset[1][ii] {
        for ij in 0..numInteraction[ii] {
          let jj = interactionList[ii][ij];
          let jb = jj + levelOffset[numLevel - 1];
          for j in 0..numCoefficients {
            MnmVector[j] = Mnm[jb][j];
          }
          let boxIndex3D = self.unmorton(boxIndexFull[jb]);
          boxCenter.x = boxMin.x + (boxIndex3D.x as f32 + 0.5) * boxSize;
          boxCenter.y = boxMin.y + (boxIndex3D.y as f32 + 0.5) * boxSize;
          boxCenter.z = boxMin.z + (boxIndex3D.z as f32 + 0.5) * boxSize;
          dist.x = self._positions()[i * 3] - boxCenter.x;
          dist.y = self._positions()[i * 3 + 1] - boxCenter.y;
          dist.z = self._positions()[i * 3 + 2] - boxCenter.z;

          let (r, theta, phi) = cart2sph(dist.x, dist.y, dist.z, softening);

          let xx = theta.cos();
          let yy = theta.sin();
          let s2 = ((1f64 - xx) * (1f64 + xx)).sqrt();
          let mut fact = 1f64;
          let mut pn = 1f64;
          for m in 0..numExpansions {
            let mut p = pn;
            let nm = m * m + 2 * m;
            YnmReal[nm] = self._factorial()[nm] * p;
            let mut p1 = p;
            p = xx * (2 * m + 1) as f64 * p;
            YnmRealTheta[nm] = self._factorial()[nm] * (p - (m + 1) as f64 * xx * p1) / yy;
            for n in (m + 1)..numExpansions {
              let nm = n * n + n + m;
              YnmReal[nm] = self._factorial()[nm] * p;
              let p2 = p1;
              p1 = p;
              p = (xx * (2 * n + 1) as f64 * p1 - (n + m) as f64 * p2) / (n - m + 1) as f64;
              YnmRealTheta[nm] =
                self._factorial()[nm] * ((n - m + 1) as f64 * p - (n + 1) as f64 * xx * p1) / yy;
            }
            pn = -pn * fact * s2;
            fact += 2f64;
          }
          let mut accelR = 0f64;
          let mut accelTheta = 0f64;
          let mut accelPhi = 0f64;
          let mut rn = 1f64 / r;
          for n in 0..numExpansions {
            rn /= r;
            let nm = n * n + n;
            let nms = n * (n + 1) / 2;
            let rr = -((n + 1) as f64) * rn * YnmReal[nm];
            let rtheta = rn * r * YnmRealTheta[nm];
            accelR += (rr * MnmVector[nms]).re;
            accelTheta += (rtheta * MnmVector[nms]).re;
            for m in 1..=n {
              let nm = n * n + n + m;
              let nms = n * (n + 1) / 2 + m;
              let eim = (m as f64 * phi * I).exp();
              let rr = -((n + 1) as f64) * rn * YnmReal[nm] * eim;
              let rtheta = rn * r * YnmRealTheta[nm] * eim;
              let rphi = m as f64 * rn * r * YnmReal[nm] * eim * I;
              accelR += 2f64 * (rr * MnmVector[nms]).re;
              accelTheta += 2f64 * (rtheta * MnmVector[nms]).re;
              accelPhi += 2f64 * (rphi * MnmVector[nms]).re;
            }
          }

          accel.x = theta.sin() * phi.cos() * accelR + theta.cos() * phi.cos() / r * accelTheta
            - phi.sin() / r / theta.sin() * accelPhi;
          accel.y = theta.sin() * phi.sin() * accelR
            + theta.cos() * phi.sin() / r * accelTheta
            + phi.cos() / r / theta.sin() * accelPhi;
          accel.z = theta.cos() * accelR - theta.sin() / r * accelTheta;

          self._accelerations()[i * 3] += g * accel.x as f32;
          self._accelerations()[i * 3 + 1] += g * accel.y as f32;
          self._accelerations()[i * 3 + 2] += g * accel.z as f32;
        }
      }
    }
  }
}

#[derive(PartialEq, Copy, Clone)]
pub struct Vec3<T> {
  pub x: T,
  pub y: T,
  pub z: T,
}
impl<T> Vec3<T> {
  pub fn new(x: T, y: T, z: T) -> Vec3<T> {
    Vec3 { x, y, z }
  }
}

const numExpansions: usize = 10; // order of expansion in FMM
const maxM2LInteraction: usize = 189; // max of M2L interacting boxes
const numRelativeBox: usize = 512; // max of relative box positioning

const numExpansion2: usize = numExpansions * numExpansions;
const numExpansion4: usize = numExpansion2 * numExpansion2;
const numCoefficients: usize = numExpansions * (numExpansions + 1) / 2;

impl Gravity for FMMRustGravity {
  fn _dimensions(&self) -> usize {
    self.dimensions
  }
  fn _len(&self) -> usize {
    self.len
  }
  fn _len_set(&mut self, len: usize) {
    self.len = len;
  }
  fn _params(&self) -> &Params {
    &self.params
  }
  fn _params_set(&mut self, params: Params) {
    self.params = params
  }
  fn _accelerations(&mut self) -> &mut Vec<f32> {
    &mut self.accelerations
  }
  fn _speeds(&mut self) -> &mut Vec<f32> {
    &mut self.speeds
  }
  fn _positions(&mut self) -> &mut Vec<f32> {
    &mut self.positions
  }
  fn _xyz(&mut self) -> &mut Vec<f32> {
    &mut self.xyz
  }
  fn _masses(&mut self) -> &mut Vec<f32> {
    &mut self.masses
  }
  fn _temperatures(&mut self) -> &mut Vec<f32> {
    &mut self.temperatures
  }
  fn _projector(&mut self) -> &mut Option<Projector> {
      &mut self.projector
  }
}
impl Gravity for TreeRustGravity {
  fn _dimensions(&self) -> usize {
    self.dimensions
  }
  fn _len(&self) -> usize {
    self.len
  }
  fn _len_set(&mut self, len: usize) {
    self.len = len;
  }
  fn _params(&self) -> &Params {
    &self.params
  }
  fn _params_set(&mut self, params: Params) {
    self.params = params
  }
  fn _accelerations(&mut self) -> &mut Vec<f32> {
    &mut self.accelerations
  }
  fn _speeds(&mut self) -> &mut Vec<f32> {
    &mut self.speeds
  }
  fn _positions(&mut self) -> &mut Vec<f32> {
    &mut self.positions
  }
  fn _xyz(&mut self) -> &mut Vec<f32> {
    &mut self.xyz
  }
  fn _masses(&mut self) -> &mut Vec<f32> {
    &mut self.masses
  }
  fn _temperatures(&mut self) -> &mut Vec<f32> {
    &mut self.temperatures
  }
  fn _projector(&mut self) -> &mut Option<Projector> {
      &mut self.projector
  }
}

impl FMM for FMMRustGravity {
  fn _len(&self) -> usize {
    self.len
  }
  fn _params(&self) -> &Params {
    &self.params
  }
  fn _accelerations(&mut self) -> &mut Vec<f32> {
    &mut self.accelerations
  }
  fn _positions(&mut self) -> &mut Vec<f32> {
    &mut self.positions
  }
  fn _masses(&mut self) -> &mut Vec<f32> {
    &mut self.masses
  }
  fn _mortonIndex(&mut self) -> &mut Vec<usize> {
    &mut self.mortonIndex
  }
  fn _sortValue(&mut self) -> &mut Vec<usize> {
    &mut self.sortValue
  }
  fn _sortIndex(&mut self) -> &mut Vec<usize> {
    &mut self.sortIndex
  }
  fn _sortValueBuffer(&mut self) -> &mut Vec<usize> {
    &mut self.sortValueBuffer
  }
  fn _sortIndexBuffer(&mut self) -> &mut Vec<usize> {
    &mut self.sortIndexBuffer
  }
  fn _sortPositionBuffer(&mut self) -> &mut Vec<f32> {
    &mut self.sortPositionBuffer
  }
  fn _sortMassBuffer(&mut self) -> &mut Vec<f32> {
    &mut self.sortMassBuffer
  }
  fn _factorial(&mut self) -> &mut Vec<f64> {
    &mut self.factorial
  }
  fn _Anm(&mut self) -> &mut Vec<f64> {
    &mut self.Anm
  }
  fn _anm(&mut self) -> &mut Vec<f64> {
    &mut self.anm
  }
  fn _Dnm(&mut self) -> &mut Vec<Vec<Vec<Complex>>> {
    &mut self.Dnm
  }
  fn _Ynm(&mut self) -> &mut Vec<Complex> {
    &mut self.Ynm
  }
}

impl FMM for TreeRustGravity {
  fn _len(&self) -> usize {
    self.len
  }
  fn _params(&self) -> &Params {
    &self.params
  }
  fn _accelerations(&mut self) -> &mut Vec<f32> {
    &mut self.accelerations
  }
  fn _positions(&mut self) -> &mut Vec<f32> {
    &mut self.positions
  }
  fn _masses(&mut self) -> &mut Vec<f32> {
    &mut self.masses
  }
  fn _mortonIndex(&mut self) -> &mut Vec<usize> {
    &mut self.mortonIndex
  }
  fn _sortValue(&mut self) -> &mut Vec<usize> {
    &mut self.sortValue
  }
  fn _sortIndex(&mut self) -> &mut Vec<usize> {
    &mut self.sortIndex
  }
  fn _sortValueBuffer(&mut self) -> &mut Vec<usize> {
    &mut self.sortValueBuffer
  }
  fn _sortIndexBuffer(&mut self) -> &mut Vec<usize> {
    &mut self.sortIndexBuffer
  }
  fn _sortPositionBuffer(&mut self) -> &mut Vec<f32> {
    &mut self.sortPositionBuffer
  }
  fn _sortMassBuffer(&mut self) -> &mut Vec<f32> {
    &mut self.sortMassBuffer
  }
  fn _factorial(&mut self) -> &mut Vec<f64> {
    &mut self.factorial
  }
  fn _Anm(&mut self) -> &mut Vec<f64> {
    &mut self.Anm
  }
  fn _anm(&mut self) -> &mut Vec<f64> {
    &mut self.anm
  }
  fn _Dnm(&mut self) -> &mut Vec<Vec<Vec<Complex>>> {
    &mut self.Dnm
  }
  fn _Ynm(&mut self) -> &mut Vec<Complex> {
    &mut self.Ynm
  }
}

#[wasm_bindgen]
pub struct FMMRustGravity {
  params: Params,
  xyz: Vec<f32>,
  positions: Vec<f32>,
  speeds: Vec<f32>,
  accelerations: Vec<f32>,
  masses: Vec<f32>,
  temperatures: Vec<f32>,
  len: usize,
  dimensions: usize,
  projector: Option<Projector>,

  mortonIndex: Vec<usize>,
  sortValue: Vec<usize>,
  sortIndex: Vec<usize>,
  sortValueBuffer: Vec<usize>,
  sortIndexBuffer: Vec<usize>,
  sortPositionBuffer: Vec<f32>,
  sortMassBuffer: Vec<f32>,
  factorial: Vec<f64>,

  Anm: Vec<f64>,
  anm: Vec<f64>,
  Dnm: Vec<Vec<Vec<Complex>>>,
  Ynm: Vec<Complex>,
}

#[wasm_bindgen]
impl FMMRustGravity {
  #[wasm_bindgen(constructor)]
  pub fn new(orbs: &Array, params: JsValue, alloc_len: usize) -> Result<FMMRustGravity, JsValue> {
    let (
      params,
      xyz,
      positions,
      speeds,
      accelerations,
      masses,
      temperatures,
      len,
      dimensions,
      projector,
    ) = FMMRustGravity::init(orbs, params, alloc_len)?;

    let mortonIndex = vec![0; len];
    let sortValue = vec![0; len];
    let sortIndex = vec![0; len];
    let sortValueBuffer = vec![0; len];
    let sortIndexBuffer = vec![0; len];
    let sortPositionBuffer = vec![0f32; 3 * len];
    let sortMassBuffer = vec![0f32; len];
    let factorial = vec![0f64; 4 * numExpansion2];
    let Anm = vec![0f64; numExpansion4];
    let anm = vec![0f64; 4 * numExpansion2];
    let Dnm = (0..(2 * numRelativeBox))
      .map(|_| {
        (0..numExpansions)
          .map(|_| vec![Complex::new(0f64, 0f64); numExpansion2])
          .collect::<Vec<_>>()
      })
      .collect::<Vec<_>>();
    let Ynm = vec![Complex::new(0f64, 0f64); 4 * numExpansion2];

    Ok(FMMRustGravity {
      params,
      xyz,
      positions,
      speeds,
      accelerations,
      masses,
      temperatures,
      len,
      dimensions,
      projector,

      // Do something about that:
      mortonIndex,
      sortValue,
      sortIndex,
      sortValueBuffer,
      sortIndexBuffer,
      sortPositionBuffer,
      sortMassBuffer,
      factorial,

      // precalc
      Anm,
      anm,
      Dnm,
      Ynm,
    })
  }

  pub fn xyz_ptr(&self) -> *const f32 {
    self.xyz.as_ptr()
  }
  pub fn speeds_ptr(&self) -> *const f32 {
    self.speeds.as_ptr()
  }
  pub fn masses_ptr(&self) -> *const f32 {
    self.masses.as_ptr()
  }
  pub fn temperatures_ptr(&self) -> *const f32 {
    self.temperatures.as_ptr()
  }

  pub fn frog_leap(&mut self) {
    self.leap();
  }

  pub fn simulate(&mut self) -> usize {
    let gravitationalConstant = self.params.gravitationalConstant;
    let softening = self.params.softening;
    let collisions = self.params.collisions;
    let threshold = self.params.collisionThreshold;
    let escapeDistance = self.params.escapeDistance;
    let mut collided = Vec::new();
    // self.direct(gravitationalConstant);

    let (boxMin, rootBoxSize) = self.setDomainSize();
    let (maxLevel, numBoxIndexFull) = self.setOptimumLevel();
    self.morton(maxLevel, rootBoxSize, boxMin);
    let permutation = self.sortParticles(numBoxIndexFull);

    self.morton(maxLevel, rootBoxSize, boxMin);
    let (numBoxIndexLeaf, numBoxIndexTotal) = self.countNonEmptyBoxes(maxLevel, numBoxIndexFull);

    // Allocations
    let mut particleOffset = [vec![0; numBoxIndexLeaf], vec![0; numBoxIndexLeaf]];

    let mut boxIndexMask = vec![0; numBoxIndexFull];
    let mut boxIndexFull = vec![0; numBoxIndexTotal];
    let mut levelOffset = vec![0; maxLevel];

    let mut Lnm = (0..numBoxIndexLeaf)
      .map(|_| vec![Complex::new(0f64, 0f64); numCoefficients])
      .collect::<Vec<_>>();
    let mut LnmOld = (0..numBoxIndexLeaf)
      .map(|_| vec![Complex::new(0f64, 0f64); numCoefficients])
      .collect::<Vec<_>>();
    let mut Mnm = (0..numBoxIndexTotal)
      .map(|_| vec![Complex::new(0f64, 0f64); numCoefficients])
      .collect::<Vec<_>>();

    let mut numLevel = maxLevel;

    levelOffset[numLevel - 1] = 0;
    self.morton(maxLevel, rootBoxSize, boxMin);
    let mut numBoxIndex = self.getBoxData(
      numBoxIndexFull,
      &mut boxIndexMask,
      &mut boxIndexFull,
      &mut particleOffset,
    );

    // P2P

    let (numInteraction, interactionList) = self.getInteractionList(
      numBoxIndex,
      numBoxIndexLeaf,
      numLevel,
      0,
      &levelOffset,
      &boxIndexMask,
      &boxIndexFull,
    );

    for i in 0..self.len {
      self.accelerations[i * 3] = 0f32;
      self.accelerations[i * 3 + 1] = 0f32;
      self.accelerations[i * 3 + 2] = 0f32;
    }

    self.p2p(
      gravitationalConstant,
      softening,
      numBoxIndex,
      &numInteraction,
      &interactionList,
      &particleOffset,
    );

    numLevel = maxLevel;

    // P2M
    self.p2m(
      softening,
      numBoxIndex,
      rootBoxSize,
      &boxMin,
      maxLevel,
      &boxIndexFull,
      &particleOffset,
      &mut Mnm,
    );

    if maxLevel > 2 {
      for numLevel in (2..maxLevel).rev() {
        // M2M
        let numBoxIndexOld = numBoxIndex;
        numBoxIndex = self.getBoxDataOfParent(
          numBoxIndex,
          numBoxIndexFull,
          numLevel,
          &mut levelOffset,
          &mut boxIndexMask,
          &mut boxIndexFull,
          &mut particleOffset,
          false,
        );
        self.m2m(
          numBoxIndex,
          numBoxIndexOld,
          numLevel,
          rootBoxSize,
          &mut levelOffset,
          &mut boxIndexMask,
          &mut boxIndexFull,
          &mut Mnm,
        );
      }
      numLevel = 2;
    } else {
      self.getBoxIndexMask(
        numBoxIndex,
        numBoxIndexFull,
        numLevel,
        &levelOffset,
        &mut boxIndexMask,
        &boxIndexFull,
      );
    }
    let (numInteraction, interactionList) = self.getInteractionList(
      numBoxIndex,
      numBoxIndexLeaf,
      numLevel,
      1,
      &levelOffset,
      &boxIndexMask,
      &boxIndexFull,
    );

    // M2L at level 2
    self.m2l(
      softening,
      numBoxIndex,
      numLevel,
      rootBoxSize,
      &numInteraction,
      &interactionList,
      &levelOffset,
      &boxIndexFull,
      &mut Lnm,
      &mut Mnm,
    );

    // L2L
    if maxLevel > 2 {
      for numLevel in 3..=maxLevel {
        numBoxIndex = levelOffset[numLevel - 2] - levelOffset[numLevel - 1];
        self.l2l(
          numBoxIndex,
          numBoxIndexFull,
          numLevel,
          rootBoxSize,
          &levelOffset,
          &boxIndexFull,
          &mut LnmOld,
          &mut Lnm,
        );
        self.getBoxIndexMask(
          numBoxIndex,
          numBoxIndexFull,
          numLevel,
          &levelOffset,
          &mut boxIndexMask,
          &boxIndexFull,
        );

        // M2L at lower levels
        let (numInteraction, interactionList) = self.getInteractionList(
          numBoxIndex,
          numBoxIndexLeaf,
          numLevel,
          2,
          &levelOffset,
          &boxIndexMask,
          &boxIndexFull,
        );
        self.m2l(
          softening,
          numBoxIndex,
          numLevel,
          rootBoxSize,
          &numInteraction,
          &interactionList,
          &levelOffset,
          &boxIndexFull,
          &mut Lnm,
          &mut Mnm,
        );
      }
      numLevel = maxLevel;
    }
    // L2P
    self.l2p(
      gravitationalConstant,
      softening,
      numBoxIndex,
      numLevel,
      rootBoxSize,
      &boxMin,
      &boxIndexFull,
      &particleOffset,
      &mut Lnm,
    );
    self.unsortParticles(permutation);
    self.solve(collided)
  }

  pub fn frog_drop(&mut self) {
    self.drop();
  }
  pub fn grow(&mut self, orbs: &Array) -> Result<(), JsValue> {
    Gravity::grow(self, orbs)
  }
  pub fn shrink(&mut self, n: usize) -> Result<(), JsValue> {
    Gravity::shrink(self, n)
  }
  pub fn set_orb(&mut self, i: usize, orb: JsValue) -> Result<(), JsValue> {
    Gravity::set_orb(self, i, orb)
  }
  pub fn project(&mut self) {
    Gravity::project(self)
  }
}

#[wasm_bindgen]
pub struct TreeRustGravity {
  params: Params,
  xyz: Vec<f32>,
  positions: Vec<f32>,
  speeds: Vec<f32>,
  accelerations: Vec<f32>,
  masses: Vec<f32>,
  temperatures: Vec<f32>,
  len: usize,
  dimensions: usize,
  projector: Option<Projector>,

  mortonIndex: Vec<usize>,
  sortValue: Vec<usize>,
  sortIndex: Vec<usize>,
  sortValueBuffer: Vec<usize>,
  sortIndexBuffer: Vec<usize>,
  sortPositionBuffer: Vec<f32>,
  sortMassBuffer: Vec<f32>,
  factorial: Vec<f64>,

  Anm: Vec<f64>,
  anm: Vec<f64>,
  Dnm: Vec<Vec<Vec<Complex>>>,
  Ynm: Vec<Complex>,
}

#[wasm_bindgen]
impl TreeRustGravity {
  #[wasm_bindgen(constructor)]
  pub fn new(orbs: &Array, params: JsValue, alloc_len: usize) -> Result<TreeRustGravity, JsValue> {
    let (
      params,
      xyz,
      positions,
      speeds,
      accelerations,
      masses,
      temperatures,
      len,
      dimensions,
      projector,
    ) = TreeRustGravity::init(orbs, params, alloc_len)?;

    let mortonIndex = vec![0; len];
    let sortValue = vec![0; len];
    let sortIndex = vec![0; len];
    let sortValueBuffer = vec![0; len];
    let sortIndexBuffer = vec![0; len];
    let sortPositionBuffer = vec![0f32; 3 * len];
    let sortMassBuffer = vec![0f32; len];
    let factorial = vec![0f64; 4 * numExpansion2];
    let Anm = vec![0f64; numExpansion4];
    let anm = vec![0f64; 4 * numExpansion2];
    let Dnm = (0..(2 * numRelativeBox))
      .map(|_| {
        (0..numExpansions)
          .map(|_| vec![Complex::new(0f64, 0f64); numExpansion2])
          .collect::<Vec<_>>()
      })
      .collect::<Vec<_>>();
    let Ynm = vec![Complex::new(0f64, 0f64); 4 * numExpansion2];

    Ok(TreeRustGravity {
      params,
      xyz,
      positions,
      speeds,
      accelerations,
      masses,
      temperatures,
      len,
      dimensions,
      projector,

      // Do something about that:
      mortonIndex,
      sortValue,
      sortIndex,
      sortValueBuffer,
      sortIndexBuffer,
      sortPositionBuffer,
      sortMassBuffer,
      factorial,

      // precalc
      Anm,
      anm,
      Dnm,
      Ynm,
    })
  }

  pub fn xyz_ptr(&self) -> *const f32 {
    self.xyz.as_ptr()
  }
  pub fn speeds_ptr(&self) -> *const f32 {
    self.speeds.as_ptr()
  }
  pub fn masses_ptr(&self) -> *const f32 {
    self.masses.as_ptr()
  }
  pub fn temperatures_ptr(&self) -> *const f32 {
    self.temperatures.as_ptr()
  }

  pub fn frog_leap(&mut self) {
    self.leap();
  }

  pub fn simulate(&mut self) -> usize {
    let gravitationalConstant = self.params.gravitationalConstant;
    let softening = self.params.softening;
    let collisions = self.params.collisions;
    let threshold = self.params.collisionThreshold;
    let escapeDistance = self.params.escapeDistance;
    let mut collided = Vec::new();
    // self.direct(gravitationalConstant);

    let (boxMin, rootBoxSize) = self.setDomainSize();
    let (maxLevel, numBoxIndexFull) = self.setOptimumLevel();
    self.morton(maxLevel, rootBoxSize, boxMin);
    let permutation = self.sortParticles(numBoxIndexFull);

    self.morton(maxLevel, rootBoxSize, boxMin);
    let (numBoxIndexLeaf, numBoxIndexTotal) = self.countNonEmptyBoxes(maxLevel, numBoxIndexFull);

    // Allocations
    let mut particleOffset = [vec![0; numBoxIndexLeaf], vec![0; numBoxIndexLeaf]];

    let mut boxIndexMask = vec![0; numBoxIndexFull];
    let mut boxIndexFull = vec![0; numBoxIndexTotal];
    let mut levelOffset = vec![0; maxLevel];

    let mut Lnm = (0..numBoxIndexLeaf)
      .map(|_| vec![Complex::new(0f64, 0f64); numCoefficients])
      .collect::<Vec<_>>();
    let mut LnmOld = (0..numBoxIndexLeaf)
      .map(|_| vec![Complex::new(0f64, 0f64); numCoefficients])
      .collect::<Vec<_>>();
    let mut Mnm = (0..numBoxIndexTotal)
      .map(|_| vec![Complex::new(0f64, 0f64); numCoefficients])
      .collect::<Vec<_>>();

    let mut numLevel = maxLevel;

    levelOffset[numLevel - 1] = 0;
    self.morton(maxLevel, rootBoxSize, boxMin);
    let mut numBoxIndex = self.getBoxData(
      numBoxIndexFull,
      &mut boxIndexMask,
      &mut boxIndexFull,
      &mut particleOffset,
    );

    // P2P

    let (numInteraction, interactionList) = self.getInteractionList(
      numBoxIndex,
      numBoxIndexLeaf,
      numLevel,
      0,
      &levelOffset,
      &boxIndexMask,
      &boxIndexFull,
    );

    for i in 0..self.len {
      self.accelerations[i * 3] = 0f32;
      self.accelerations[i * 3 + 1] = 0f32;
      self.accelerations[i * 3 + 2] = 0f32;
    }

    self.p2p(
      gravitationalConstant,
      softening,
      numBoxIndex,
      &numInteraction,
      &interactionList,
      &particleOffset,
    );

    numLevel = maxLevel;

    // P2M
    self.p2m(
      softening,
      numBoxIndex,
      rootBoxSize,
      &boxMin,
      maxLevel,
      &boxIndexFull,
      &particleOffset,
      &mut Mnm,
    );

    if maxLevel > 2 {
      for numLevel in (2..maxLevel).rev() {
        // M2P at lower levels
        let (numInteraction, interactionList) = self.getInteractionList(
          numBoxIndex,
          numBoxIndexLeaf,
          numLevel + 1,
          2,
          &levelOffset,
          &boxIndexMask,
          &boxIndexFull,
        );
        self.m2p(
          gravitationalConstant,
          softening,
          numBoxIndex,
          numLevel + 1,
          rootBoxSize,
          &boxMin,
          &numInteraction,
          &interactionList,
          &levelOffset,
          &boxIndexFull,
          &particleOffset,
          &mut Mnm,
        );

        // M2M
        let numBoxIndexOld = numBoxIndex;
        numBoxIndex = self.getBoxDataOfParent(
          numBoxIndex,
          numBoxIndexFull,
          numLevel,
          &mut levelOffset,
          &mut boxIndexMask,
          &mut boxIndexFull,
          &mut particleOffset,
          true,
        );
        self.m2m(
          numBoxIndex,
          numBoxIndexOld,
          numLevel,
          rootBoxSize,
          &mut levelOffset,
          &mut boxIndexMask,
          &mut boxIndexFull,
          &mut Mnm,
        );
      }
      numLevel = 2;
    } else {
      self.getBoxIndexMask(
        numBoxIndex,
        numBoxIndexFull,
        numLevel,
        &levelOffset,
        &mut boxIndexMask,
        &boxIndexFull,
      );
    }
    let (numInteraction, interactionList) = self.getInteractionList(
      numBoxIndex,
      numBoxIndexLeaf,
      numLevel,
      1,
      &levelOffset,
      &boxIndexMask,
      &boxIndexFull,
    );

    // M2P at level 2
    self.m2p(
      gravitationalConstant,
      softening,
      numBoxIndex,
      numLevel,
      rootBoxSize,
      &boxMin,
      &numInteraction,
      &interactionList,
      &levelOffset,
      &boxIndexFull,
      &particleOffset,
      &mut Mnm,
    );
    self.unsortParticles(permutation);
    self.solve(collided)
  }

  pub fn frog_drop(&mut self) {
    self.drop();
  }
  pub fn grow(&mut self, orbs: &Array) -> Result<(), JsValue> {
    Gravity::grow(self, orbs)
  }
  pub fn shrink(&mut self, n: usize) -> Result<(), JsValue> {
    Gravity::shrink(self, n)
  }
  pub fn set_orb(&mut self, i: usize, orb: JsValue) -> Result<(), JsValue> {
    Gravity::set_orb(self, i, orb)
  }
  pub fn project(&mut self) {
    Gravity::project(self)
  }
}
