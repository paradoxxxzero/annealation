use crate::{Orb, Params};
use js_sys::Array;
use wasm_bindgen::prelude::*;

pub trait Gravity {
    fn _len(&self) -> usize;
    fn _len_set(&mut self, len: usize);
    fn _params(&self) -> &Params;
    fn _accelerations(&mut self) -> &mut Vec<f32>;
    fn _speeds(&mut self) -> &mut Vec<f32>;
    fn _positions(&mut self) -> &mut Vec<f32>;
    fn _masses(&mut self) -> &mut Vec<f32>;
    fn _temperatures(&mut self) -> &mut Vec<f32>;

    fn leap(&mut self) {
        let dt = self._params().simulationSpeed;
        let half_dt = dt * 0.5f32;
        for i in 0..self._len() {
            for k in 0..3 {
                self._speeds()[i * 3 + k] += self._accelerations()[i * 3 + k] * half_dt;
                self._positions()[i * 3 + k] += self._speeds()[i * 3 + k] * dt;
            }
        }
    }

    fn drop(&mut self) {
        let dt = self._params().simulationSpeed;
        let half_dt = dt * 0.5f32;
        for i in 0..self._len() {
            for k in 0..3 {
                self._speeds()[i * 3 + k] += self._accelerations()[i * 3 + k] * half_dt;
            }
        }
    }

    fn aggregate_collisions(&mut self, collided: Vec<(usize, usize)>) -> Vec<Vec<usize>> {
        let mut aggregated: Vec<Vec<usize>> = Vec::new();
        for (i, j) in collided {
            let mut isNew = true;
            for cell in &mut aggregated {
                let isIin = cell.contains(&i);
                let isJin = cell.contains(&j);
                if isIin || isJin {
                    isNew = false
                }
                if isIin != isJin {
                    let newI = if isIin { j } else { i };
                    if newI > cell[0] {
                        cell.push(newI);
                    } else {
                        cell.insert(0, newI);
                    }
                    break;
                }
            }
            if isNew {
                aggregated.push(if i > j { vec![j, i] } else { vec![i, j] });
            }
        }
        return aggregated;
    }

    fn solve_collisions(&mut self, collided: Vec<Vec<usize>>) {
        for item in collided.iter() {
            let i = item[0];
            for j in &item[1..] {
                let mass_ratio = 1. / (self._masses()[i] + self._masses()[*j]);
                for k in 0..3 {
                    self._positions()[i * 3 + k] = mass_ratio
                        * (self._positions()[i * 3 + k] * self._masses()[i]
                            + self._positions()[j * 3 + k] * self._masses()[*j]);
                    self._speeds()[i * 3 + k] = mass_ratio
                        * (self._speeds()[i * 3 + k] * self._masses()[i]
                            + self._speeds()[j * 3 + k] * self._masses()[*j]);
                }
                self._temperatures()[i] = mass_ratio
                    * (self._temperatures()[i] * self._masses()[i]
                        + self._temperatures()[*j] * self._masses()[*j]);
                self._masses()[i] += self._masses()[*j];
            }
        }
    }

    fn solve_escapes(&mut self) -> Vec<usize> {
        let mut skip = Vec::new();
        let escape_distance = self._params().escapeDistance;
        if escape_distance < 0.01 {
            return skip;
        }
        let escape_distance2 = escape_distance * escape_distance;
        for i in 0..self._len() {
            if self._positions()[i * 3] * self._positions()[i * 3]
                + self._positions()[i * 3 + 1] * self._positions()[i * 3 + 1]
                + self._positions()[i * 3 + 2] * self._positions()[i * 3 + 2]
                > escape_distance2
            {
                skip.push(i);
            }
        }

        skip
    }

    fn crunch_orbs(&mut self, skip: &Vec<usize>) -> usize {
        let mut i = 0;
        let mut shift = 0;
        while i + shift < self._len() {
            if skip.contains(&(i + shift)) {
                shift += 1;
                continue;
            }
            if shift == 0 {
                i += 1;
                continue;
            }
            for k in 0..3 {
                self._positions()[i * 3 + k] = self._positions()[(i + shift) * 3 + k];
                self._speeds()[i * 3 + k] = self._speeds()[(i + shift) * 3 + k];
                self._accelerations()[i * 3 + k] = self._accelerations()[(i + shift) * 3 + k];
            }
            self._temperatures()[i] = self._temperatures()[i + shift];
            self._masses()[i] = self._masses()[i + shift];
            i += 1;
        }
        self._len() - shift
    }

    fn solve(&mut self, collided: Vec<(usize, usize)>) -> usize {
        let mut skip = self.solve_escapes();
        if collided.len() > 0 {
            let collided: Vec<Vec<usize>> = self.aggregate_collisions(collided);
            for cell in &collided {
                for item in &cell[1..] {
                    skip.push(*item);
                }
            }
            self.solve_collisions(collided);
        }
        if skip.len() > 0 {
            let new_len = self.crunch_orbs(&skip);
            self._len_set(new_len);
        }
        self._len()
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
    fn _len(&self) -> usize {
        self.len
    }
    fn _len_set(&mut self, len: usize) {
        self.len = len;
    }
    fn _params(&self) -> &Params {
        &self.params
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
    fn _masses(&mut self) -> &mut Vec<f32> {
        &mut self.masses
    }
    fn _temperatures(&mut self) -> &mut Vec<f32> {
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
        let collided: Vec<(usize, usize)> = Vec::new();

        self.solve(collided)
    }

    pub fn frog_drop(&mut self) {
        self.drop();
    }
}
