use crate::gravity::Gravity;
use crate::projector::Projector;
use crate::Params;
use js_sys::Array;
use wasm_bindgen::prelude::*;

const QUADRANTS: [[usize; 2]; 4] = [[0, 0], [1, 0], [1, 1], [0, 1]];

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

const HEXADECANTS: [[usize; 4]; 16] = [
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 1, 1],
    [0, 0, 1, 1],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
];

#[derive(PartialEq)]
struct Cell2 {
    x: f32,
    y: f32,
    size: f32,
    index: Option<usize>,
    mass: f32,
    cx: f32,
    cy: f32,
    quadrants: Vec<Cell2>,
    leaf: bool,
}

#[derive(PartialEq)]
struct Cell3 {
    x: f32,
    y: f32,
    z: f32,
    size: f32,
    index: Option<usize>,
    mass: f32,
    cx: f32,
    cy: f32,
    cz: f32,
    octants: Vec<Cell3>,
    leaf: bool,
}

#[derive(PartialEq)]
struct Cell4 {
    x: f32,
    y: f32,
    z: f32,
    w: f32,
    size: f32,
    index: Option<usize>,
    mass: f32,
    cx: f32,
    cy: f32,
    cz: f32,
    cw: f32,
    hexadecants: Vec<Cell4>,
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
        params: JsValue,
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

    fn subdivide2(&self, cell: &mut Cell2) {
        let size = cell.size / 2f32;
        cell.leaf = false;
        cell.quadrants = QUADRANTS
            .iter()
            .map(|[x, y]| Cell2 {
                x: cell.x + *x as f32 * size,
                y: cell.y + *y as f32 * size,
                size,
                index: None,
                mass: 0f32,
                cx: 0f32,
                cy: 0f32,
                quadrants: Vec::new(),
                leaf: true,
            })
            .collect::<Vec<Cell2>>();
    }

