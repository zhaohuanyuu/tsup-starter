import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/main.ts'],
    clean: true,
    target: 'es5',
    sourcemap: true,
    splitting: false,
    format: ['cjs', 'esm']
})
