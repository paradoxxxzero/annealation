use crate::gravity::Gravity;
use crate::projector::Projector;
use crate::Params;
use js_sys::Array;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct NoRustGravity {
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
}

impl Gravity for NoRustGravity {
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

#[wasm_bindgen]
impl NoRustGravity {
    #[wasm_bindgen(constructor)]
    pub fn new(orbs: &Array, params: &JsValue, alloc_len: usize) -> Result<NoRustGravity, JsValue> {
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
        ) = NoRustGravity::init(orbs, params, alloc_len)?;

        Ok(NoRustGravity {
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
        })
    }

    pub fn xyz_ptr(&self) -> *const f32 {
        self.xyz.as_ptr()
    }
    pub fn masses_ptr(&self) -> *const f32 {
        self.masses.as_ptr()
    }
    pub fn temperatures_ptr(&self) -> *const f32 {
        self.temperatures.as_ptr()
    }

    pub fn frog_leap(&mut self) {
        if self.dimensions == 3 {
            std::mem::swap(&mut self.positions, &mut self.xyz)
        }
        let dt = self._params().simulationSpeed;
        for i in 0..self._len() {
            let ii = i * self.dimensions;
            for s in 0..self.dimensions {
                self._positions()[ii + s] += self._speeds()[ii + s] * dt;
            }
        }
    }

    pub fn simulate(&mut self) -> usize {
        let collided: Vec<(usize, usize)> = Vec::new();

        self.solve(collided)
    }

    pub fn frog_drop(&mut self) {
        if self.dimensions == 3 {
            std::mem::swap(&mut self.xyz, &mut self.positions)
        }
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
    pub fn params_change(&mut self, params: &JsValue) -> Result<(), JsValue> {
        Gravity::params_change(self, params)
    }
}
