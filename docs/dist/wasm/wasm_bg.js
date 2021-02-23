import * as wasm from './wasm_bg.wasm.proxy.js';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}
/**
*/
export function init_hook() {
    wasm.init_hook();
}

/**
* @returns {any}
*/
export function wasm_memory() {
    var ret = wasm.wasm_memory();
    return takeObject(ret);
}

/**
*/
export class FMMRustGravity {

    static __wrap(ptr) {
        const obj = Object.create(FMMRustGravity.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_fmmrustgravity_free(ptr);
    }
    /**
    * @param {number} len
    * @param {number} variantIndex
    * @returns {FMMRustGravity}
    */
    static new(len, variantIndex) {
        var ret = wasm.fmmrustgravity_new(len, variantIndex);
        return FMMRustGravity.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    positions_ptr() {
        var ret = wasm.fmmrustgravity_positions_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    speeds_ptr() {
        var ret = wasm.fmmrustgravity_speeds_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    masses_ptr() {
        var ret = wasm.fmmrustgravity_masses_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    temperatures_ptr() {
        var ret = wasm.fmmrustgravity_temperatures_ptr(this.ptr);
        return ret;
    }
    /**
    * @param {number} softening
    */
    precalc(softening) {
        wasm.fmmrustgravity_precalc(this.ptr, softening);
    }
    /**
    * @param {number} dt
    */
    frog_leap(dt) {
        wasm.fmmrustgravity_frog_leap(this.ptr, dt);
    }
    /**
    * @param {number} g
    * @param {number} softening
    * @param {boolean} collisions
    * @param {number} threshold
    * @param {number} escape_distance
    * @returns {number}
    */
    simulate(g, softening, collisions, threshold, escape_distance) {
        var ret = wasm.fmmrustgravity_simulate(this.ptr, g, softening, collisions, threshold, escape_distance);
        return ret >>> 0;
    }
    /**
    * @param {number} dt
    */
    frog_drop(dt) {
        wasm.fmmrustgravity_frog_drop(this.ptr, dt);
    }
}
/**
*/
export class P2PRustGravity {

    static __wrap(ptr) {
        const obj = Object.create(P2PRustGravity.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_p2prustgravity_free(ptr);
    }
    /**
    * @param {number} len
    * @returns {P2PRustGravity}
    */
    static new(len) {
        var ret = wasm.p2prustgravity_new(len);
        return P2PRustGravity.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    positions_ptr() {
        var ret = wasm.fmmrustgravity_positions_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    speeds_ptr() {
        var ret = wasm.fmmrustgravity_speeds_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    masses_ptr() {
        var ret = wasm.fmmrustgravity_masses_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    temperatures_ptr() {
        var ret = wasm.fmmrustgravity_temperatures_ptr(this.ptr);
        return ret;
    }
    /**
    * @param {number} dt
    */
    frog_leap(dt) {
        wasm.p2prustgravity_frog_leap(this.ptr, dt);
    }
    /**
    * @param {number} g
    * @param {number} softening
    * @param {boolean} collisions
    * @param {number} threshold
    * @param {number} escape_distance
    * @returns {number}
    */
    simulate(g, softening, collisions, threshold, escape_distance) {
        var ret = wasm.p2prustgravity_simulate(this.ptr, g, softening, collisions, threshold, escape_distance);
        return ret >>> 0;
    }
    /**
    * @param {number} dt
    */
    frog_drop(dt) {
        wasm.p2prustgravity_frog_drop(this.ptr, dt);
    }
}
/**
*/
export class P2PRustSimdGravity {

    static __wrap(ptr) {
        const obj = Object.create(P2PRustSimdGravity.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_p2prustsimdgravity_free(ptr);
    }
    /**
    * @param {number} len
    * @returns {P2PRustSimdGravity}
    */
    static new(len) {
        var ret = wasm.p2prustgravity_new(len);
        return P2PRustSimdGravity.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    positions_ptr() {
        var ret = wasm.fmmrustgravity_positions_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    speeds_ptr() {
        var ret = wasm.fmmrustgravity_speeds_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    masses_ptr() {
        var ret = wasm.fmmrustgravity_masses_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    temperatures_ptr() {
        var ret = wasm.fmmrustgravity_temperatures_ptr(this.ptr);
        return ret;
    }
    /**
    * @param {number} dt
    */
    frog_leap(dt) {
        wasm.p2prustsimdgravity_frog_leap(this.ptr, dt);
    }
    /**
    * @param {number} g
    * @param {number} softening
    * @param {boolean} collisions
    * @param {number} threshold
    * @param {number} escape_distance
    * @returns {number}
    */
    simulate(g, softening, collisions, threshold, escape_distance) {
        var ret = wasm.p2prustsimdgravity_simulate(this.ptr, g, softening, collisions, threshold, escape_distance);
        return ret >>> 0;
    }
    /**
    * @param {number} dt
    */
    frog_drop(dt) {
        wasm.p2prustsimdgravity_frog_drop(this.ptr, dt);
    }
}

export const __wbg_new_59cb74e423758ede = function() {
    var ret = new Error();
    return addHeapObject(ret);
};

export const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
};

export const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

export const __wbindgen_memory = function() {
    var ret = wasm.memory;
    return addHeapObject(ret);
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

