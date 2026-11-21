import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://my-portfolio-nov-21-2026.pages.dev',
  output: 'static',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
    compressHTML: true,
  },
});