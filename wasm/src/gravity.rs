use crate::{Orb, Params};
use js_sys::Array;
use wasm_bindgen::prelude::*;

pub trait Gravity {
  fn _len(&self) -> usize;
  fn _len_set(&mut self, len: usize);
  fn _params(&self) -> &Params;
  fn _params_set(&mut self, params: Params);
  fn _accelerations(&mut self) -> &mut Vec<f32>;
  fn _speeds(&mut self) -> &mut Vec<f32>;
  fn _positions(&mut self) -> &mut Vec<f32>;
  fn _masses(&mut self) -> &mut Vec<f32>;
  fn _temperatures(&mut self) -> &mut Vec<f32>;

  fn leap(&mut self) {
    let dt = self._params().simulationSpeed;
    let half_dt = dt * 0.5f32;
    for i in 0..self._len() {
      let i3 = i * 3;
      for k in 0..3 {
        self._speeds()[i3 + k] += self._accelerations()[i3 + k] * half_dt;
        self._positions()[i3 + k] += self._speeds()[i3 + k] * dt;
      }
    }
  }

  fn drop(&mut self) {
    let dt = self._params().simulationSpeed;
    let half_dt = dt * 0.5f32;
    for i in 0..self._len() {
      let i3 = i * 3;
      for k in 0..3 {
        self._speeds()[i3 + k] += self._accelerations()[i3 + k] * half_dt;
      }
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
      let i3 = i * 3;
      for j in &item[1..] {
        let j3 = j * 3;
        let mass_ratio = 1. / (self._masses()[i] + self._masses()[*j]);
        for k in 0..3 {
          self._positions()[i3 + k] = mass_ratio
            * (self._positions()[i3 + k] * self._masses()[i]
              + self._positions()[j3 + k] * self._masses()[*j]);
          self._speeds()[i3 + k] = mass_ratio
            * (self._speeds()[i3 + k] * self._masses()[i]
              + self._speeds()[j3 + k] * self._masses()[*j]);
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
      let i3 = i * 3;
      if self._positions()[i3] * self._positions()[i3]
        + self._positions()[i3 + 1] * self._positions()[i3 + 1]
        + self._positions()[i3 + 2] * self._positions()[i3 + 2]
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
      let i3 = i * 3;
      let is3 = (i + shift) * 3;
      for k in 0..3 {
        self._positions()[i3 + k] = self._positions()[is3 + k];
        self._speeds()[i3 + k] = self._speeds()[is3 + k];
        self._accelerations()[i3 + k] = self._accelerations()[is3 + k];
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
    let orb: Orb = orb.into_serde().map_err(|e| JsValue::from(e.to_string()))?;
    self._positions()[i * 3] = orb.position.x;
    self._positions()[i * 3 + 1] = orb.position.y;
    self._positions()[i * 3 + 2] = orb.position.z;
    self._speeds()[i * 3] = orb.speed.x;
    self._speeds()[i * 3 + 1] = orb.speed.y;
    self._speeds()[i * 3 + 2] = orb.speed.z;
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
}
