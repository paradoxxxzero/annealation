module.exports = {
  mount: {
    public: { url: '/', static: true },
    'src/gravity/worker': { url: '/worker' },
    src: { url: '/dist' },
  },
  plugins: [
    [
      'snowpack-plugin-raw-file-loader',
      {
        exts: ['.glsl'],
      },
    ],
    [
      'snowpack-plugin-wasm-pack',
      {
        projectPath: './wasm',
        extraArgs: ['--no-typescript'],
      },
    ],
  ],
  routes: [],
  optimize: { bundle: true },
  packageOptions: {},
  devOptions: {
    port: 9009,
  },
  buildOptions: { out: 'docs' },
}
