use std::f32::consts::PI;

pub struct Projector {
  fov: f32,
  w: f32,
  xy: f32,
  xz: f32,
  xw: f32,
  yz: f32,
  yw: f32,
  zw: f32,
}

impl Projector {
  pub fn new(fov: f32, w: f32) -> Projector {
    Projector {
      fov: fov * PI / 180f32,
      w,
      xy: 0f32,
      xz: 0f32,
      xw: 0f32,
      yz: 0f32,
      yw: 0f32,
      zw: 0f32,
    }
  }
  pub fn set_fov(&mut self, fov: f32) {
    self.fov = fov * PI / 180f32;
  }

  pub fn set_w(&mut self, w: f32) {
    self.w = w;
  }

  pub fn project(&self, xo: f32, yo: f32, zo: f32, wo: f32) -> (f32, f32, f32) {
    let (x, y, z, w) = self.rotate_point(xo, yo, zo, wo);
    let zoom = 1f32 + (w * self.fov) / self.w;
    (x / zoom, y / zoom, z / zoom)
  }

  pub fn rotate(&mut self, xy: f32, xz: f32, xw: f32, yz: f32, yw: f32, zw: f32) {
    self.xy = (self.xy + xy / 1000f32) % (2f32 * PI);
    self.xz = (self.xz + xz / 1000f32) % (2f32 * PI);
    self.xw = (self.xw + xw / 1000f32) % (2f32 * PI);
    self.yz = (self.yz + yz / 1000f32) % (2f32 * PI);
    self.yw = (self.yw + yw / 1000f32) % (2f32 * PI);
    self.zw = (self.zw + zw / 1000f32) % (2f32 * PI);
  }

  fn rotate_point(&self, x: f32, y: f32, z: f32, w: f32) -> (f32, f32, f32, f32) {
    let cxy = self.xy.cos();
    let sxy = self.xy.sin();
    let cxz = self.xz.cos();
    let sxz = self.xz.sin();
    let cxw = self.xw.cos();
    let sxw = self.xw.sin();
    let cyz = self.yz.cos();
    let syz = self.yz.sin();
    let cyw = self.yw.cos();
    let syw = self.yw.sin();
    let czw = self.zw.cos();
    let szw = self.zw.sin();

    let mut t = x;
    let x = x * cxy + y * sxy;
    let y = y * cxy - t * sxy;
    t = x;
    let x = x * cxz + z * sxz;
    let z = z * cxz - t * sxz;
    t = x;
    let x = x * cxw + w * sxw;
    let w = w * cxw - t * sxw;
    t = y;
    let y = y * cyz + z * syz;
    let z = z * cyz - t * syz;
    t = y;
    let y = y * cyw + w * syw;
    let w = w * cyw - t * syw;
    t = z;
    let z = z * czw + w * szw;
    let w = w * czw - t * szw;
    (x, y, z, w)
  }
}
