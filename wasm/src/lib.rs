use serde::{Deserialize, Serialize};
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
pub fn wasm_memory() -> JsValue {
  wasm_bindgen::memory()
}

#[derive(Serialize, Deserialize)]
pub struct Vector3 {
  x: f32,
  y: f32,
  z: f32,
}

#[derive(Serialize, Deserialize)]
pub struct Orb {
  mass: f32,
  temperature: f32,
  position: Vector3,
  speed: Vector3,
}

#[derive(Serialize, Deserialize)]
pub struct Params {
  simulationSpeed: f32,
  gravitationalConstant: f32,
  softening: f32,
  collisions: bool,
  collisionThreshold: f32,
  escapeDistance: f32,
  theta: f32,
}
// mod fmm;
mod bh;
mod gravity;
mod none;
mod p2p;
