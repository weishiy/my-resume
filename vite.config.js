import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-resume/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  }
})
