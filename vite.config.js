// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'home/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        company: resolve(__dirname, 'company/index.html'),
      },
    },
  },
})