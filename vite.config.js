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
        'resources/js/adminApp.jsx'
      ],
      refresh: true,
    }),
    react(),
  ],
});
