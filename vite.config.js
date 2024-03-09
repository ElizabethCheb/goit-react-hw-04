// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['node:fs', 'node:path', 'node:process'],
    },
  },
});
