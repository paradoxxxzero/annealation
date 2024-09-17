use crate::projector::Projector;
use crate::{Orb, Params};
use js_sys::Array;
use wasm_bindgen::prelude::*;

pub trait Gravity {
  fn init(
    orbs: &Array,
    params: JsValue,
    alloc_len: usize,
  ) -> Result<
    (
      Params,
      Vec<f32>,
      Vec<f32>,
      Vec<f32>,
      Vec<f32>,
      Vec<f32>,
      Vec<f32>,
      usize,
      usize,
      Option<Projector>,
    ),
    JsValue,
  > {
    console_error_panic_hook::set_once();
    let params: Params = serde_wasm_bindgen::from_value(params).unwrap();
    let len = orbs.length() as usize;
    let dimensions = params.dimensions;
    let mut xyz = vec![0f32; 3 * alloc_len];
    let mut positions = if dimensions == 3 {
      Vec::new()
    } else {
      vec![0f32; dimensions * alloc_len]
    };
    let mut speeds = vec![0f32; dimensions * alloc_len];
    let accelerations = vec![0f32; dimensions * alloc_len];
    let mut masses = vec![0f32; alloc_len];
    let mut temperatures = vec![0f32; alloc_len];

    if dimensions == 3 {
      std::mem::swap(&mut positions, &mut xyz)
    }
    for (i, orb) in orbs.iter().enumerate() {
      let orb: Orb = serde_wasm_bindgen::from_value(orb).unwrap();
      let ii = i * dimensions;
      for s in 0..dimensions {
        positions[ii + s] = orb.position.get(s);
        speeds[ii + s] = orb.speed.get(s);
      }
      masses[i] = orb.mass;
      temperatures[i] = orb.temperature;
    }
    if dimensions == 3 {
      std::mem::swap(&mut xyz, &mut positions)
    }

    let projector = match dimensions {
      4 => Some(Projector::new(params.wFov, params.w)),
      _ => None,
    };

    Ok((
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
    ))
  }
  fn _dimensions(&self) -> usize;
  fn _len(&self) -> usize;
  fn _len_set(&mut self, len: usize);
  fn _params(&self) -> &Params;
  fn _params_set(&mut self, params: Params);
  fn _accelerations(&mut self) -> &mut Vec<f32>;
  fn _speeds(&mut self) -> &mut Vec<f32>;
  fn _positions(&mut self) -> &mut Vec<f32>;
  fn _xyz(&mut self) -> &mut Vec<f32>;
  fn _masses(&mut self) -> &mut Vec<f32>;
  fn _temperatures(&mut self) -> &mut Vec<f32>;
  fn _projector(&mut self) -> &mut Option<Projector>;

  fn leap(&mut self) {
    let dt = self._params().simulationSpeed;
    let half_dt = dt * 0.5f32;
    for i in 0..self._len() {
      let ii = i * self._dimensions();
      for s in 0..self._dimensions() {
        self._speeds()[ii + s] += self._accelerations()[ii + s] * half_dt;
        self._positions()[ii + s] += self._speeds()[ii + s] * dt;
      }
    }
  }

  fn drop(&mut self) {
    let dt = self._params().simulationSpeed;
    let half_dt = dt * 0.5f32;
    for i in 0..self._len() {
      let ii = i * self._dimensions();
      for s in 0..self._dimensions() {
        self._speeds()[ii + s] += self._accelerations()[ii + s] * half_dt;
      }
    }
    // let Params {
    //   xy,
    //   xz,
    //   xw,
    //   yz,
    //   yw,
    //   zw,
    //   ..
    // } = self._params();
    let xy = self._params().xy;
    let xz = self._params().xz;
    let xw = self._params().xw;
    let yz = self._params().yz;
    let yw = self._params().yw;
    let zw = self._params().zw;
    if let Some(projector) = self._projector() {
      projector.rotate(xy, xz, xw, yz, yw, zw);
    }
  }

