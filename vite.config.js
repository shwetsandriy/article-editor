import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/article-editor/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/articles/**/*',
          dest: 'articles'
        }
      ]
    })
  ],
  assetsInclude: ['**/*.md']
});
