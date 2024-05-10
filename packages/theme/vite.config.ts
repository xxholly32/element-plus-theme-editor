import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import packageJson from './package.json'

const dir = resolve(__dirname)
const name = packageJson.name.replace(/.*\//, '')

export default defineConfig({
  build: {
    outDir: resolve(dir, 'lib'),
    sourcemap: true,
    lib: {
      entry: resolve(dir, './index.ts'),
      name,
      fileName: name,
      formats: ['es', 'umd'],
    },
  },
})
