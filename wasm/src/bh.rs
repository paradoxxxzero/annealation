use crate::gravity::Gravity;
use crate::projector::Projector;
use crate::Params;
use js_sys::Array;
use wasm_bindgen::prelude::*;

const OCTANTS: [[usize; 3]; 8] = [
    [0, 0, 0],
    [1, 0, 0],
    [1, 0, 1],
    [0, 0, 1],
    [0, 1, 0],
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
];

#[derive(PartialEq)]
struct Cell {
    x: f32,
    y: f32,
    z: f32,
    size: f32,
    index: Option<usize>,
    mass: f32,
    cx: f32,
    cy: f32,
    cz: f32,
    octants: Vec<Cell>,
    leaf: bool,
}

#[wasm_bindgen]
pub struct BarnesHutRustGravity {
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

impl Gravity for BarnesHutRustGravity {
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
impl BarnesHutRustGravity {
    #[wasm_bindgen(constructor)]
    pub fn new(
        orbs: &Array,
        params: &JsValue,
        alloc_len: usize,
    ) -> Result<BarnesHutRustGravity, JsValue> {
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
        ) = BarnesHutRustGravity::init(orbs, params, alloc_len)?;

        Ok(BarnesHutRustGravity {
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

    fn subdivide(&self, cell: &mut Cell) {
        let size = cell.size / 2f32;
        cell.leaf = false;
        cell.octants = OCTANTS
            .iter()
            .map(|[x, y, z]| Cell {
                x: cell.x + *x as f32 * size,
                y: cell.y + *y as f32 * size,
                z: cell.z + *z as f32 * size,
                size,
                index: None,
                mass: 0f32,
                cx: 0f32,
                cy: 0f32,
                cz: 0f32,
                octants: Vec::new(),
                leaf: true,
            })
            .collect::<Vec<Cell>>();
    }

    fn get_octant_index<'a>(&self, cell: &'a Cell, index: usize) -> usize {
        let i3 = index * 3;
        let x = self.positions[i3] > cell.octants[6].x;
        let y = self.positions[i3 + 1] > cell.octants[6].y;
        let z = self.positions[i3 + 2] > cell.octants[6].z;
        if let Some(i) = OCTANTS
            .iter()
            .position(|&[xc, yc, zc]| (xc == 1) == x && (yc == 1) == y && (zc == 1) == z)
        {
            i
        } else {
            0
        }
    }

    fn add_particle(&self, cell: &mut Cell, index: usize) {
        if let Some(cell_index) = cell.index {
            // Subdivide this cell
            self.subdivide(cell);

            // Inserting existing particle to subCell
            let existing_octant_index = self.get_octant_index(cell, cell_index);

            cell.octants[existing_octant_index].index = Some(cell_index);

            let new_octant_index = self.get_octant_index(cell, index);
            // If both cells end up in same octant, subdivide again
            if existing_octant_index == new_octant_index {
                // Prevent same position infinite loop
                let i3 = index * 3;
                let ci3 = cell_index * 3;
                if self.positions[ci3] != self.positions[i3]
                    && self.positions[ci3 + 1] != self.positions[i3 + 1]
                    && self.positions[ci3 + 2] != self.positions[i3 + 2]
                {
                    self.add_particle(&mut cell.octants[existing_octant_index], index);
                }
            }

            cell.octants[new_octant_index].index = Some(index);
        } else {
            // If this cell is empty, add particle to it
            cell.index = Some(index);
        }
    }

    fn make_octree(&mut self, origin: f32, range: f32) -> Cell {
        let mut root_cell = Cell {
            x: origin,
            y: origin,
            z: origin,
            size: range,
            index: None,
            mass: 0f32,
            cx: 0f32,
            cy: 0f32,
            cz: 0f32,
            octants: Vec::new(),
            leaf: true,
        };
        // Let's insert every particles:
        for i in 0..self.len {
            let mut cell = &mut root_cell;

            while !cell.leaf {
                let cell_index = self.get_octant_index(cell, i);
                cell = &mut cell.octants[cell_index];
            }

            self.add_particle(cell, i);
        }
        root_cell
    }

    fn mass_distribution(&mut self, cell: &mut Cell, index: usize) {
        if cell.leaf {
            // If this cell is a leaf set particle mass to it
            let i3 = index * 3;
            cell.cx = self.positions[i3];
            cell.cy = self.positions[i3 + 1];
            cell.cz = self.positions[i3 + 2];
            cell.mass = self.masses[index];
        } else {
            // For each octant
            for octant in cell.octants.iter_mut() {
                // If it has particles
                if let Some(octant_index) = octant.index {
                    // Compute its distribution
                    self.mass_distribution(octant, octant_index);
                    cell.mass += octant.mass;
                    cell.cx += octant.cx * octant.mass;
                    cell.cy += octant.cy * octant.mass;
                    cell.cz += octant.cz * octant.mass;
                }
            }

            // Compute center of mass
            cell.cx /= cell.mass;
            cell.cy /= cell.mass;
            cell.cz /= cell.mass;
        }
    }

    fn get_accelerations(&mut self, cell: &Cell, index: usize, collided: &mut Vec<(usize, usize)>) {
        let theta = self.params.theta;
        let softening = self.params.softening;
        let collisions = self.params.collisions;
        let threshold = self.params.collisionThreshold;
        let softening2 = softening * softening;
        let threshold2 = threshold * threshold;
        // If it's a leaf and cell is not containing cell
        if cell.leaf {
            if let Some(cell_index) = cell.index {
                if cell_index != index {
                    // Compute classical interactions between index particle and cell particle
                    let i3 = index * 3;
                    let j3 = cell_index * 3;
                    let x = self.positions[j3] - self.positions[i3];
                    let y = self.positions[j3 + 1] - self.positions[i3 + 1];
                    let z = self.positions[j3 + 2] - self.positions[i3 + 2];
                    let d2 = x * x + y * y + z * z;
                    let d = (d2 + softening2).sqrt();
                    if collisions {
                        if d2 < threshold2 {
                            collided.push((index, cell_index));
                        }
                    }
                    let fact = self.masses[cell_index] / (d * d * d);

                    self.accelerations[i3] += fact * x;
                    self.accelerations[i3 + 1] += fact * y;
                    self.accelerations[i3 + 2] += fact * z;
                }
            }
        } else {
            // If this cell contains octants
            // Compute distance between this particle and the cell center of mass
            let i3 = index * 3;
            let x = cell.cx - self.positions[i3];
            let y = cell.cy - self.positions[i3 + 1];
            let z = cell.cz - self.positions[i3 + 2];
            let r = (x * x + y * y + z * z).sqrt();
            let d = cell.size;

            if d < theta * r {
                // If the ratio of distance and radius is below theta, use approximation
                // Compute interaction between this particle and this cell
                let fact = cell.mass / (r * r * r);

                self.accelerations[i3] += fact * x;
                self.accelerations[i3 + 1] += fact * y;
                self.accelerations[i3 + 2] += fact * z;
            } else {
                // Otherwise compute accelerations for each octant
                for octant in cell.octants.iter() {
                    self.get_accelerations(octant, index, collided);
                }
            }
        }
    }

    pub fn simulate(&mut self) -> usize {
        let gravitational_constant = self.params.gravitationalConstant;

        let mut collided = Vec::new();
        let min = self.positions.iter().fold(1.0 / 0.0, |m, v| v.min(m));
        let max = self.positions.iter().fold(0.0 / 0.0, |m, v| v.max(m));

        let mut root_cell = self.make_octree(min, max - min);
        self.mass_distribution(&mut root_cell, 0);

        for i in 0..self.len {
            let i3 = i * 3;
            for k in 0..3 {
                self.accelerations[i3 + k] = 0f32;
            }

            self.get_accelerations(&mut root_cell, i, &mut collided);

            for k in 0..3 {
                self.accelerations[i3 + k] *= gravitational_constant;
            }
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
