#![allow(non_snake_case)]
use crate::utils::init_hook;
use num_complex::Complex32 as Complex;
use std::f32;
use std::usize;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen(js_namespace = console)]
  fn log(s: &str);
}

#[allow(unused_macros)]
macro_rules! console_log {
  // Note that this is using the `log` function imported above during
  // `bare_bones`
  ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
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
const maxP2PInteraction: usize = 27; // max of P2P interacting boxes
const maxM2LInteraction: usize = 189; // max of M2L interacting boxes
const numRelativeBox: usize = 512; // max of relative box positioning
const targetBufferSize: usize = 200000; // max of GPU target buffer
const sourceBufferSize: usize = 100000; // max of GPU source buffer
const threadsPerBlockTypeA: usize = 128; // size of GPU thread block P2P
const threadsPerBlockTypeB: usize = 64; // size of GPU thread block M2L

const eps: f32 = 1e-6; // single precision epsilon

const numExpansion2: usize = numExpansions * numExpansions;
const numExpansion4: usize = numExpansion2 * numExpansion2;
const numCoefficients: usize = numExpansions * (numExpansions + 1) / 2;
const DnmSize: usize = (4 * numExpansion2 * numExpansions - numExpansions) / 3;

#[wasm_bindgen]
pub struct FMMRustGravity {
  positions: Vec<f32>,
  speeds: Vec<f32>,
  accelerations: Vec<f32>,
  masses: Vec<f32>,
  temperatures: Vec<f32>,
  len: usize,

  mortonIndex: Vec<usize>,
  sortValue: Vec<usize>,
  sortIndex: Vec<usize>,
  sortValueBuffer: Vec<usize>,
  sortIndexBuffer: Vec<usize>,
  sortPositionBuffer: Vec<f32>,
  sortMassBuffer: Vec<f32>,
  factorial: Vec<f32>,

  Anm: Vec<f32>,
  anm: Vec<f32>,
  Dnm: Vec<Vec<Vec<Complex>>>,
  Ynm: Vec<Complex>,
}

#[wasm_bindgen]
impl FMMRustGravity {
  pub fn new(len: usize) -> FMMRustGravity {
    init_hook();

    let positions = vec![0f32; 3 * len];
    let speeds = vec![0f32; 3 * len];
    let accelerations = vec![0f32; 3 * len];
    let masses = vec![0f32; len];
    let temperatures = vec![0f32; len];

    let mortonIndex = vec![0; len];
    let sortValue = vec![0; len];
    let sortIndex = vec![0; len];
    let sortValueBuffer = vec![0; len];
    let sortIndexBuffer = vec![0; len];
    let sortPositionBuffer = vec![0f32; 3 * len];
    let sortMassBuffer = vec![0f32; len];
    let factorial = vec![0f32; 4 * numExpansion2];
    let Anm = vec![0f32; numExpansion4];
    let anm = vec![0f32; 4 * numExpansion2];
    let Dnm = (0..(2 * numRelativeBox))
      .map(|_| {
        (0..numExpansions)
          .map(|_| vec![Complex::new(0f32, 0f32); numExpansion2])
          .collect::<Vec<_>>()
      })
      .collect::<Vec<_>>();
    let Ynm = vec![Complex::new(0f32, 0f32); 4 * numExpansion2];

    FMMRustGravity {
      positions,
      speeds,
      accelerations,
      masses,
      temperatures,
      len,

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
    }
  }

  pub fn positions_ptr(&self) -> *const f32 {
    self.positions.as_ptr()
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

  // Calculate range of FMM domain from particle positions
  fn setDomainSize(&self) -> (Vec3<f32>, f32) {
    // Initialize the minimum and maximum values
    let mut xmin = 1000000f32;
    let mut xmax = -1000000f32;
    let mut ymin = 1000000f32;
    let mut ymax = -1000000f32;
    let mut zmin = 1000000f32;
    let mut zmax = -1000000f32;
    // Calculate the minimum and maximum of particle positions
    for i in 0..self.len {
      xmin = xmin.min(self.positions[i * 3]);
      xmax = xmax.max(self.positions[i * 3]);
      ymin = ymin.min(self.positions[i * 3 + 1]);
      ymax = ymax.max(self.positions[i * 3 + 1]);
      zmin = zmin.min(self.positions[i * 3 + 2]);
      zmax = zmax.max(self.positions[i * 3 + 2]);
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
  fn setOptimumLevel(&self) -> (usize, usize) {
    //  let level_switch = [2e4,1.7e5,1.3e6,1e7,7e7,5e8]; // cpu-tree
    //  let level_switch = [1.3e4,1e5,7e5,5e6,3e7,1.5e8]; // cpu-fmm
    //  let level_switch = [1e5,5e5,5e6,3e7,2e8,1.5e9]; // gpu-tree
    let level_switch = [
      1e5 as usize,
      7e5 as usize,
      7e6 as usize,
      5e7 as usize,
      3e8 as usize,
      2e9 as usize,
    ]; // gpu-fmm  // f32

    let mut maxLevel = 1;
    if self.len < level_switch[0] {
      maxLevel += 1;
    } else if self.len < level_switch[1] {
      maxLevel += 2;
    } else if self.len < level_switch[2] {
      maxLevel += 3;
    } else if self.len < level_switch[3] {
      maxLevel += 4;
    } else if self.len < level_switch[4] {
      maxLevel += 5;
    } else if self.len < level_switch[5] {
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

    for j in 0..self.len {
      let mut nx = ((self.positions[j * 3] - boxMin.x) / boxSize) as usize;
      let mut ny = ((self.positions[j * 3 + 1] - boxMin.y) / boxSize) as usize;
      let mut nz = ((self.positions[j * 3 + 2] - boxMin.z) / boxSize) as usize;
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
      self.mortonIndex[j] = boxIndex;
    }
  }

  // Generate Morton index for a box center to use in M2L translation
  fn morton1(&self, boxIndex3D: &mut Vec3<usize>, numLevel: usize) -> usize {
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
    boxIndex
  }

  // Returns 3D box index from Morton index
  fn unmorton(&self, boxIndex: usize) -> Vec3<usize> {
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
    boxIndex3D.x = mortonIndex3D[1];
    boxIndex3D.y = mortonIndex3D[2];
    boxIndex3D.z = mortonIndex3D[0];
    boxIndex3D
  }

  // Prepare for binning particles by first sorting the Morton index
  fn sort(&mut self, numBoxIndexFull: usize) {
    for i in 0..numBoxIndexFull {
      self.sortIndexBuffer[i] = 0;
    }
    for i in 0..self.len {
      self.sortIndexBuffer[self.sortValue[i]] += 1;
    }
    for i in 1..numBoxIndexFull {
      self.sortIndexBuffer[i] += self.sortIndexBuffer[i - 1];
    }
    for i in (0..self.len).rev() {
      self.sortIndexBuffer[self.sortValue[i]] -= 1;
      self.sortValueBuffer[self.sortIndexBuffer[self.sortValue[i]]] = self.sortValue[i];
      self.sortIndex[self.sortIndexBuffer[self.sortValue[i]]] = i;
    }
    for i in 0..self.len {
      self.sortValue[i] = self.sortValueBuffer[i];
    }
  }

  // Sort the particles according to the previously sorted Morton index
  fn sortParticles(&mut self, numBoxIndexFull: usize) -> Vec<usize> {
    //TODO this is bad

    let mut permutation = vec![0; self.len];

    for i in 0..self.len {
      self.sortValue[i] = self.mortonIndex[i];
      self.sortIndex[i] = i;
    }
    self.sort(numBoxIndexFull);
    for i in 0..self.len {
      permutation[i] = self.sortIndex[i];
    }

    for i in 0..self.len {
      self.sortPositionBuffer[i * 3] = self.positions[permutation[i] * 3];
      self.sortPositionBuffer[i * 3 + 1] = self.positions[permutation[i] * 3 + 1];
      self.sortPositionBuffer[i * 3 + 2] = self.positions[permutation[i] * 3 + 2];
      self.sortMassBuffer[i] = self.masses[permutation[i]];
    }
    for i in 0..self.len {
      self.positions[i * 3] = self.sortPositionBuffer[i * 3];
      self.positions[i * 3 + 1] = self.sortPositionBuffer[i * 3 + 1];
      self.positions[i * 3 + 2] = self.sortPositionBuffer[i * 3 + 2];
      self.masses[i] = self.sortMassBuffer[i];
    }

    permutation
  }

  // Unsorting particles upon exit (optional)
  fn unsortParticles(&mut self, permutation: Vec<usize>) {
    for i in 0..self.len {
      self.sortPositionBuffer[permutation[i] * 3] = self.accelerations[i * 3];
      self.sortPositionBuffer[permutation[i] * 3 + 1] = self.accelerations[i * 3 + 1];
      self.sortPositionBuffer[permutation[i] * 3 + 2] = self.accelerations[i * 3 + 2];
    }
    for i in 0..self.len {
      self.accelerations[i * 3] = self.sortPositionBuffer[i * 3];
      self.accelerations[i * 3 + 1] = self.sortPositionBuffer[i * 3 + 1];
      self.accelerations[i * 3 + 2] = self.sortPositionBuffer[i * 3 + 2];
    }
    for i in 0..self.len {
      self.sortPositionBuffer[permutation[i] * 3] = self.positions[i * 3];
      self.sortPositionBuffer[permutation[i] * 3 + 1] = self.positions[i * 3 + 1];
      self.sortPositionBuffer[permutation[i] * 3 + 2] = self.positions[i * 3 + 2];
      self.sortMassBuffer[permutation[i]] = self.masses[i];
    }
    for i in 0..self.len {
      self.positions[i * 3] = self.sortPositionBuffer[i * 3];
      self.positions[i * 3 + 1] = self.sortPositionBuffer[i * 3 + 1];
      self.positions[i * 3 + 2] = self.sortPositionBuffer[i * 3 + 2];
      self.masses[i] = self.sortMassBuffer[i];
    }
  }

  // Estimate storage requirements adaptively to skip empty boxes
  fn countNonEmptyBoxes(&mut self, maxLevel: usize, numBoxIndexFull: usize) -> (usize, usize) {
    for i in 0..self.len {
      self.sortValue[i] = self.mortonIndex[i];
      self.sortIndex[i] = i;
    }
    self.sort(numBoxIndexFull);

    // Count non-empty boxes at leaf level
    let mut numBoxIndexLeaf = 0; // counter
    let mut currentIndex = usize::MAX;
    for i in 0..self.len {
      if self.sortValue[i] != currentIndex {
        numBoxIndexLeaf += 1;
        currentIndex = self.sortValue[i];
      }
    }

    // Count non-empty boxes for all levels
    let mut numBoxIndexTotal = numBoxIndexLeaf;
    for numLevel in (2..maxLevel).rev() {
      currentIndex = usize::MAX;
      for i in 0..self.len {
        if self.sortValue[i] / (1 << 3 * (maxLevel - numLevel)) != currentIndex {
          numBoxIndexTotal += 1;
          currentIndex = self.sortValue[i] / (1 << 3 * (maxLevel - numLevel));
        }
      }
    }
    (numBoxIndexLeaf, numBoxIndexTotal)
  }

  // Obtain two-way link list between non-empty and full box indices, and offset of particle index
  fn getBoxData(
    &self,
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
    for i in 0..self.len {
      if self.mortonIndex[i] != currentIndex {
        boxIndexMask[self.mortonIndex[i]] = numBoxIndex;
        boxIndexFull[numBoxIndex] = self.mortonIndex[i];
        particleOffset[0][numBoxIndex] = i;
        if numBoxIndex > 0 {
          particleOffset[1][numBoxIndex - 1] = i - 1;
        }
        currentIndex = self.mortonIndex[i];
        numBoxIndex += 1;
      }
    }
    particleOffset[1][numBoxIndex - 1] = self.len - 1;
    numBoxIndex
  }

  // Propagate non-empty/full link list to parent boxes
  //   fn getBoxDataOfParent(&self, int& numBoxIndex, numLevel: i32, treeOrFMM: i32) {
  // let i,numBoxIndexOld,currentIndex,boxIndex; // i32
  //   levelOffset[numLevel-1] = levelOffset[numLevel]+numBoxIndex;
  //   numBoxIndexOld = numBoxIndex;
  //   numBoxIndex = 0;
  //   currentIndex = -1;
  //   for( i=0; i<numBoxIndexFull; i++ ) boxIndexMask[i] = -1;
  //   for( i=0; i<numBoxIndexOld; i++ ) {
  //     boxIndex = i+levelOffset[numLevel];
  //     if( currentIndex != boxIndexFull[boxIndex]/8 ) {
  //       currentIndex = boxIndexFull[boxIndex]/8;
  //       boxIndexMask[currentIndex] = numBoxIndex;
  //       boxIndexFull[numBoxIndex+levelOffset[numLevel-1]] = currentIndex;
  //       if( treeOrFMM == 0 ) {
  //         particleOffset[0][numBoxIndex] = particleOffset[0][i];
  //         if( numBoxIndex > 0 ) particleOffset[1][numBoxIndex-1] = particleOffset[0][i]-1;
  //       }
  //       numBoxIndex++;
  //     }
  //   }
  //   if( treeOrFMM == 0 ) particleOffset[1][numBoxIndex-1] = particleOffset[1][numBoxIndexOld-1];
  // }

  // Recalculate non-empty box index for current level
  //   fn getBoxIndexMask(&self, numBoxIndex: i32, numLevel: i32) {
  // let i,boxIndex; // i32
  //   for( i=0; i<numBoxIndexFull; i++ ) boxIndexMask[i] = -1;
  //   for( i=0; i<numBoxIndex; i++ ) {
  //     boxIndex = i+levelOffset[numLevel-1];
  //     boxIndexMask[boxIndexFull[boxIndex]] = i;
  //   }
  // }

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
        for jx in jxmin.max(ix.max(1) - 1)..(jxmax.min(ix + 1) + 1) {
          for jy in jymin.max(iy.max(1) - 1)..(jymax.min(iy + 1) + 1) {
            for jz in jzmin.max(iz.max(1) - 1)..(jzmax.min(iz + 1) + 1) {
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
        let ix = boxIndex3D.x;
        let iy = boxIndex3D.y;
        let iz = boxIndex3D.z;
        for jj in 0..numBoxIndex {
          let jb = jj + levelOffset[numLevel - 1];
          boxIndex3D = self.unmorton(boxIndexFull[jb]);
          let jx = boxIndex3D.x;
          let jy = boxIndex3D.y;
          let jz = boxIndex3D.z;
          if jx < ix - 1 || ix + 1 < jx || jy < iy - 1 || iy + 1 < jy || jz < iz - 1 || iz + 1 < jz
          {
            interactionList[ii][numInteraction[ii]] = jj;
            numInteraction[ii] += 1;
          }
        }
      }
    // M2L at lower levels
    } else if interactionType == 2 {
      for ii in 0..numBoxIndex {
        let ib = ii + levelOffset[numLevel - 1];
        numInteraction[ii] = 0;
        let mut boxIndex3D = self.unmorton(boxIndexFull[ib]);
        let ix = boxIndex3D.x;
        let iy = boxIndex3D.y;
        let iz = boxIndex3D.z;
        let ixp = (ix + 2) / 2;
        let iyp = (iy + 2) / 2;
        let izp = (iz + 2) / 2;
        for jxp in (ixp - 1)..(ixp + 2) {
          for jyp in (iyp - 1)..(iyp + 2) {
            for jzp in (izp - 1)..(izp + 2) {
              // TODO: Check usize overflow
              for jx in (jxmin.max(2 * jxp.max(1) - 2))..(jxmax.min(2 * jxp - 1) + 1) {
                for jy in (jymin.max(2 * jyp.max(1) - 2))..(jymax.min(2 * jyp - 1) + 1) {
                  for jz in (jzmin.max(2 * jzp.max(1) - 2))..(jzmax.min(2 * jzp - 1) + 1) {
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

  fn cart2sph(&self, dx: f32, dy: f32, dz: f32) -> (f32, f32, f32) {
    let r = (dx * dx + dy * dy + dz * dz).sqrt() + eps;
    let theta = (dz / r).acos();
    let phi;

    if dx.abs() + dy.abs() < eps {
      phi = 0f32;
    } else if dx.abs() < eps {
      phi = dy / dy.abs() * f32::consts::PI * 0.5;
    } else if dx > 0f32 {
      phi = (dy / dx).atan();
    } else {
      phi = (dy / dx).atan() + f32::consts::PI;
    }
    (r, theta, phi)
  }

  // direct summation kernel
  fn direct(&mut self, g: f32) {
    let mut dist = Vec3::new(0f32, 0f32, 0f32);
    for i in 0..self.len {
      let mut ai = Vec3::new(0f32, 0f32, 0f32);
      for j in 0..self.len {
        if i == j {
          continue;
        }
        dist.x = self.positions[i * 3] - self.positions[j * 3];
        dist.y = self.positions[i * 3 + 1] - self.positions[j * 3 + 1];
        dist.z = self.positions[i * 3 + 2] - self.positions[j * 3 + 2];
        let invDist = 1f32 / (dist.x * dist.x + dist.y * dist.y + dist.z * dist.z + eps).sqrt();
        let invDistCube = self.masses[j] * invDist * invDist * invDist;
        ai.x -= dist.x * invDistCube;
        ai.y -= dist.y * invDistCube;
        ai.z -= dist.z * invDistCube;
      }
      self.accelerations[i * 3] = g * ai.x;
      self.accelerations[i * 3 + 1] = g * ai.y;
      self.accelerations[i * 3 + 2] = g * ai.z;
    }
  }

  // precalculate M2L translation matrix and Wigner rotation matrix

  pub fn precalc(&mut self) {
    // let n,m,nm,nabsm,j,k,nk,npn,nmn,npm,nmm,nmk,i,nmk1,nm1k,nmk2; // i32
    //   vec3<int> boxIndex3D;
    //   vec3<double> dist;
    //   double anmk[2][numExpansion4];
    //   double Dnmd[numExpansion4];
    //   double fnma,fnpa,pn,p,p1,p2,anmd,anmkd,rho,alpha,beta,sc,ank,ek;
    //   std::complex<double> expBeta[numExpansion2],I(0f32,1f32);

    // let jk,jkn,jnk; // i32
    //   double fnmm,fnpm,fad;

    for n in 0..(2 * numExpansions as i32) {
      for m in -n..=n {
        let nm = (n * n + n + m) as usize;
        let nabsm = m.abs();
        let mut fnmm = 1f32;
        for i in 1..=(n - m) {
          fnmm *= i as f32;
        }
        let mut fnpm = 1f32;
        for i in 1..=(n + m) {
          fnpm *= i as f32;
        }
        let mut fnma = 1f32;
        for i in 1..=(n - nabsm) {
          fnma *= i as f32;
        }
        let mut fnpa = 1f32;
        for i in 1..=(n + nabsm) {
          fnpa *= i as f32;
        }
        self.factorial[nm] = (fnma / fnpa).sqrt();
        let fad = (fnmm * fnpm).sqrt();
        self.anm[nm] = -1f32.powi(n) / fad;
      }
    }

    for j in 0..(numExpansions as i32) {
      for k in -j..=j {
        let jk = j * j + j + k;
        for n in k.abs()..(numExpansions as i32) {
          let nk = n * n + n + k;
          let jkn = jk * (numExpansion2 as i32) + nk;
          let jnk = (j + n) * (j + n) + j + n;
          self.Anm[jkn as usize] =
            -1f32.powi(j + k) * self.anm[nk as usize] * self.anm[jk as usize]
              / self.anm[jnk as usize];
        }
      }
    }

    let mut pn = 1f32;
    let mut p;
    let mut p1;
    let mut p2;
    for m in 0..(2 * numExpansions) {
      p = pn;
      let npn = m * m + 2 * m;
      let nmn = m * m;
      self.Ynm[npn] = Complex::new(self.factorial[npn] * p, 0f32);
      self.Ynm[nmn] = self.Ynm[npn].conj();
      p1 = p;
      p = (2 * m + 1) as f32 * p;
      for n in (m + 1)..(2 * numExpansions) {
        let npm = n * n + n + m;
        let nmm = n * n + n - m;
        self.Ynm[npn] = Complex::new(self.factorial[npm] * p, 0f32);
        self.Ynm[nmn] = self.Ynm[npm].conj();
        p2 = p1;
        p1 = p;
        p = ((2 * n + 1) as f32 * p1 - (n + m) as f32 * p2) / (n - m + 1) as f32;
      }
      pn = 0f32;
    }

    let mut anmk = [vec![0f32; numExpansion4], vec![0f32; numExpansion4]];
    for n in 0..numExpansions {
      for m in 1..=n {
        let anmd = (n * (n + 1) - m * (m - 1)) as f32;
        for k in (1 - m)..m {
          let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
          let anmkd = ((n * (n + 1) - k * (k + 1)) / (n * (n + 1) - m * (m - 1))) as f32;
          anmk[0][nmk] = -((m + k) as f32) / anmd.sqrt();
          anmk[1][nmk] = anmkd.sqrt();
        }
      }
    }
    let I = Complex::new(0f32, 1f32);
    let mut expBeta = vec![Complex::new(0f32, 0f32); numExpansion2];
    let mut Dnmd = vec![0f32; numExpansion4];

    for i in 0..numRelativeBox {
      let boxIndex3D = self.unmorton(i);
      let dist = Vec3::new(
        (boxIndex3D.x - 3) as f32,
        (boxIndex3D.y - 3) as f32,
        (boxIndex3D.z - 3) as f32,
      );
      let (_, mut alpha, mut beta) = self.cart2sph(dist.x, dist.y, dist.z);

      let mut sc = alpha.sin() / (1f32 + alpha.cos());
      for n in 0..(4 * numExpansions - 3) {
        expBeta[n] = ((n - 2 * numExpansions + 2) as f32 * beta * I).exp();
      }

      for n in 0..numExpansions {
        let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + n;
        Dnmd[nmk] = (alpha * 0.5).cos().powi((2 * n) as i32);
        for k in ((1 - n)..(n + 1)).rev() {
          let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k;
          let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k - 1;
          let ank = (n + k) / (n - k + 1);
          Dnmd[nmk1] = (ank as f32).sqrt() * (alpha * 0.5).tan() * Dnmd[nmk];
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
            let ek = -1f32.powi(k);
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m;
            Dnmd[nmk as usize] = ek * Dnmd[nmk as usize];
            Dnmd[nmk1 as usize] = -1f32.powi(m + k) * Dnmd[nmk as usize];
          }
          for k in 0..=m {
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + k * (2 * n + 1) + m;
            let nmk2 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m;
            Dnmd[nmk1 as usize] = -1f32.powi(m + k) * Dnmd[nmk as usize];
            Dnmd[nmk2 as usize] = Dnmd[nmk1 as usize];
          }
        }
      }

      for n in 0..(numExpansions as i32) {
        for m in 0..=n {
          for k in -n..=n {
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nk = n * (n + 1) + k;
            self.Dnm[i][m as usize][nk as usize] =
              Dnmd[nmk as usize] * expBeta[(k + m + 2 * (numExpansions as i32) - 2) as usize];
          }
        }
      }

      alpha = -alpha;
      beta = -beta;

      sc = alpha.sin() / (1f32 + alpha.cos());
      for n in 0..(4 * numExpansions - 3) {
        expBeta[n] = ((n - 2 * numExpansions + 2) as f32 * beta * I).exp();
      }

      for n in 0..numExpansions {
        let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + n;
        Dnmd[nmk] = (alpha * 0.5).cos().powi((2 * n) as i32);
        for k in ((1 - n)..=n).rev() {
          let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k;
          let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + n * (2 * n + 1) + k - 1;
          let ank = (n + k) / (n - k + 1);
          Dnmd[nmk1] = (ank as f32).sqrt() * (alpha * 0.5).tan() * Dnmd[nmk];
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
            let ek = -1f32.powi(k);
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m;
            Dnmd[nmk as usize] = ek * Dnmd[nmk as usize];
            Dnmd[nmk1 as usize] = -1f32.powi(m + k) * Dnmd[nmk as usize];
          }
          for k in 0..=m {
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nmk1 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + k * (2 * n + 1) + m;
            let nmk2 = (4 * n * n * n + 6 * n * n + 5 * n) / 3 - k * (2 * n + 1) - m;
            Dnmd[nmk1 as usize] = -1f32.powi(m + k) * Dnmd[nmk as usize];
            Dnmd[nmk2 as usize] = Dnmd[nmk1 as usize];
          }
        }
      }

      for n in 0..(numExpansions as i32) {
        for m in 0..=n {
          for k in -n..=n {
            let nmk = (4 * n * n * n + 6 * n * n + 5 * n) / 3 + m * (2 * n + 1) + k;
            let nk = n * (n + 1) + k;
            self.Dnm[i + numRelativeBox][m as usize][nk as usize] =
              Dnmd[nmk as usize] * expBeta[(k + m + 2 * (numExpansions as i32) - 2) as usize];
          }
        }
      }
    }
  }

  // // Spherical harmonic rotation
  //  pub fn rotation(std::complex<double>* Cnm, std::complex<double>* CnmOut, std::complex<double>** Dnm) {
  // let n,m,nms,k,nk,nks; // i32
  //   std::complex<double> CnmScalar;

  //   for( n=0; n<numExpansions; n++ ) {
  //     for( m=0; m<=n; m++ ) {
  //       nms = n*(n+1)/2+m;
  //       CnmScalar = 0;
  //       for( k=-n; k<=-1; k++ ) {
  //         nk = n*(n+1)+k;
  //         nks = n*(n+1)/2-k;
  //         CnmScalar += Dnm[m][nk]*conj(Cnm[nks]);
  //       }
  //       for( k=0; k<=n; k++ ) {
  //         nk = n*(n+1)+k;
  //         nks = n*(n+1)/2+k;
  //         CnmScalar += Dnm[m][nk]*Cnm[nks];
  //       }
  //       CnmOut[nms] = CnmScalar;
  //     }
  //   }
  // }

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
        for i in particleOffset[0][ii]..(particleOffset[1][ii] + 1) {
          let mut ai = Vec3::new(0f32, 0f32, 0f32);
          for j in particleOffset[0][jj]..(particleOffset[1][jj] + 1) {
            if i == j {
              continue;
            }
            dist.x = self.positions[i * 3] - self.positions[j * 3];
            dist.y = self.positions[i * 3 + 1] - self.positions[j * 3 + 1];
            dist.z = self.positions[i * 3 + 2] - self.positions[j * 3 + 2];
            let invDist =
              1f32 / (dist.x * dist.x + dist.y * dist.y + dist.z * dist.z + softening2).sqrt();
            let invDistCube = self.masses[j] * invDist * invDist * invDist;
            ai.x -= dist.x * invDistCube;
            ai.y -= dist.y * invDistCube;
            ai.z -= dist.z * invDistCube;
          }
          self.accelerations[i * 3] += g * ai.x;
          self.accelerations[i * 3 + 1] += g * ai.y;
          self.accelerations[i * 3 + 2] += g * ai.z;
        }
      }
    }
  }

  // p2m
  fn p2m(
    &self,
    numBoxIndex: usize,
    rootBoxSize: f32,
    boxMin: &Vec3<f32>,
    maxLevel: usize,
    boxIndexFull: &Vec<usize>,
    particleOffset: &[Vec<usize>; 2],
    Mnm: &mut Vec<Vec<Complex>>,
  ) {
    // let jj,j,n,m,nm,nms; // i32
    //   vec3<int> boxIndex3D;
    //   vec3<float> boxCenter;
    //   vec3<double> dist;
    //   double boxSize,rho,alpha,beta;
    //   double xx,s2,fact,pn,p,p1,p2,rhom,rhon;
    //   double YnmReal[numExpansion2];
    //   std::complex<double> MnmVector[numCoefficients],I(0f32,1f32),eim;
    let I = Complex::new(0f32, 1f32);
    let mut YnmReal = vec![0f32; numExpansion2];
    let boxSize = rootBoxSize / (1 << maxLevel) as f32;
    let mut dist = Vec3::new(0f32, 0f32, 0f32);
    let mut boxCenter = Vec3::new(0f32, 0f32, 0f32);
    for jj in 0..numBoxIndex {
      let boxIndex3D = self.unmorton(boxIndexFull[jj]);
      boxCenter.x = boxMin.x + (boxIndex3D.x as f32 + 0.5) * boxSize;
      boxCenter.y = boxMin.y + (boxIndex3D.y as f32 + 0.5) * boxSize;
      boxCenter.z = boxMin.z + (boxIndex3D.z as f32 + 0.5) * boxSize;
      let mut MnmVector = vec![Complex::new(0f32, 0f32); numCoefficients];
      for j in 0..numCoefficients {
        MnmVector[j] = Complex::new(0f32, 0f32);
      }
      for j in particleOffset[0][jj]..particleOffset[1][jj] {
        dist.x = self.positions[j * 3] - boxCenter.x;
        dist.y = self.positions[j * 3 + 1] - boxCenter.y;
        dist.z = self.positions[j * 3 + 2] - boxCenter.z;
        let (rho, alpha, beta) = self.cart2sph(dist.x, dist.y, dist.z);
        let xx = alpha.cos();
        let s2 = ((1f32 - xx) * (1f32 + xx)).sqrt();
        let mut fact = 1f32;
        let mut pn = 1f32;
        let mut rhom = 1f32;
        for m in 0..numExpansions {
          let mut p = pn;
          let mut nm = m * m + 2 * m;
          YnmReal[nm] = rhom * self.factorial[nm] * p;
          let mut p1 = p;
          p = xx * (2 * m + 1) as f32 * p;
          rhom *= rho;
          let mut rhon = rhom;
          for n in (m + 1)..numExpansions {
            nm = n * n + n + m;
            YnmReal[nm] = rhon * self.factorial[nm] * p;
            let p2 = p1;
            p1 = p;
            p = (xx * (2 * n + 1) as f32 * p1 - (n + m) as f32 * p2) / (n - m + 1) as f32;
            rhon *= rho;
          }
          pn = -pn * fact * s2;
          fact += 2f32;
        }
        for n in 0..numExpansions {
          for m in 0..=n {
            let nm = n * n + n + m;
            let nms = n * (n + 1) / 2 + m;
            let eim = (-(m as f32) * beta * I).exp();
            MnmVector[nms] += Complex::new(self.masses[j], 0f32) * YnmReal[nm] * eim;
          }
        }
      }
      for j in 0..numCoefficients {
        Mnm[jj][j] = MnmVector[j];
      }
    }
  }

  // // m2m
  //  pub fn m2m(numBoxIndex: i32, numBoxIndexOld: i32, numLevel: i32) {
  // let ii,ib,j,jj,nfjp,nfjc,jb,je,k,jk,jks,n,jnk,jnks,nm; // i32
  //   vec3<int> boxIndex3D;
  //   double boxSize,rho;
  //   std::complex<double> cnm,MnmScalar;
  //   std::complex<double> MnmVectorB[numCoefficients],MnmVectorA[numCoefficients];

  //   boxSize = rootBoxSize/(1 << numLevel);
  //   for ii in (0..numBoxIndex) {
  //     ib = ii+levelOffset[numLevel-1];
  //     for( j=0; j<numCoefficients; j++ ) {
  //       Mnm[ib][j] = 0;
  //     }
  //   }
  //   for( jj=0; jj<numBoxIndexOld; jj++ ) {
  //     jb = jj+levelOffset[numLevel];
  //     nfjp = boxIndexFull[jb]/8;
  //     nfjc = boxIndexFull[jb]%8;
  //     ib = boxIndexMask[nfjp]+levelOffset[numLevel-1];
  //     tree.unmorton(nfjc,boxIndex3D);
  //     boxIndex3D.x = 4-boxIndex3D.x*2;
  //     boxIndex3D.y = 4-boxIndex3D.y*2;
  //     boxIndex3D.z = 4-boxIndex3D.z*2;
  //     tree.morton1(boxIndex3D,je,3);
  //     rho = boxSize*sqrt(3f32)/4;
  //     for( j=0; j<numCoefficients; j++ ) {
  //       MnmVectorA[j] = Mnm[jb][j];
  //     }
  //     rotation(MnmVectorA,MnmVectorB,Dnm[je]);
  //     for( j=0; j<numExpansions; j++ ) {
  //       for( k=0; k<=j; k++ ) {
  //         jk = j*j+j+k;
  //         jks = j*(j+1)/2+k;
  //         MnmScalar = 0;
  //         for( n=0; n<=j-abs(k); n++ ) {
  //           jnk = (j-n)*(j-n)+j-n+k;
  //           jnks = (j-n)*(j-n+1)/2+k;
  //           nm = n*n+n;
  //           cnm = pow(-1f32,n)*anm[nm]*anm[jnk]/anm[jk]*pow(rho,n)*Ynm[nm];
  //           MnmScalar += MnmVectorB[jnks]*cnm;
  //         }
  //         MnmVectorA[jks] = MnmScalar;
  //       }
  //     }
  //     rotation(MnmVectorA,MnmVectorB,Dnm[je+numRelativeBox]);
  //     for( j=0; j<numCoefficients; j++ ) {
  //       Mnm[ib][j] += MnmVectorB[j];
  //     }
  //   }
  // }

  // // m2l
  //  pub fn m2l(numBoxIndex: i32, numLevel: i32) {
  // let i,j,ii,ib,ix,iy,iz,ij,jj,jb,jx,jy,jz,je,k,jk,jks,n,nk,nks,jkn,jnk; // i32
  //   vec3<int> boxIndex3D;
  //   vec3<double> dist;
  //   double boxSize,rho,rhoj,rhojk,rhojn;
  //   std::complex<double> LnmVectorA[numCoefficients],MnmVectorA[numCoefficients];
  //   std::complex<double> LnmVectorB[numCoefficients],MnmVectorB[numCoefficients];
  //   std::complex<double> cnm,LnmScalar;

  //   boxSize = rootBoxSize/(1 << numLevel);
  //   if( numLevel == 2 ) {
  //     for( i=0; i<numBoxIndex; i++ ) {
  //       for( j=0; j<numCoefficients; j++ ) {
  //         Lnm[i][j] = 0;
  //       }
  //     }
  //   }
  //   for ii in (0..numBoxIndex) {
  //     ib = ii+levelOffset[numLevel-1];
  //     tree.unmorton(boxIndexFull[ib],boxIndex3D);
  //     ix = boxIndex3D.x;
  //     iy = boxIndex3D.y;
  //     iz = boxIndex3D.z;
  //     for( ij=0; ij<numInteraction[ii]; ij++ ) {
  //       jj = interactionList[ii][ij];
  //       jb = jj+levelOffset[numLevel-1];
  //       for( j=0; j<numCoefficients; j++ ) {
  //         MnmVectorB[j] = Mnm[jb][j];
  //       }
  //       tree.unmorton(boxIndexFull[jb],boxIndex3D);
  //       jx = boxIndex3D.x;
  //       jy = boxIndex3D.y;
  //       jz = boxIndex3D.z;
  //       dist.x = (ix-jx)*boxSize;
  //       dist.y = (iy-jy)*boxSize;
  //       dist.z = (iz-jz)*boxSize;
  //       boxIndex3D.x = (ix-jx)+3;
  //       boxIndex3D.y = (iy-jy)+3;
  //       boxIndex3D.z = (iz-jz)+3;
  //       tree.morton1(boxIndex3D,je,3);
  //       rho = sqrt(dist.x*dist.x+dist.y*dist.y+dist.z*dist.z)+eps;
  //       rotation(MnmVectorB,MnmVectorA,Dnm[je]);
  //       rhoj = 1;
  //       for( j=0; j<numExpansions; j++ ) {
  //         rhojk = rhoj;
  //         rhoj *= rho;
  //         for( k=0; k<=j; k++ ) {
  //           jk = j*j+j+k;
  //           jks = j*(j+1)/2+k;
  //           LnmScalar = 0;
  //           rhojn = rhojk;
  //           rhojk *= rho;
  //           for( n=abs(k); n<numExpansions; n++ ) {
  //             rhojn *= rho;
  //             nk = n*n+n+k;
  //             nks = n*(n+1)/2+k;
  //             jkn = jk*numExpansion2+nk;
  //             jnk = (j+n)*(j+n)+j+n;
  //             cnm = Anm[jkn]/rhojn*Ynm[jnk];
  //             LnmScalar += MnmVectorA[nks]*cnm;
  //           }
  //           LnmVectorA[jks] = LnmScalar;
  //         }
  //       }
  //       rotation(LnmVectorA,LnmVectorB,Dnm[je+numRelativeBox]);
  //       for( j=0; j<numCoefficients; j++ ) {
  //         Lnm[ii][j] += LnmVectorB[j];
  //       }
  //     }
  //   }
  //   for jj in (0..numBoxIndex) {
  //     jb = jj+levelOffset[numLevel-1];
  //     for( j=0; j<numCoefficients; j++ ) {
  //       Mnm[jb][j] = 0;
  //     }
  //   }
  // }

  // // l2l
  //  pub fn l2l(numBoxIndex: i32, numLevel: i32) {
  // let numBoxIndexOld,ii,ib,i,nfip,nfic,je,j,k,jk,jks,n,jnk,nk,nks; // i32
  //   vec3<int> boxIndex3D;
  //   double boxSize,rho;
  //   std::complex<double> cnm,LnmScalar;
  //   std::complex<double> LnmVectorA[numCoefficients],LnmVectorB[numCoefficients];

  //   boxSize = rootBoxSize/(1 << numLevel);
  //   numBoxIndexOld = numBoxIndex;
  //   if( numBoxIndexOld < 8 ) numBoxIndexOld = 8;
  //   for( ii=0; ii<numBoxIndexOld; ii++ ) {
  //     for( i=0; i<numCoefficients; i++ ) {
  //       LnmOld[ii][i] = Lnm[ii][i];
  //     }
  //   }

  // let nbc,neo[numBoxIndexFull]; // i32
  //   nbc = -1;
  //   numBoxIndexOld = 0;
  //   for( i=0; i<numBoxIndexFull; i++ ) neo[i] = -1;
  //   for ii in (0..numBoxIndex) {
  //     ib = ii+levelOffset[numLevel-1];
  //     if( nbc != boxIndexFull[ib]/8 ) {
  //       nbc = boxIndexFull[ib]/8;
  //       neo[nbc] = numBoxIndexOld;
  //       numBoxIndexOld++;
  //     }
  //   }

  //   for ii in (0..numBoxIndex) {
  //     ib = ii+levelOffset[numLevel-1];
  //     nfip = boxIndexFull[ib]/8;
  //     nfic = boxIndexFull[ib]%8;
  //     tree.unmorton(nfic,boxIndex3D);
  //     boxIndex3D.x = boxIndex3D.x*2+2;
  //     boxIndex3D.y = boxIndex3D.y*2+2;
  //     boxIndex3D.z = boxIndex3D.z*2+2;
  //     tree.morton1(boxIndex3D,je,3);
  //     rho = boxSize*sqrt(3f32)/2;
  //     ib = neo[nfip];
  //     for( i=0; i<numCoefficients; i++ ) {
  //       LnmVectorA[i] = LnmOld[ib][i];
  //     }
  //     rotation(LnmVectorA,LnmVectorB,Dnm[je]);
  //     for( j=0; j<numExpansions; j++ ) {
  //       for( k=0; k<=j; k++ ) {
  //         jk = j*j+j+k;
  //         jks = j*(j+1)/2+k;
  //         LnmScalar = 0;
  //         for( n=j; n<numExpansions; n++ ) {
  //           jnk = (n-j)*(n-j)+n-j;
  //           nk = n*n+n+k;
  //           nks = n*(n+1)/2+k;
  //           cnm = anm[jnk]*anm[jk]/anm[nk]*pow(rho,n-j)*Ynm[jnk];
  //           LnmScalar += LnmVectorB[nks]*cnm;
  //         }
  //         LnmVectorA[jks] = LnmScalar;
  //       }
  //     }
  //     rotation(LnmVectorA,LnmVectorB,Dnm[je+numRelativeBox]);
  //     for( i=0; i<numCoefficients; i++ ) {
  //       Lnm[ii][i] = LnmVectorB[i];
  //     }
  //   }
  // }

  // // l2p
  //  pub fn l2p(numBoxIndex: i32) {
  // let ii,i,n,nm,nms,m; // i32
  //   vec3<int> boxIndex3D;
  //   vec3<float> boxCenter;
  //   vec3<double> accel,dist;
  //   double boxSize,r,theta,phi,accelR,accelTheta,accelPhi;
  //   double xx,yy,s2,fact,pn,p,p1,p2,rn;
  //   double YnmReal[numExpansion2],YnmRealTheta[numExpansion2];
  //   std::complex<double> LnmVector[numCoefficients];
  //   std::complex<double> rr,rtheta,rphi,I(0f32,1f32),eim;

  //   boxSize = rootBoxSize/(1 << maxLevel);
  //   for ii in (0..numBoxIndex) {
  //     tree.unmorton(boxIndexFull[ii],boxIndex3D);
  //     boxCenter.x = boxMin.x+(boxIndex3D.x+0.5)*boxSize;
  //     boxCenter.y = boxMin.y+(boxIndex3D.y+0.5)*boxSize;
  //     boxCenter.z = boxMin.z+(boxIndex3D.z+0.5)*boxSize;
  //     for( i=0; i<numCoefficients; i++ ) LnmVector[i] = Lnm[ii][i];
  //     for( i=particleOffset[0][ii]; i<=particleOffset[1][ii]; i++ ) {
  //       dist.x = bodyPos[i].x-boxCenter.x;
  //       dist.y = bodyPos[i].y-boxCenter.y;
  //       dist.z = bodyPos[i].z-boxCenter.z;
  //       cart2sph(r,theta,phi,dist.x,dist.y,dist.z);
  //       xx = cos(theta);
  //       yy = sin(theta);
  //       s2 = sqrt((1-xx)*(1+xx));
  //       fact = 1;
  //       pn = 1;
  //       for( m=0; m<numExpansions; m++ ) {
  //         p = pn;
  //         nm = m*m+2*m;
  //         YnmReal[nm] = factorial[nm]*p;
  //         p1 = p;
  //         p = xx*(2*m+1)*p;
  //         YnmRealTheta[nm] = factorial[nm]*(p-(m+1)*xx*p1)/yy;
  //         for( n=m+1; n<numExpansions; n++ ) {
  //           nm = n*n+n+m;
  //           YnmReal[nm] = factorial[nm]*p;
  //           p2 = p1;
  //           p1 = p;
  //           p = (xx*(2*n+1)*p1-(n+m)*p2)/(n-m+1);
  //           YnmRealTheta[nm] = factorial[nm]*((n-m+1)*p-(n+1)*xx*p1)/yy;
  //         }
  //         pn = -pn*fact*s2;
  //         fact += 2;
  //       }
  //       accelR = 0;
  //       accelTheta = 0;
  //       accelPhi = 0;
  //       rn = 1;
  //       for( n=0; n<numExpansions; n++ ) {
  //         nm = n*n+n;
  //         nms = n*(n+1)/2;
  //         rr = n*rn/r*YnmReal[nm];
  //         rtheta = rn*YnmRealTheta[nm];
  //         accelR += real(rr*LnmVector[nms]);
  //         accelTheta += real(rtheta*LnmVector[nms]);
  //         for( m=1; m<=n; m++ ) {
  //           nm = n*n+n+m;
  //           nms = n*(n+1)/2+m;
  //           eim = exp(m*phi*I);
  //           rr = n*rn/r*YnmReal[nm]*eim;
  //           rtheta = rn*YnmRealTheta[nm]*eim;
  //           rphi = m*rn*YnmReal[nm]*eim*I;
  //           accelR += 2*real(rr*LnmVector[nms]);
  //           accelTheta += 2*real(rtheta*LnmVector[nms]);
  //           accelPhi += 2*real(rphi*LnmVector[nms]);
  //         }
  //         rn *= r;
  //       }
  //       accel.x = sin(theta)*cos(phi)*accelR+cos(theta)*cos(phi)/r*accelTheta-sin(phi)/r/sin(theta)*accelPhi;
  //       accel.y = sin(theta)*sin(phi)*accelR+cos(theta)*sin(phi)/r*accelTheta+cos(phi)/r/sin(theta)*accelPhi;
  //       accel.z = cos(theta)*accelR-sin(theta)/r*accelTheta;
  //       bodyAccel[i].x += inv4PI*accel.x;
  //       bodyAccel[i].y += inv4PI*accel.y;
  //       bodyAccel[i].z += inv4PI*accel.z;
  //     }
  //   }
  // }

  // // m2p
  //  pub fn m2p(numBoxIndex: i32, numLevel: i32) {
  // let ii,i,ij,jj,jb,j,n,nm,nms,m; // i32
  //   vec3<int> boxIndex3D;
  //   vec3<float> boxCenter;
  //   vec3<double> accel,dist;
  //   double boxSize,r,theta,phi,rn,accelR,accelTheta,accelPhi;
  //   double xx,yy,s2,fact,pn,p,p1,p2;
  //   double YnmReal[numExpansion2],YnmRealTheta[numExpansion2];
  //   std::complex<double> MnmVector[numCoefficients];
  //   std::complex<double> rr,rtheta,rphi,I(0f32,1f32),eim;

  //   boxSize = rootBoxSize/(1 << numLevel);
  //   for ii in (0..numBoxIndex) {
  //     for( i=particleOffset[0][ii]; i<=particleOffset[1][ii]; i++ ) {
  //       for( ij=0; ij<numInteraction[ii]; ij++ ) {
  //         jj = interactionList[ii][ij];
  //         jb = jj+levelOffset[numLevel-1];
  //         for( j=0; j<numCoefficients; j++ ) MnmVector[j] = Mnm[jb][j];
  //         tree.unmorton(boxIndexFull[jb],boxIndex3D);
  //         boxCenter.x = boxMin.x+(boxIndex3D.x+0.5)*boxSize;
  //         boxCenter.y = boxMin.y+(boxIndex3D.y+0.5)*boxSize;
  //         boxCenter.z = boxMin.z+(boxIndex3D.z+0.5)*boxSize;
  //         dist.x = bodyPos[i].x-boxCenter.x;
  //         dist.y = bodyPos[i].y-boxCenter.y;
  //         dist.z = bodyPos[i].z-boxCenter.z;
  //         cart2sph(r,theta,phi,dist.x,dist.y,dist.z);
  //         xx = cos(theta);
  //         yy = sin(theta);
  //         s2 = sqrt((1-xx)*(1+xx));
  //         fact = 1;
  //         pn = 1;
  //         for( m=0; m<numExpansions; m++ ) {
  //           p = pn;
  //           nm = m*m+2*m;
  //           YnmReal[nm] = factorial[nm]*p;
  //           p1 = p;
  //           p = xx*(2*m+1)*p;
  //           YnmRealTheta[nm] = factorial[nm]*(p-(m+1)*xx*p1)/yy;
  //           for( n=m+1; n<numExpansions; n++ ) {
  //             nm = n*n+n+m;
  //             YnmReal[nm] = factorial[nm]*p;
  //             p2 = p1;
  //             p1 = p;
  //             p = (xx*(2*n+1)*p1-(n+m)*p2)/(n-m+1);
  //             YnmRealTheta[nm] = factorial[nm]*((n-m+1)*p-(n+1)*xx*p1)/yy;
  //           }
  //           pn = -pn*fact*s2;
  //           fact += 2;
  //         }
  //         accelR = 0;
  //         accelTheta = 0;
  //         accelPhi = 0;
  //         rn = 1/r;
  //         for( n=0; n<numExpansions; n++ ) {
  //           rn /= r;
  //           nm = n*n+n;
  //           nms = n*(n+1)/2;
  //           rr = -(n+1)*rn*YnmReal[nm];
  //           rtheta = rn*r*YnmRealTheta[nm];
  //           accelR += real(rr*MnmVector[nms]);
  //           accelTheta += real(rtheta*MnmVector[nms]);
  //           for( m=1; m<=n; m++ ) {
  //             nm = n*n+n+m;
  //             nms = n*(n+1)/2+m;
  //             eim = exp(m*phi*I);
  //             rr = -(n+1)*rn*YnmReal[nm]*eim;
  //             rtheta = rn*r*YnmRealTheta[nm]*eim;
  //             rphi = m*rn*r*YnmReal[nm]*eim*I;
  //             accelR += 2*real(rr*MnmVector[nms]);
  //             accelTheta += 2*real(rtheta*MnmVector[nms]);
  //             accelPhi += 2*real(rphi*MnmVector[nms]);
  //           }
  //         }
  //         accel.x = sin(theta)*cos(phi)*accelR+cos(theta)*cos(phi)/r*accelTheta-sin(phi)/r/sin(theta)*accelPhi;
  //         accel.y = sin(theta)*sin(phi)*accelR+cos(theta)*sin(phi)/r*accelTheta+cos(phi)/r/sin(theta)*accelPhi;
  //         accel.z = cos(theta)*accelR-sin(theta)/r*accelTheta;
  //         bodyAccel[i].x += inv4PI*accel.x;
  //         bodyAccel[i].y += inv4PI*accel.y;
  //         bodyAccel[i].z += inv4PI*accel.z;
  //       }
  //     }
  //   }
  // }

  pub fn frog_leap(&mut self, dt: f32) {
    let half_dt = dt * 0.5f32;
    for i in 0..self.len {
      for k in 0..3 {
        self.speeds[i * 3 + k] += self.accelerations[i * 3 + k] * half_dt;
        self.positions[i * 3 + k] += self.speeds[i * 3 + k] * dt;
      }
    }
  }

  pub fn simulate(
    &mut self,
    g: f32,
    softening: f32,
    collisions: bool,
    threshold: f32,
    escape_distance: f32,
  ) -> usize {
    // self.direct(g);
    let treeOrFMM = 0; // or 1

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
    let boxOffsetStart = vec![0; numBoxIndexLeaf];
    let boxOffsetEnd = vec![0; numBoxIndexLeaf];

    let Lnm = (0..numBoxIndexLeaf)
      .map(|_| vec![Complex::new(0f32, 0f32); numCoefficients])
      .collect::<Vec<_>>();
    let LnmOld = (0..numBoxIndexLeaf)
      .map(|_| vec![Complex::new(0f32, 0f32); numCoefficients])
      .collect::<Vec<_>>();
    let mut Mnm = (0..numBoxIndexTotal)
      .map(|_| vec![Complex::new(0f32, 0f32); numCoefficients])
      .collect::<Vec<_>>();

    let mut numLevel = maxLevel;

    levelOffset[numLevel - 1] = 0;
    self.morton(maxLevel, rootBoxSize, boxMin);
    let numBoxIndex = self.getBoxData(
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
      g,
      softening,
      numBoxIndex,
      &numInteraction,
      &interactionList,
      &particleOffset,
    );

    numLevel = maxLevel;

    // P2M
    self.p2m(
      numBoxIndex,
      rootBoxSize,
      &boxMin,
      maxLevel,
      &boxIndexFull,
      &particleOffset,
      &mut Mnm,
    );

    //   if(maxLevel > 2) {
    //     for( numLevel=maxLevel-1; numLevel>=2; numLevel-- ) {
    //       if( treeOrFMM == 0 ) {
    // // M2P at lower levels
    //         getInteractionList(numBoxIndex,numLevel+1,2);
    //         self.m2p(numBoxIndex,numLevel+1);
    //       }

    // // M2M
    //       let numBoxIndexOld = numBoxIndex;
    //       getBoxDataOfParent(numBoxIndex,numLevel,treeOrFMM);
    //       self.m2m(numBoxIndex,numBoxIndexOld,numLevel);
    //     }
    //     numLevel = 2;

    //   } else {
    //     getBoxIndexMask(numBoxIndex,numLevel);

    //   }

    //   if( treeOrFMM == 0 ) {

    // // M2P at level 2
    //     getInteractionList(numBoxIndex,numLevel,1);
    //     self.m2p(numBoxIndex,numLevel);

    //   } else {
    // // M2L at level 2
    //     getInteractionList(numBoxIndex,numLevel,1);
    //     self.m2l(numBoxIndex,numLevel);

    // // L2L
    //     if( maxLevel > 2 ) {
    //       for numLevel in (3..maxLevel+1)
    //         numBoxIndex = levelOffset[numLevel-2]-levelOffset[numLevel-1];
    //         self.l2l(numBoxIndex,numLevel);
    //         getBoxIndexMask(numBoxIndex,numLevel);

    // // M2L at lower levels
    //         getInteractionList(numBoxIndex,numLevel,2);
    //         self.m2l(numBoxIndex,numLevel);
    //       }
    //       numLevel = maxLevel;
    //     }
    // // L2P
    //     self.l2p(numBoxIndex);
    //   }
    self.unsortParticles(permutation);
    self.len
  }

  pub fn frog_drop(&mut self, dt: f32) {
    let half_dt = dt * 0.5f32;
    for i in 0..self.len {
      for k in 0..3 {
        self.speeds[i * 3 + k] += self.accelerations[i * 3 + k] * half_dt;
      }
    }
  }
}