    fn get_quadrant_index2<'a>(&self, cell: &'a Cell2, index: usize) -> usize {
        let i2 = index * 2;
        // For some reason it sometimes happen on android (it should not)
        if cell.quadrants.len() == 0 {
            return 0;
        }
        let x = self.positions[i2] > cell.quadrants[2].x;
        let y = self.positions[i2 + 1] > cell.quadrants[2].y;
        if let Some(i) = QUADRANTS
            .iter()
            .position(|&[xc, yc]| (xc == 1) == x && (yc == 1) == y)
        {
            i
        } else {
            0
        }
    }

    fn add_particle2(&self, cell: &mut Cell2, index: usize) {
        if let Some(cell_index) = cell.index {
            // Subdivide this cell
            self.subdivide2(cell);

            // Inserting existing particle to subCell
            let existing_quadrant_index = self.get_quadrant_index2(cell, cell_index);

            cell.quadrants[existing_quadrant_index].index = Some(cell_index);

            let new_quadrant_index = self.get_quadrant_index2(cell, index);
            // If both cells end up in same quadrant, subdivide again
            if existing_quadrant_index == new_quadrant_index {
                // Prevent same position infinite loop
                let i2 = index * 2;
                let ci2 = cell_index * 2;
                if !(self.positions[ci2] == self.positions[i2]
                    && self.positions[ci2 + 1] == self.positions[i2 + 1])
                {
                    self.add_particle2(&mut cell.quadrants[existing_quadrant_index], index);
                }
            }

            cell.quadrants[new_quadrant_index].index = Some(index);
        } else {
            // If this cell is empty, add particle to it
            cell.index = Some(index);
        }
    }

    fn make_octree2(&mut self, origin: f32, range: f32) -> Cell2 {
        let mut root_cell = Cell2 {
            x: origin,
            y: origin,
            size: range,
            index: None,
            mass: 0f32,
            cx: 0f32,
            cy: 0f32,
            quadrants: Vec::new(),
            leaf: true,
        };
        // Let's insert every particles:
        for i in 0..self.len {
            let mut cell = &mut root_cell;

            while !cell.leaf {
                let cell_index = self.get_quadrant_index2(cell, i);
                // For some reason it sometimes happen on android (it should not)
                if cell.quadrants.len() == 0 {
                    return root_cell;
                }
                cell = &mut cell.quadrants[cell_index];
            }

            self.add_particle2(cell, i);
        }
        root_cell
    }

    fn mass_distribution2(&mut self, cell: &mut Cell2, index: usize) {
        if cell.leaf {
            // If this cell is a leaf set particle mass to it
            let i2 = index * 2;
            cell.cx = self.positions[i2];
            cell.cy = self.positions[i2 + 1];
            cell.mass = self.masses[index];
        } else {
            // For each quadrant
            for quadrant in cell.quadrants.iter_mut() {
                // If it has particles
                if let Some(quadrant_index) = quadrant.index {
                    // Compute its distribution
                    self.mass_distribution2(quadrant, quadrant_index);
                    cell.mass += quadrant.mass;
                    cell.cx += quadrant.cx * quadrant.mass;
                    cell.cy += quadrant.cy * quadrant.mass;
                }
            }

            // Compute center of mass
            cell.cx /= cell.mass;
            cell.cy /= cell.mass;
        }
    }

    fn get_accelerations2(
        &mut self,
        cell: &Cell2,
        index: usize,
        collided: &mut Vec<(usize, usize)>,
    ) {
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
                    let i2 = index * 2;
                    let j2 = cell_index * 2;
                    let x = self.positions[j2] - self.positions[i2];
                    let y = self.positions[j2 + 1] - self.positions[i2 + 1];
                    let d2 = x * x + y * y;
                    if collisions {
                        if d2 < threshold2 {
                            collided.push((index, cell_index));
                        }
                    }
                    let fact = self.masses[cell_index] / (d2 + softening2);

                    self.accelerations[i2] += fact * x;
                    self.accelerations[i2 + 1] += fact * y;
                }
            }
        } else {
            // If this cell contains quadrants
            // Compute distance between this particle and the cell center of mass
            let i2 = index * 2;
            let x = cell.cx - self.positions[i2];
            let y = cell.cy - self.positions[i2 + 1];
            let r2 = x * x + y * y;
            let d2 = cell.size * cell.size;

            if d2 < theta * theta * r2 {
                // If the ratio of distance and radius is below theta, use approximation
                // Compute interaction between this particle and this cell
                let fact = cell.mass / r2;

                self.accelerations[i2] += fact * x;
                self.accelerations[i2 + 1] += fact * y;
            } else {
                // Otherwise compute accelerations for each quadrant
                for quadrant in cell.quadrants.iter() {
                    self.get_accelerations2(quadrant, index, collided);
                }
            }
        }
    }

    fn subdivide3(&self, cell: &mut Cell3) {
        let size = cell.size / 2f32;
        cell.leaf = false;
        cell.octants = OCTANTS
            .iter()
            .map(|[x, y, z]| Cell3 {
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
            .collect::<Vec<Cell3>>();
    }

    fn get_octant_index3<'a>(&self, cell: &'a Cell3, index: usize) -> usize {
        let i3 = index * 3;
        // For some reason it sometimes happen on android (it should not)
        if cell.octants.len() == 0 {
            return 0;
        }
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

    fn add_particle3(&self, cell: &mut Cell3, index: usize) {
        if let Some(cell_index) = cell.index {
            // Subdivide this cell
            self.subdivide3(cell);

            // Inserting existing particle to subCell
            let existing_octant_index = self.get_octant_index3(cell, cell_index);

            cell.octants[existing_octant_index].index = Some(cell_index);

            let new_octant_index = self.get_octant_index3(cell, index);
            // If both cells end up in same octant, subdivide again
            if existing_octant_index == new_octant_index {
                // Prevent same position infinite loop
                let i3 = index * 3;
                let ci3 = cell_index * 3;
                if !(self.positions[ci3] == self.positions[i3]
                    && self.positions[ci3 + 1] == self.positions[i3 + 1]
                    && self.positions[ci3 + 2] == self.positions[i3 + 2])
                {
                    self.add_particle3(&mut cell.octants[existing_octant_index], index);
                }
            }

            cell.octants[new_octant_index].index = Some(index);
        } else {
            // If this cell is empty, add particle to it
            cell.index = Some(index);
        }
    }

    fn make_octree3(&mut self, origin: f32, range: f32) -> Cell3 {
        let mut root_cell = Cell3 {
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
                let cell_index = self.get_octant_index3(cell, i);
                // For some reason it sometimes happen on android (it should not)
                if cell.octants.len() == 0 {
                    return root_cell;
                }
                cell = &mut cell.octants[cell_index];
            }

            self.add_particle3(cell, i);
        }
        root_cell
    }

    fn mass_distribution3(&mut self, cell: &mut Cell3, index: usize) {
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
                    self.mass_distribution3(octant, octant_index);
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

    fn get_accelerations3(
        &mut self,
        cell: &Cell3,
        index: usize,
        collided: &mut Vec<(usize, usize)>,
    ) {
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
                    self.get_accelerations3(octant, index, collided);
                }
            }
        }
    }

    fn subdivide4(&self, cell: &mut Cell4) {
        let size = cell.size / 2f32;
        cell.leaf = false;
        cell.hexadecants = HEXADECANTS
            .iter()
            .map(|[x, y, z, w]| Cell4 {
                x: cell.x + *x as f32 * size,
                y: cell.y + *y as f32 * size,
                z: cell.z + *z as f32 * size,
                w: cell.w + *w as f32 * size,
                size,
                index: None,
                mass: 0f32,
                cx: 0f32,
                cy: 0f32,
                cz: 0f32,
                cw: 0f32,
                hexadecants: Vec::new(),
                leaf: true,
            })
            .collect::<Vec<Cell4>>();
    }

    fn get_hexadecant_index4<'a>(&self, cell: &'a Cell4, index: usize) -> usize {
        let i4 = index * 4;
        // For some reason it sometimes happen on android (it should not)
        if cell.hexadecants.len() == 0 {
            return 0;
        }
        let x = self.positions[i4] > cell.hexadecants[14].x;
        let y = self.positions[i4 + 1] > cell.hexadecants[14].y;
        let z = self.positions[i4 + 2] > cell.hexadecants[14].z;
        let w = self.positions[i4 + 3] > cell.hexadecants[14].w;
        if let Some(i) = HEXADECANTS.iter().position(|&[xc, yc, zc, wc]| {
            (xc == 1) == x && (yc == 1) == y && (zc == 1) == z && (wc == 1) == w
        }) {
            i
        } else {
            0
        }
    }

    fn add_particle4(&self, cell: &mut Cell4, index: usize) {
        if let Some(cell_index) = cell.index {
            // Subdivide this cell
            self.subdivide4(cell);

            // Inserting existing particle to subCell
            let existing_hexadecant_index = self.get_hexadecant_index4(cell, cell_index);

            cell.hexadecants[existing_hexadecant_index].index = Some(cell_index);

            let new_hexadecant_index = self.get_hexadecant_index4(cell, index);
            // If both cells end up in same hexadecant, subdivide again
            if existing_hexadecant_index == new_hexadecant_index {
                // Prevent same position infinite loop
                let i4 = index * 4;
                let ci4 = cell_index * 4;
                if !(self.positions[ci4] == self.positions[i4]
                    && self.positions[ci4 + 1] == self.positions[i4 + 1]
                    && self.positions[ci4 + 2] == self.positions[i4 + 2]
                    && self.positions[ci4 + 3] == self.positions[i4 + 3])
                {
                    self.add_particle4(&mut cell.hexadecants[existing_hexadecant_index], index);
                }
            }

            cell.hexadecants[new_hexadecant_index].index = Some(index);
        } else {
            // If this cell is empty, add particle to it
            cell.index = Some(index);
        }
    }

    fn make_octree4(&mut self, origin: f32, range: f32) -> Cell4 {
        let mut root_cell = Cell4 {
            x: origin,
            y: origin,
            z: origin,
            w: origin,
            size: range,
            index: None,
            mass: 0f32,
            cx: 0f32,
            cy: 0f32,
            cz: 0f32,
            cw: 0f32,
            hexadecants: Vec::new(),
            leaf: true,
        };
        // Let's insert every particles:
        for i in 0..self.len {
            let mut cell = &mut root_cell;

            while !cell.leaf {
                let cell_index = self.get_hexadecant_index4(cell, i);
                // For some reason it sometimes happen on android (it should not)
                if cell.hexadecants.len() == 0 {
                    return root_cell;
                }
                cell = &mut cell.hexadecants[cell_index];
            }

            self.add_particle4(cell, i);
        }
        root_cell
    }

    fn mass_distribution4(&mut self, cell: &mut Cell4, index: usize) {
        if cell.leaf {
            // If this cell is a leaf set particle mass to it
            let i4 = index * 4;
            cell.cx = self.positions[i4];
            cell.cy = self.positions[i4 + 1];
            cell.cz = self.positions[i4 + 2];
            cell.cw = self.positions[i4 + 3];
            cell.mass = self.masses[index];
        } else {
            // For each hexadecant
            for hexadecant in cell.hexadecants.iter_mut() {
                // If it has particles
                if let Some(hexadecant_index) = hexadecant.index {
                    // Compute its distribution
                    self.mass_distribution4(hexadecant, hexadecant_index);
                    cell.mass += hexadecant.mass;
                    cell.cx += hexadecant.cx * hexadecant.mass;
                    cell.cy += hexadecant.cy * hexadecant.mass;
                    cell.cz += hexadecant.cz * hexadecant.mass;
                    cell.cw += hexadecant.cw * hexadecant.mass;
                }
            }

            // Compute center of mass
            cell.cx /= cell.mass;
            cell.cy /= cell.mass;
            cell.cz /= cell.mass;
            cell.cw /= cell.mass;
        }
    }

    fn get_accelerations4(
        &mut self,
        cell: &Cell4,
        index: usize,
        collided: &mut Vec<(usize, usize)>,
    ) {
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
                    let i4 = index * 4;
                    let j4 = cell_index * 4;
                    let x = self.positions[j4] - self.positions[i4];
                    let y = self.positions[j4 + 1] - self.positions[i4 + 1];
                    let z = self.positions[j4 + 2] - self.positions[i4 + 2];
                    let w = self.positions[j4 + 3] - self.positions[i4 + 3];
                    let d2 = x * x + y * y + z * z + w * w;
                    let d2s = d2 + softening2;
                    if collisions {
                        if d2 < threshold2 {
                            collided.push((index, cell_index));
                        }
                    }
                    let fact = self.masses[cell_index] / (d2s * d2s);

                    self.accelerations[i4] += fact * x;
                    self.accelerations[i4 + 1] += fact * y;
                    self.accelerations[i4 + 2] += fact * z;
                    self.accelerations[i4 + 3] += fact * w;
                }
            }
        } else {
            // If this cell contains hexadecants
            // Compute distance between this particle and the cell center of mass
            let i4 = index * 4;
            let x = cell.cx - self.positions[i4];
            let y = cell.cy - self.positions[i4 + 1];
            let z = cell.cz - self.positions[i4 + 2];
            let w = cell.cw - self.positions[i4 + 3];
            let r2 = x * x + y * y + z * z + w * w;
            let d2 = cell.size * cell.size;

            if d2 < theta * theta * r2 {
                // If the ratio of distance and radius is below theta, use approximation
                // Compute interaction between this particle and this cell
                let fact = cell.mass / (r2 * r2);

                self.accelerations[i4] += fact * x;
                self.accelerations[i4 + 1] += fact * y;
                self.accelerations[i4 + 2] += fact * z;
                self.accelerations[i4 + 3] += fact * w;
            } else {
                // Otherwise compute accelerations for each hexadecant
                for hexadecant in cell.hexadecants.iter() {
                    self.get_accelerations4(hexadecant, index, collided);
                }
            }
        }
    }

    pub fn simulate(&mut self) -> usize {
        let gravitational_constant = self.params.gravitationalConstant;

        let mut collided = Vec::new();
        let min = self.positions.iter().fold(1.0 / 0.0, |m, v| v.min(m));
        let max = self.positions.iter().fold(0.0 / 0.0, |m, v| v.max(m));

        if self.dimensions == 2 {
            let mut root_cell = self.make_octree2(min, max - min);
            self.mass_distribution2(&mut root_cell, 0);

            for i in 0..self.len {
                let ii = i * self.dimensions;
                for k in 0..self.dimensions {
                    self.accelerations[ii + k] = 0f32;
                }
                self.get_accelerations2(&mut root_cell, i, &mut collided);
                for k in 0..self.dimensions {
                    self.accelerations[ii + k] *= gravitational_constant;
                }
            }
        } else if self.dimensions == 3 {
            let mut root_cell = self.make_octree3(min, max - min);
            self.mass_distribution3(&mut root_cell, 0);

            for i in 0..self.len {
                let ii = i * self.dimensions;
                for k in 0..self.dimensions {
                    self.accelerations[ii + k] = 0f32;
                }
                self.get_accelerations3(&mut root_cell, i, &mut collided);
                for k in 0..self.dimensions {
                    self.accelerations[ii + k] *= gravitational_constant;
                }
            }
        } else if self.dimensions == 4 {
            let mut root_cell = self.make_octree4(min, max - min);
            self.mass_distribution4(&mut root_cell, 0);

            for i in 0..self.len {
                let ii = i * self.dimensions;
                for k in 0..self.dimensions {
                    self.accelerations[ii + k] = 0f32;
                }
                self.get_accelerations4(&mut root_cell, i, &mut collided);
                for k in 0..self.dimensions {
                    self.accelerations[ii + k] *= gravitational_constant;
                }
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
    pub fn params_change(&mut self, params: JsValue) -> Result<(), JsValue> {
        Gravity::params_change(self, params)
    }
}
