import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Change this to your final domain (Cloudflare Pages subdomain or custom domain)
  site: 'https://my-portfolio-nov-21-2026.pages.dev',
  output: 'static',
  integrations: [tailwind(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});