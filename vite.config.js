import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: '/article-editor/',
  plugins: [
    react(),
    {
      ...copy({
        targets: [
          { src: 'articles/*.md', dest: 'dist/articles' }
        ],
        hook: 'writeBundle'
      }),
      apply: 'build'
    }
  ],
  assetsInclude: ['**/*.md']
});
