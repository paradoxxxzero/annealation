use crate::{Orb, Params};
use js_sys::Array;
use wasm_bindgen::prelude::*;

pub trait Gravity {
    fn get_len(&self) -> usize;
    fn get_params(&self) -> &Params;
    fn get_accelerations(&mut self) -> &mut Vec<f32>;
    fn get_speeds(&mut self) -> &mut Vec<f32>;
    fn get_positions(&mut self) -> &mut Vec<f32>;
    fn get_masses(&mut self) -> &mut Vec<f32>;
    fn get_temperatures(&mut self) -> &mut Vec<f32>;

    fn leap(&mut self) {
        let dt = self.get_params().simulationSpeed;
        let half_dt = dt * 0.5f32;
        for i in 0..self.get_len() {
            for k in 0..3 {
                self.get_speeds()[i * 3 + k] += self.get_accelerations()[i * 3 + k] * half_dt;
                self.get_positions()[i * 3 + k] += self.get_speeds()[i * 3 + k] * dt;
            }
        }
    }
    fn drop(&mut self) {
        let dt = self.get_params().simulationSpeed;
        let half_dt = dt * 0.5f32;
        for i in 0..self.get_len() {
            for k in 0..3 {
                self.get_speeds()[i * 3 + k] += self.get_accelerations()[i * 3 + k] * half_dt;
            }
        }
    }

    fn solve_collisions(&mut self, collided: &Vec<(usize, usize)>) {
        for &item in collided.iter() {
            let (i, j) = item;
            let mass_ratio = 1. / (self.get_masses()[i] + self.get_masses()[j]);
            for k in 0..3 {
                self.get_positions()[i * 3 + k] = mass_ratio
                    * (self.get_positions()[i * 3 + k] * self.get_masses()[i]
                        + self.get_positions()[j * 3 + k] * self.get_masses()[j]);
                self.get_speeds()[i * 3 + k] = mass_ratio
                    * (self.get_speeds()[i * 3 + k] * self.get_masses()[i]
                        + self.get_speeds()[j * 3 + k] * self.get_masses()[j]);
            }
            self.get_temperatures()[i] = mass_ratio
                * (self.get_temperatures()[i] * self.get_masses()[i]
                    + self.get_temperatures()[j] * self.get_masses()[j]);
            self.get_masses()[i] += self.get_masses()[j];
        }
    }

    fn solve_escapes(&mut self, skip: &mut Vec<usize>) {
        let escape_distance = self.get_params().escapeDistance;
        let escape_distance2 = escape_distance * escape_distance;
        for i in 0..self.get_len() {
            if self.get_positions()[i * 3] * self.get_positions()[i * 3]
                + self.get_positions()[i * 3 + 1] * self.get_positions()[i * 3 + 1]
                + self.get_positions()[i * 3 + 2] * self.get_positions()[i * 3 + 2]
                > escape_distance2
            {
                skip.push(i);
            }
        }
    }

    fn crunch_orbs(&mut self, skip: &Vec<usize>) -> usize {
        let mut i = 0;
        let mut shift = 0;
        while i + shift < self.get_len() {
            if skip.contains(&(i + shift)) {
                shift += 1;
                continue;
            }
            if shift == 0 {
                i += 1;
                continue;
            }
            for k in 0..3 {
                self.get_positions()[i * 3 + k] = self.get_positions()[(i + shift) * 3 + k];
                self.get_speeds()[i * 3 + k] = self.get_speeds()[(i + shift) * 3 + k];
                self.get_accelerations()[i * 3 + k] = self.get_accelerations()[(i + shift) * 3 + k];
            }
            self.get_temperatures()[i] = self.get_temperatures()[i + shift];
            self.get_masses()[i] = self.get_masses()[i + shift];
            i += 1;
        }
        self.get_len() - shift
    }
}

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

impl Gravity for RustNoGravity {
    fn get_len(&self) -> usize {
        self.len
    }
    fn get_params(&self) -> &Params {
        &self.params
    }
    fn get_accelerations(&mut self) -> &mut Vec<f32> {
        &mut self.accelerations
    }
    fn get_speeds(&mut self) -> &mut Vec<f32> {
        &mut self.speeds
    }
    fn get_positions(&mut self) -> &mut Vec<f32> {
        &mut self.positions
    }
    fn get_masses(&mut self) -> &mut Vec<f32> {
        &mut self.masses
    }
    fn get_temperatures(&mut self) -> &mut Vec<f32> {
        &mut self.temperatures
    }
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
        let mut collided: Vec<(usize, usize)> = Vec::new();
        let mut skip = Vec::new();

        self.solve_escapes(&mut skip);
        if collided.len() > 0 {
            self.solve_collisions(&collided)
        }
        if skip.len() > 0 {
            self.len = self.crunch_orbs(&skip)
        }
        self.len
    }

    pub fn frog_drop(&mut self) {
        self.drop();
    }
}
