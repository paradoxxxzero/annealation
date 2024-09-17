import { defineConfig } from 'vite'
import wasmPack from 'vite-plugin-wasm-pack'

export default defineConfig({
  base: '',
  build: {
    minify: false,
    outDir: 'docs',
  },
  plugins: [wasmPack(['./wasm'])],
  server: {
    port: 9009,
  },
})
