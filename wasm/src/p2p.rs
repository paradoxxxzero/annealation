use crate::gravity::Gravity;
use crate::{Orb, Params};
use js_sys::Array;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct P2PRustGravity {
    params: Params,
    positions: Vec<f32>,
    speeds: Vec<f32>,
    accelerations: Vec<f32>,
    masses: Vec<f32>,
    temperatures: Vec<f32>,
    len: usize,
    alloc_len: usize,
}

impl Gravity for P2PRustGravity {
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
    fn _masses(&mut self) -> &mut Vec<f32> {
        &mut self.masses
    }
    fn _temperatures(&mut self) -> &mut Vec<f32> {
        &mut self.temperatures
    }
}

#[wasm_bindgen]
impl P2PRustGravity {
    #[wasm_bindgen(constructor)]
    pub fn new(
        orbs: &Array,
        params: &JsValue,
        alloc_len: usize,
    ) -> Result<P2PRustGravity, JsValue> {
        console_error_panic_hook::set_once();
        let params = params
            .into_serde()
            .map_err(|e| JsValue::from(e.to_string()))?;
        let len = orbs.length() as usize;
        let mut positions = vec![0f32; 3 * alloc_len];
        let mut speeds = vec![0f32; 3 * alloc_len];
        let accelerations = vec![0f32; 3 * alloc_len];
        let mut masses = vec![0f32; alloc_len];
        let mut temperatures = vec![0f32; alloc_len];

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

        Ok(P2PRustGravity {
            params,
            positions,
            speeds,
            accelerations,
            masses,
            temperatures,
            len,
            alloc_len,
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
        self.leap();
    }
    pub fn simulate(&mut self) -> usize {
        let gravitational_constant = self.params.gravitationalConstant;
        let softening = self.params.softening;
        let collisions = self.params.collisions;
        let threshold = self.params.collisionThreshold;

        let mut collided = Vec::new();
        let softening2 = softening * softening;
        let threshold2 = threshold * threshold;
        let mut a = [0f32, 0f32, 0f32];

        for i in 0..self.len {
            let i3 = i * 3;
            a.fill(0f32);
            for j in 0..self.len {
                if i == j {
                    continue;
                }
                let j3 = j * 3;
                let u = [
                    self.positions[j3] - self.positions[i3],
                    self.positions[j3 + 1] - self.positions[i3 + 1],
                    self.positions[j3 + 2] - self.positions[i3 + 2],
                ];
                let distance2 = u[0] * u[0] + u[1] * u[1] + u[2] * u[2];
                let distance = (distance2 + softening2).sqrt();
                if collisions {
                    if distance2 < threshold2 {
                        collided.push((i, j));
                    }
                }

                let fact = self.masses[j] / (distance * distance * distance);

                a[0] += u[0] * fact;
                a[1] += u[1] * fact;
                a[2] += u[2] * fact;
            }
            for k in 0..3 {
                self.accelerations[i3 + k] = a[k] * gravitational_constant;
            }
        }

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
}
