import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-resume/',  // 生产环境下使用 GitHub Pages 的路径
  plugins: [react()],
});