  fn aggregate_collisions(&mut self, collided: Vec<(usize, usize)>) -> Vec<Vec<usize>> {
    let mut aggregated: Vec<Vec<usize>> = Vec::new();
    for (i, j) in collided {
      let mut is_new = true;
      for cell in &mut aggregated {
        let is_i_in = cell.contains(&i);
        let is_j_in = cell.contains(&j);
        if is_i_in || is_j_in {
          is_new = false
        }
        if is_i_in != is_j_in {
          let new_i = if is_i_in { j } else { i };
          if new_i > cell[0] {
            cell.push(new_i);
          } else {
            cell.insert(0, new_i);
          }
          break;
        }
      }
      if is_new {
        aggregated.push(if i > j { vec![j, i] } else { vec![i, j] });
      }
    }
    return aggregated;
  }

  fn solve_collisions(&mut self, collided: Vec<Vec<usize>>) {
    for item in collided.iter() {
      let i = item[0];
      let ii = i * self._dimensions();
      for j in &item[1..] {
        let jj = *j * self._dimensions();
        let mass_ratio = 1. / (self._masses()[i] + self._masses()[*j]);
        for s in 0..self._dimensions() {
          self._positions()[ii + s] = mass_ratio
            * (self._positions()[ii + s] * self._masses()[i]
              + self._positions()[jj + s] * self._masses()[*j]);

          self._speeds()[ii + s] = mass_ratio
            * (self._speeds()[ii + s] * self._masses()[i]
              + self._speeds()[jj + s] * self._masses()[*j]);
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
      let ii = i * self._dimensions();
      let distance = (0..self._dimensions()).fold(0f32, |acc, s| {
        acc + self._positions()[ii + s] * self._positions()[ii + s]
      });
      if distance > escape_distance2 {
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
      let ii = i * self._dimensions();
      let iis = (i + shift) * self._dimensions();
      for s in 0..self._dimensions() {
        self._positions()[ii + s] = self._positions()[iis + s];
        self._speeds()[ii + s] = self._speeds()[iis + s];
        self._accelerations()[ii + s] = self._accelerations()[iis + s];
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

  fn set_orb(&mut self, i: usize, orb: JsValue) -> Result<(), JsValue> {
    let orb: Orb = serde_wasm_bindgen::from_value(orb).unwrap();
    let ii = i * self._dimensions();
    for s in 0..self._dimensions() {
      self._positions()[ii + s] = orb.position.get(s);
      self._speeds()[ii + s] = orb.speed.get(s);
    }
    self._masses()[i] = orb.mass;
    self._temperatures()[i] = orb.temperature;
    Ok(())
  }

  fn grow(&mut self, orbs: &Array) -> Result<(), JsValue> {
    if self._len() + orbs.length() as usize > self._temperatures().len() {
      return Err(JsValue::from("Can't grow"));
    }

    for (i, orb) in orbs.iter().enumerate() {
      self.set_orb(self._len() + i, orb)?;
    }
    self._len_set(self._len() + orbs.length() as usize);
    Ok(())
  }

  fn shrink(&mut self, n: usize) -> Result<(), JsValue> {
    if (self._len() as i32 - n as i32) < 0 {
      return Err(JsValue::from("Can't shrink"));
    }

    self._len_set(self._len() - n);
    Ok(())
  }

  fn project(&mut self) {
    if self._dimensions() == 3 {
      return;
    } else if self._dimensions() == 2 {
      for i in 0..self._len() {
        let i2 = i * 2;
        let i3 = i2 + i;
        self._xyz()[i3] = self._positions()[i2];
        self._xyz()[i3 + 1] = self._positions()[i2 + 1];
        self._xyz()[i3 + 2] = 0f32;
      }
    } else if self._dimensions() == 4 {
      for i in 0..self._len() {
        let i3 = i * 3;
        let i4 = i3 + i;
        let x = self._positions()[i4];
        let y = self._positions()[i4 + 1];
        let z = self._positions()[i4 + 2];
        let w = self._positions()[i4 + 3];
        if let Some(projector) = self._projector() {
          let (x, y, z) = projector.project(x, y, z, w);
          self._xyz()[i3] = x;
          self._xyz()[i3 + 1] = y;
          self._xyz()[i3 + 2] = z;
        }
      }
    }
  }
  fn params_change(&mut self, params: JsValue) -> Result<(), JsValue> {
    self._params_set(
      serde_wasm_bindgen::from_value(params).unwrap()
    );
    let w_fov = self._params().wFov;
    let w = self._params().w;
    if let Some(projector) = self._projector() {
      projector.set_fov(w_fov);
      projector.set_w(w);
    }
    Ok(())
  }
}
