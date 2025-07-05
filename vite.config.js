// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/IMDB-CLONE/', // ← THIS IS CRITICAL
  plugins: [react()],
})
