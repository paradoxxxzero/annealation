use wasm_bindgen::prelude::*;
mod utils;

#[wasm_bindgen]
pub fn wasm_memory() -> JsValue {
  wasm_bindgen::memory()
}

mod fmm;
mod p2p;
