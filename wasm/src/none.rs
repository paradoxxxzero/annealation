use crate::{Orb, Params};
use js_sys::Array;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct RustNoGravity {
    params: Params,
    positions: Vec<f32>,
    speeds: Vec<f32>,
    accelerations: Vec<f32>,
    masses: Vec<f32>,
    temperatures: Vec<f32>,
    len: usize,
}

#[wasm_bindgen]
impl RustNoGravity {
    #[wasm_bindgen(constructor)]
    pub fn new(orbs: &Array, params: &JsValue) -> Result<RustNoGravity, JsValue> {
        console_error_panic_hook::set_once();
        let params = params
            .into_serde()
            .map_err(|e| JsValue::from(e.to_string()))?;
        let len = orbs.length() as usize;
        let mut positions = vec![0f32; 3 * len];
        let mut speeds = vec![0f32; 3 * len];
        let accelerations = vec![0f32; 3 * len];
        let mut masses = vec![0f32; len];
        let mut temperatures = vec![0f32; len];

        for (i, orb) in orbs.iter().enumerate() {
            let orb: Orb = orb.into_serde().map_err(|e| JsValue::from(e.to_string()))?;
            positions[i * 3] = orb.position.x;
            positions[i * 3 + 1] = orb.position.y;
            positions[i * 3 + 2] = orb.position.z;
            speeds[i * 3] = orb.speed.x;
            speeds[i * 3 + 1] = orb.speed.y;
            speeds[i * 3 + 2] = orb.speed.z;
            masses[i] = orb.mass;
            temperatures[i] = orb.temperature;
        }

        Ok(RustNoGravity {
            params,
            positions,
            speeds,
            accelerations,
            masses,
            temperatures,
            len,
        })
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

    pub fn frog_leap(&mut self) {
        let dt = self.params.simulationSpeed;
        let half_dt = dt * 0.5f32;
        for i in 0..self.len {
            for k in 0..3 {
                self.speeds[i * 3 + k] += self.accelerations[i * 3 + k] * half_dt;
                self.positions[i * 3 + k] += self.speeds[i * 3 + k] * dt;
            }
        }
    }

    pub fn simulate(&mut self) -> usize {
        let gravitationalConstant = self.params.gravitationalConstant;
        let softening = self.params.softening;
        let collisions = self.params.collisions;
        let threshold = self.params.collisionThreshold;
        let escapeDistance = self.params.escapeDistance;

        let mut collided = Vec::new();
        let mut skip = Vec::new();
        let softening2 = softening * softening;
        let threshold2 = threshold * threshold;

        for i in 0..self.len {
            if skip.contains(&i) {
                continue;
            }
            for k in 0..3 {
                self.accelerations[i * 3 + k] = 0f32;
            }
            for j in 0..i {
                let u = [
                    self.positions[j * 3] - self.positions[i * 3],
                    self.positions[j * 3 + 1] - self.positions[i * 3 + 1],
                    self.positions[j * 3 + 2] - self.positions[i * 3 + 2],
                ];
                let distance2 = u[0] * u[0] + u[1] * u[1] + u[2] * u[2];
                let distance = (distance2 + softening2).sqrt();
                if collisions {
                    if distance2 < threshold2 {
                        skip.push(j);
                        collided.push((i, j));
                    }
                }

                let fact = gravitationalConstant / (distance * distance * distance);
                let f1 = fact * self.masses[j];
                let f2 = -fact * self.masses[i];

                for k in 0..3 {
                    self.accelerations[i * 3 + k] += u[k] * f1;
                    self.accelerations[j * 3 + k] += u[k] * f2;
                }
            }
        }
        for i in 0..self.len {
            if self.positions[i * 3] * self.positions[i * 3]
                + self.positions[i * 3 + 1] * self.positions[i * 3 + 1]
                + self.positions[i * 3 + 2] * self.positions[i * 3 + 2]
                > escapeDistance * escapeDistance
            {
                skip.push(i);
            }
        }
        if skip.len() > 0 {
            for &item in collided.iter() {
                let (i, j) = item;
                let mass_ratio = 1. / (self.masses[i] + self.masses[j]);
                for k in 0..3 {
                    self.positions[i * 3 + k] = mass_ratio
                        * (self.positions[i * 3 + k] * self.masses[i]
                            + self.positions[j * 3 + k] * self.masses[j]);
                    self.speeds[i * 3 + k] = mass_ratio
                        * (self.speeds[i * 3 + k] * self.masses[i]
                            + self.speeds[j * 3 + k] * self.masses[j]);
                }
                self.temperatures[i] = mass_ratio
                    * (self.temperatures[i] * self.masses[i]
                        + self.temperatures[j] * self.masses[j]);
                self.masses[i] += self.masses[j];
            }
            let mut i = 0;
            let mut shift = 0;
            while i + shift < self.len {
                if skip.contains(&(i + shift)) {
                    shift += 1;
                    continue;
                }
                if shift == 0 {
                    i += 1;
                    continue;
                }
                for k in 0..3 {
                    self.positions[i * 3 + k] = self.positions[(i + shift) * 3 + k];
                    self.speeds[i * 3 + k] = self.speeds[(i + shift) * 3 + k];
                    self.accelerations[i * 3 + k] = self.accelerations[(i + shift) * 3 + k];
                }
                self.temperatures[i] = self.temperatures[(i + shift)];
                self.masses[i] = self.masses[i + shift];
                i += 1;
            }
            self.len -= shift;
        }
        self.len
    }

    pub fn frog_drop(&mut self) {
        let dt = self.params.simulationSpeed;
        let half_dt = dt * 0.5f32;
        for i in 0..self.len {
            for k in 0..3 {
                self.speeds[i * 3 + k] += self.accelerations[i * 3 + k] * half_dt;
            }
        }
    }
}
