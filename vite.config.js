import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-redirects',
      writeBundle() {
        const src = join(process.cwd(), '_redirects')
        const dest = join(process.cwd(), 'dist', '_redirects')
        if (existsSync(src)) {
          copyFileSync(src, dest)
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
