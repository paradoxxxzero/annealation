use crate::gravity::Gravity;
use crate::projector::Projector;
use crate::Params;
use js_sys::Array;
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

#[wasm_bindgen]
pub struct P2PRustGravity {
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

impl Gravity for P2PRustGravity {
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
impl P2PRustGravity {
    #[wasm_bindgen(constructor)]
    pub fn new(
        orbs: &Array,
        params: &JsValue,
        alloc_len: usize,
    ) -> Result<P2PRustGravity, JsValue> {
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
        ) = P2PRustGravity::init(orbs, params, alloc_len)?;

        Ok(P2PRustGravity {
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
        if self._dimensions() == 3 {
            std::mem::swap(&mut self.positions, &mut self.xyz)
        }
        self.leap();
    }

    fn simulate2(
        &mut self,
        softening2: f32,
        collisions: bool,
        threshold2: f32,
        collided: &mut Vec<(usize, usize)>,
        gravitational_constant: f32,
    ) {
        let mut a = [0f32, 0f32];
        for i in 0..self.len {
            let i2 = i * 2;
            a.fill(0f32);
            for j in 0..self.len {
                if i == j {
                    continue;
                }
                let j2 = j * 2;
                let u = [
                    self.positions[j2] - self.positions[i2],
                    self.positions[j2 + 1] - self.positions[i2 + 1],
                ];
                let distance2 = u[0] * u[0] + u[1] * u[1];
                if collisions {
                    if distance2 < threshold2 {
                        collided.push((i, j));
                    }
                }
                let fact = self.masses[j] / (distance2 + softening2);
                a[0] += u[0] * fact;
                a[1] += u[1] * fact;
            }
            self.accelerations[i2] = a[0] * gravitational_constant;
            self.accelerations[i2 + 1] = a[1] * gravitational_constant;
        }
    }

    fn simulate3(
        &mut self,
        softening2: f32,
        collisions: bool,
        threshold2: f32,
        collided: &mut Vec<(usize, usize)>,
        gravitational_constant: f32,
    ) {
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
            self.accelerations[i3] = a[0] * gravitational_constant;
            self.accelerations[i3 + 1] = a[1] * gravitational_constant;
            self.accelerations[i3 + 2] = a[2] * gravitational_constant;
        }
    }

    fn simulate4(
        &mut self,
        softening2: f32,
        collisions: bool,
        threshold2: f32,
        collided: &mut Vec<(usize, usize)>,
        gravitational_constant: f32,
    ) {
        let mut a = [0f32, 0f32, 0f32, 0f32];
        for i in 0..self.len {
            let i4 = i * 4;
            a.fill(0f32);
            for j in 0..self.len {
                if i == j {
                    continue;
                }
                let j4 = j * 4;
                let u = [
                    self.positions[j4] - self.positions[i4],
                    self.positions[j4 + 1] - self.positions[i4 + 1],
                    self.positions[j4 + 2] - self.positions[i4 + 2],
                    self.positions[j4 + 3] - self.positions[i4 + 3],
                ];
                let distance2 = u[0] * u[0] + u[1] * u[1] + u[2] * u[2] + u[3] * u[3];
                if collisions {
                    if distance2 < threshold2 {
                        collided.push((i, j));
                    }
                }
                let distance2_soft = distance2 + softening2;
                let fact = self.masses[j] / (distance2_soft * distance2_soft);
                a[0] += u[0] * fact;
                a[1] += u[1] * fact;
                a[2] += u[2] * fact;
                a[3] += u[3] * fact;
            }
            self.accelerations[i4] = a[0] * gravitational_constant;
            self.accelerations[i4 + 1] = a[1] * gravitational_constant;
            self.accelerations[i4 + 2] = a[2] * gravitational_constant;
            self.accelerations[i4 + 3] = a[3] * gravitational_constant;
        }
    }

    pub fn simulate(&mut self) -> usize {
        let gravitational_constant = self.params.gravitationalConstant;
        let softening = self.params.softening;
        let collisions = self.params.collisions;
        let threshold = self.params.collisionThreshold;

        let mut collided = Vec::new();
        let softening2 = softening * softening;
        let threshold2 = threshold * threshold;

        // Unfactored for performance
        if self.dimensions == 2 {
            self.simulate2(
                softening2,
                collisions,
                threshold2,
                &mut collided,
                gravitational_constant,
            );
        } else if self.dimensions == 3 {
            self.simulate3(
                softening2,
                collisions,
                threshold2,
                &mut collided,
                gravitational_constant,
            );
        } else if self.dimensions == 4 {
            self.simulate4(
                softening2,
                collisions,
                threshold2,
                &mut collided,
                gravitational_constant,
            );
        }

        self.solve(collided)
    }
    pub fn frog_drop(&mut self) {
        self.drop();
        if self._dimensions() == 3 {
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
