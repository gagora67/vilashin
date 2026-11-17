import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    // Multi-page site: each language is its own static page/folder.
    //   index.html     → https://vilashin.com/      (English, root)
    //   hy/index.html  → https://vilashin.com/hy/   (Armenian)
    //   ru/index.html  → https://vilashin.com/ru/   (Russian)
    appType: 'mpa',
    base: '/',
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          en: path.resolve(__dirname, 'index.html'),
          hy: path.resolve(__dirname, 'hy/index.html'),
          ru: path.resolve(__dirname, 'ru/index.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
