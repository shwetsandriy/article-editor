import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/article-editor/',
  plugins: [react()],
  assetsInclude: ['**/*.md']
});