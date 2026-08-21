// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://hardcasegitar.com',
  integrations: [mdx(), sitemap()],

  // Inter is fetched at build time and self-hosted — no render-blocking
  // third-party request at runtime. Weights match the design tokens:
  // 400 body, 500 nav, 600 semibold/buttons, 700 bold, 800 headings, 900 display.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700, 800, 900],
      styles: ['normal'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
