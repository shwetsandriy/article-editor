import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Заміни 'username' і 'repo-name' на свої
export default defineConfig({
  base: '/article-viewer/',
  plugins: [react()],
  assetsInclude: ['**/*.md']
});