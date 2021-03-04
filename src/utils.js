// Fixed version of: https://stackoverflow.com/questions/29879267/es6-class-multiple-inheritance
export const mix = (baseClass, ...mixins) => {
  class base extends baseClass {
    constructor(...args) {
      super(...args)
      mixins.forEach(mixin => {
        copyProps(this, new mixin(...args))
      })
    }
  }
  let copyProps = (target, source) => {
    // this function copies all properties and symbols, filtering out some special ones
    Object.getOwnPropertyNames(source)
      .concat(Object.getOwnPropertySymbols(source))
      .forEach(prop => {
        if (
          !prop.match(
            /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/
          )
        )
          Object.defineProperty(
            target,
            prop,
            Object.getOwnPropertyDescriptor(source, prop)
          )
      })
  }
  mixins.forEach(mixin => {
    // outside contructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
    copyProps(base.prototype, mixin.prototype)
    copyProps(base, mixin)
  })
  return base
}

export const workerPromise = (worker, ...args) => {
  return new Promise(resolve => {
    worker.postMessage(...args)
    worker.onmessage = e => resolve(e.data)
  })
}
