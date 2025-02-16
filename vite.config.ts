import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Ensure correct public path for GitHub Pages deployment
export default defineConfig({
  base: '/east-institute/', // ✅ Set base to your repository name
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: 'dist', // Ensure Vite outputs to `dist/`
    sourcemap: false,
  },
  server: {
    host: true,
    port: 5173, // Ensure local development works
  },
})
