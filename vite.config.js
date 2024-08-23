import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/my-resume/' : './',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  }
})
