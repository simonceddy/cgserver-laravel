/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/app.jsx',
        'resources/js/adminApp.jsx',
        'resources/js/shared/index.js',
        'resources/js/tiptap/index.jsx',
        'resources/js/shared/styles/index.css'
      ],
      refresh: true,
    }),
    react(),
  ],
});
