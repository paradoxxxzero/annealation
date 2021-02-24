use crate::utils::init_hook;
use futures_channel::oneshot;
use js_sys::Promise;
use rayon::prelude::*;
use wasm_bindgen::prelude::*;
mod pool;

#[wasm_bindgen]
pub struct RenderPromise {
    promise: Promise,
}

#[wasm_bindgen]
pub struct P2PRustThreadGravity {
    positions: Vec<f32>,
    speeds: Vec<f32>,
    accelerations: Vec<f32>,
    masses: Vec<f32>,
    temperatures: Vec<f32>,
    len: usize,
}

#[wasm_bindgen]
impl P2PRustThreadGravity {
    pub fn new(len: usize) -> P2PRustThreadGravity {
        init_hook();
        let positions = vec![0f32; 3 * len];
        let speeds = vec![0f32; 3 * len];
        let accelerations = vec![0f32; 3 * len];
        let masses = vec![0f32; len];
        let temperatures = vec![0f32; len];

        P2PRustThreadGravity {
            positions,
            speeds,
            accelerations,
            masses,
            temperatures,
            len,
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
        pool: &pool::WorkerPool,
        concurrency: usize,
    ) -> usize {
        // let mut collided = Vec::new();
        // let mut skip = Vec::new();
        let softening2 = softening * softening;
        // let threshold2 = threshold * threshold;
        let mut accelerations = vec![0f32; 3 * self.len];

        // let thread_pool = rayon::ThreadPoolBuilder::new()
        //     .num_threads(concurrency)
        //     .spawn_handler(|thread| Ok(pool.run(|| thread.run()).unwrap()))
        //     .build()
        //     .unwrap();

        // thread_pool.install(|| {
        //     accelerations
        //         .par_chunks_mut(3)
        //         .enumerate()
        //         .for_each(|(i, chunk)| {
        //             for j in 0..self.len {
        //                 if j == i {
        //                     continue;
        //                 }
        //                 let ux = self.positions[j * 3] - self.positions[i * 3];
        //                 let uy = self.positions[j * 3 + 1] - self.positions[i * 3 + 1];
        //                 let uz = self.positions[j * 3 + 2] - self.positions[i * 3 + 2];
        //                 let distance2 = ux * ux + uy * uy + uz * uz;
        //                 let distance = (distance2 + softening2).sqrt();
        //                 // if collisions {
        //                 //     if distance2 < threshold2 {
        //                 //         skip.push(j);
        //                 //         collided.push((i, j));
        //                 //     }
        //                 // }

        //                 let fact = self.masses[j] / (distance * distance * distance);

        //                 chunk[0] += ux * fact;
        //                 chunk[1] += uy * fact;
        //                 chunk[2] += uz * fact;
        //             }
        //         });
        // });
        for i in 0..self.len {
            self.accelerations[i] = accelerations[i];
        }
        self.len
        // for i in 0..self.len {
        //     if self.positions[i * 3] * self.positions[i * 3]
        //         + self.positions[i * 3 + 1] * self.positions[i * 3 + 1]
        //         + self.positions[i * 3 + 2] * self.positions[i * 3 + 2]
        //         > escape_distance * escape_distance
        //     {
        //         skip.push(i);
        //     }
        // }
        // if skip.len() > 0 {
        //     for &item in collided.iter() {
        //         let (i, j) = item;
        //         let mass_ratio = 1. / (self.masses[i] + self.masses[j]);
        //         for k in 0..3 {
        //             self.positions[i * 3 + k] = mass_ratio
        //                 * (self.positions[i * 3 + k] * self.masses[i]
        //                     + self.positions[j * 3 + k] * self.masses[j]);
        //             self.speeds[i * 3 + k] = mass_ratio
        //                 * (self.speeds[i * 3 + k] * self.masses[i]
        //                     + self.speeds[j * 3 + k] * self.masses[j]);
        //         }
        //         self.temperatures[i] = mass_ratio
        //             * (self.temperatures[i] * self.masses[i]
        //                 + self.temperatures[j] * self.masses[j]);
        //         self.masses[i] += self.masses[j];
        //     }
        //     let mut i = 0;
        //     let mut shift = 0;
        //     while i + shift < self.len {
        //         if skip.contains(&(i + shift)) {
        //             shift += 1;
        //             continue;
        //         }
        //         if shift == 0 {
        //             i += 1;
        //             continue;
        //         }
        //         for k in 0..3 {
        //             self.positions[i * 3 + k] = self.positions[(i + shift) * 3 + k];
        //             self.speeds[i * 3 + k] = self.speeds[(i + shift) * 3 + k];
        //             self.accelerations[i * 3 + k] = self.accelerations[(i + shift) * 3 + k];
        //         }
        //         self.temperatures[i] = self.temperatures[(i + shift)];
        //         self.masses[i] = self.masses[i + shift];
        //         i += 1;
        //     }
        //     self.len -= shift;
        // }
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
