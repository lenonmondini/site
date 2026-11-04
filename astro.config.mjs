import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configuration for Luiz Gustavo Lopes — luizgustavolopes.com.br
// Deployment to GitHub Pages with custom domain
export default defineConfig({
  site: 'https://luizgustavolopes.com.br',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
