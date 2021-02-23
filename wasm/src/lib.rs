#![feature(wasm_target_feature, wasm_simd)]
#![cfg(target_arch = "wasm32")]

use wasm_bindgen::prelude::*;
mod utils;
// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn wasm_memory() -> JsValue {
  wasm_bindgen::memory()
}

mod fmm;
mod p2p;
mod p2p_simd;
