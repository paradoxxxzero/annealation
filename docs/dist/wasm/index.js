// dist/wasm/index.js
var wasm_bindgen;
(function() {
  const __exports = {};
  let wasm;
  const heap = new Array(32).fill(void 0);
  heap.push(void 0, null, true, false);
  function getObject(idx) {
    return heap[idx];
  }
  let heap_next = heap.length;
  function dropObject(idx) {
    if (idx < 36)
      return;
    heap[idx] = heap_next;
    heap_next = idx;
  }
  function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
  }
  function addHeapObject(obj) {
    if (heap_next === heap.length)
      heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];
    heap[idx] = obj;
    return idx;
  }
  let cachedTextDecoder = new TextDecoder("utf-8", {ignoreBOM: true, fatal: true});
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
  function makeMutClosure(arg0, arg1, dtor, f) {
    const state = {a: arg0, b: arg1, cnt: 1, dtor};
    const real = (...args) => {
      state.cnt++;
      const a = state.a;
      state.a = 0;
      try {
        return f(a, state.b, ...args);
      } finally {
        if (--state.cnt === 0) {
          wasm.__wbindgen_export_0.get(state.dtor)(a, state.b);
        } else {
          state.a = a;
        }
      }
    };
    real.original = state;
    return real;
  }
  function __wbg_adapter_20(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures__invoke1_mut__h58c59d690a7bd78f(arg0, arg1, addHeapObject(arg2));
  }
  let WASM_VECTOR_LEN = 0;
  let cachedTextEncoder = new TextEncoder("utf-8");
  const encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
  } : function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
  function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === void 0) {
      const buf = cachedTextEncoder.encode(arg);
      const ptr2 = malloc(buf.length);
      getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
      WASM_VECTOR_LEN = buf.length;
      return ptr2;
    }
    let len = arg.length;
    let ptr = malloc(len);
    const mem = getUint8Memory0();
    let offset = 0;
    for (; offset < len; offset++) {
      const code = arg.charCodeAt(offset);
      if (code > 127)
        break;
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
  function handleError(f) {
    return function() {
      try {
        return f.apply(this, arguments);
      } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
      }
    };
  }
  __exports.init_hook = function() {
    wasm.init_hook();
  };
  __exports.wasm_memory = function() {
    var ret = wasm.wasm_memory();
    return takeObject(ret);
  };
  function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
      throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
  }
  __exports.child_entry_point = function(ptr) {
    wasm.child_entry_point(ptr);
  };
  class FMMRustGravity {
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
    static new(len, variantIndex) {
      var ret = wasm.fmmrustgravity_new(len, variantIndex);
      return FMMRustGravity.__wrap(ret);
    }
    positions_ptr() {
      var ret = wasm.fmmrustgravity_positions_ptr(this.ptr);
      return ret;
    }
    speeds_ptr() {
      var ret = wasm.fmmrustgravity_speeds_ptr(this.ptr);
      return ret;
    }
    masses_ptr() {
      var ret = wasm.fmmrustgravity_masses_ptr(this.ptr);
      return ret;
    }
    temperatures_ptr() {
      var ret = wasm.fmmrustgravity_temperatures_ptr(this.ptr);
      return ret;
    }
    precalc(softening) {
      wasm.fmmrustgravity_precalc(this.ptr, softening);
    }
    frog_leap(dt) {
      wasm.fmmrustgravity_frog_leap(this.ptr, dt);
    }
    simulate(g, softening, collisions, threshold, escape_distance) {
      var ret = wasm.fmmrustgravity_simulate(this.ptr, g, softening, collisions, threshold, escape_distance);
      return ret >>> 0;
    }
    frog_drop(dt) {
      wasm.fmmrustgravity_frog_drop(this.ptr, dt);
    }
  }
  __exports.FMMRustGravity = FMMRustGravity;
  class P2PRustGravity {
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
    static new(len) {
      var ret = wasm.p2prustgravity_new(len);
      return P2PRustGravity.__wrap(ret);
    }
    positions_ptr() {
      var ret = wasm.fmmrustgravity_positions_ptr(this.ptr);
      return ret;
    }
    speeds_ptr() {
      var ret = wasm.fmmrustgravity_speeds_ptr(this.ptr);
      return ret;
    }
    masses_ptr() {
      var ret = wasm.fmmrustgravity_masses_ptr(this.ptr);
      return ret;
    }
    temperatures_ptr() {
      var ret = wasm.fmmrustgravity_temperatures_ptr(this.ptr);
      return ret;
    }
    frog_leap(dt) {
      wasm.p2prustgravity_frog_leap(this.ptr, dt);
    }
    simulate(g, softening, collisions, threshold, escape_distance) {
      var ret = wasm.p2prustgravity_simulate(this.ptr, g, softening, collisions, threshold, escape_distance);
      return ret >>> 0;
    }
    frog_drop(dt) {
      wasm.p2prustgravity_frog_drop(this.ptr, dt);
    }
  }
  __exports.P2PRustGravity = P2PRustGravity;
  class P2PRustThreadGravity {
    static __wrap(ptr) {
      const obj = Object.create(P2PRustThreadGravity.prototype);
      obj.ptr = ptr;
      return obj;
    }
    free() {
      const ptr = this.ptr;
      this.ptr = 0;
      wasm.__wbg_p2prustthreadgravity_free(ptr);
    }
    static new(len) {
      var ret = wasm.p2prustgravity_new(len);
      return P2PRustThreadGravity.__wrap(ret);
    }
    positions_ptr() {
      var ret = wasm.fmmrustgravity_positions_ptr(this.ptr);
      return ret;
    }
    speeds_ptr() {
      var ret = wasm.fmmrustgravity_speeds_ptr(this.ptr);
      return ret;
    }
    masses_ptr() {
      var ret = wasm.fmmrustgravity_masses_ptr(this.ptr);
      return ret;
    }
    temperatures_ptr() {
      var ret = wasm.fmmrustgravity_temperatures_ptr(this.ptr);
      return ret;
    }
    frog_leap(dt) {
      wasm.p2prustthreadgravity_frog_leap(this.ptr, dt);
    }
    simulate(g, softening, collisions, threshold, escape_distance, pool, concurrency) {
      _assertClass(pool, WorkerPool);
      var ret = wasm.p2prustthreadgravity_simulate(this.ptr, g, softening, collisions, threshold, escape_distance, pool.ptr, concurrency);
      return ret >>> 0;
    }
    frog_drop(dt) {
      wasm.p2prustthreadgravity_frog_drop(this.ptr, dt);
    }
  }
  __exports.P2PRustThreadGravity = P2PRustThreadGravity;
  class RenderPromise {
    free() {
      const ptr = this.ptr;
      this.ptr = 0;
      wasm.__wbg_renderpromise_free(ptr);
    }
  }
  __exports.RenderPromise = RenderPromise;
  class WorkerPool {
    static __wrap(ptr) {
      const obj = Object.create(WorkerPool.prototype);
      obj.ptr = ptr;
      return obj;
    }
    free() {
      const ptr = this.ptr;
      this.ptr = 0;
      wasm.__wbg_workerpool_free(ptr);
    }
    constructor(initial) {
      var ret = wasm.workerpool_new(initial);
      return WorkerPool.__wrap(ret);
    }
  }
  __exports.WorkerPool = WorkerPool;
  async function load(module, imports) {
    if (typeof Response === "function" && module instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming === "function") {
        try {
          return await WebAssembly.instantiateStreaming(module, imports);
        } catch (e) {
          if (module.headers.get("Content-Type") != "application/wasm") {
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
          } else {
            throw e;
          }
        }
      }
      const bytes = await module.arrayBuffer();
      return await WebAssembly.instantiate(bytes, imports);
    } else {
      const instance = await WebAssembly.instantiate(module, imports);
      if (instance instanceof WebAssembly.Instance) {
        return {instance, module};
      } else {
        return instance;
      }
    }
  }
  async function init(input) {
    if (typeof input === "undefined") {
      let src;
      if (typeof document === "undefined") {
        src = location.href;
      } else {
        src = document.currentScript.src;
      }
      input = src.replace(/\.js$/, "_bg.wasm");
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_new_59cb74e423758ede = function() {
      var ret = new Error();
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_558ba5917b466edd = function(arg0, arg1) {
      var ret = getObject(arg1).stack;
      var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len0;
      getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
      try {
        console.error(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(arg0, arg1);
      }
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
      takeObject(arg0);
    };
    imports.wbg.__wbg_self_77eca7b42660e1bb = handleError(function() {
      var ret = self.self;
      return addHeapObject(ret);
    });
    imports.wbg.__wbg_window_51dac01569f1ba70 = handleError(function() {
      var ret = window.window;
      return addHeapObject(ret);
    });
    imports.wbg.__wbg_globalThis_34bac2d08ebb9b58 = handleError(function() {
      var ret = globalThis.globalThis;
      return addHeapObject(ret);
    });
    imports.wbg.__wbg_global_1c436164a66c9c22 = handleError(function() {
      var ret = global.global;
      return addHeapObject(ret);
    });
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
      var ret = getObject(arg0) === void 0;
      return ret;
    };
    imports.wbg.__wbg_newnoargs_ab5e899738c0eff4 = function(arg0, arg1) {
      var ret = new Function(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_ab183a630df3a257 = handleError(function(arg0, arg1) {
      var ret = getObject(arg0).call(getObject(arg1));
      return addHeapObject(ret);
    });
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
      const obj = takeObject(arg0).original;
      if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
      }
      var ret = false;
      return ret;
    };
    imports.wbg.__wbindgen_memory = function() {
      var ret = wasm.memory;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_log_682923c8ea4d4d53 = function(arg0, arg1) {
      console.log(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_new_4ae6bf757712b3fd = handleError(function(arg0, arg1) {
      var ret = new Worker(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    });
    imports.wbg.__wbg_new_1abc33d4f9ba3e80 = function() {
      var ret = new Array();
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_module = function() {
      var ret = init.__wbindgen_wasm_module;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_push_44968dcdf4cfbb43 = function(arg0, arg1) {
      var ret = getObject(arg0).push(getObject(arg1));
      return ret;
    };
    imports.wbg.__wbg_postMessage_58f317d71e0a2b3f = handleError(function(arg0, arg1) {
      getObject(arg0).postMessage(getObject(arg1));
    });
    imports.wbg.__wbg_setonmessage_fefcbee2824ce979 = function(arg0, arg1) {
      getObject(arg0).onmessage = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_8e87de7f23c137c6 = function(arg0, arg1) {
      getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbindgen_jsval_eq = function(arg0, arg1) {
      var ret = getObject(arg0) === getObject(arg1);
      return ret;
    };
    imports.wbg.__wbg_type_a49a5fc3f5ab818b = function(arg0, arg1) {
      var ret = getObject(arg1).type;
      var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len0;
      getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_log_0d7f01a10131041d = function(arg0) {
      console.log(getObject(arg0));
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
      var ret = getObject(arg0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_postMessage_952d6d0f2eb1d008 = handleError(function(arg0, arg1) {
      getObject(arg0).postMessage(getObject(arg1));
    });
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_rethrow = function(arg0) {
      throw takeObject(arg0);
    };
    imports.wbg.__wbindgen_closure_wrapper619 = function(arg0, arg1, arg2) {
      var ret = makeMutClosure(arg0, arg1, 26, __wbg_adapter_20);
      return addHeapObject(ret);
    };
    if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
      input = fetch(input);
    }
    const {instance, module} = await load(await input, imports);
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    return wasm;
  }
  wasm_bindgen = Object.assign(init, __exports);
})();
