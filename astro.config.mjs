import { defineConfig } from 'astro/config';
import path from 'node:path';

export default defineConfig({
  site: import.meta.env.PUBLIC_SITE_URL || 'https://sayan-portfolio.netlify.app',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  legacy: {
    collectionsBackwardsCompat: true,
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
  build: {
    client: 'dist/client',
    server: 'dist/server',
  },
});
