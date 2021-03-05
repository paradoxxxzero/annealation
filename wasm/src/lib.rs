use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn wasm_memory() -> JsValue {
  wasm_bindgen::memory()
}

#[derive(Serialize, Deserialize, Default)]
pub struct Vector4 {
  x: f32,
  y: f32,
  #[serde(default)]
  z: f32,
  #[serde(default)]
  w: f32,
}

impl Vector4 {
  fn get(&self, n: usize) -> f32 {
    match n {
      0 => self.x,
      1 => self.y,
      2 => self.z,
      3 => self.w,
      _ => self.x,
    }
  }
}

#[derive(Serialize, Deserialize)]
pub struct Orb {
  mass: f32,
  temperature: f32,
  position: Vector4,
  speed: Vector4,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize)]
pub struct Params {
  simulationSpeed: f32,
  gravitationalConstant: f32,
  softening: f32,
  collisions: bool,
  collisionThreshold: f32,
  escapeDistance: f32,
  theta: f32,
  dimensions: usize,
  wFov: f32,
  w: f32,
  xy: f32,
  xz: f32,
  xw: f32,
  yz: f32,
  yw: f32,
  zw: f32,
}

// mod fmm;
mod bh;
mod gravity;
mod none;
mod p2p;
mod projector;
