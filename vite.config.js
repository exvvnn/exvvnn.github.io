import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/exvvnn.github.io/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    open: true,
    port: 5173
  }
});
