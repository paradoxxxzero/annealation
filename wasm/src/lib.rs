use wasm_bindgen::prelude::*;
mod utils;

#[wasm_bindgen]
pub fn wasm_memory() -> JsValue {
  wasm_bindgen::memory()
}

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen(js_namespace = console)]
  fn log(s: &str);
  #[wasm_bindgen(js_namespace = console, js_name = log)]
  fn logv(x: &JsValue);
}

#[allow(unused_macros)]
macro_rules! console_log {
  // Note that this is using the `log` function imported above during
  // `bare_bones`
  ($($t:tt)*) => (crate::log(&format_args!($($t)*).to_string()))
}

mod fmm;
mod p2p;
mod p2p_thread;
