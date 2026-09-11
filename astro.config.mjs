import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const includeLocalKeystatic = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: 'https://smaje.com.co',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'static',
  integrations: [react(), markdoc(), ...(includeLocalKeystatic ? [keystatic()] : [])],
  vite: {
    plugins: [tailwindcss()],
  },
});
