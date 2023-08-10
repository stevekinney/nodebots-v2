import path from 'path';
import url from 'url';
import { defineConfig } from 'vite';

const { PORT = 3000 } = process.env;

const root = url.fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#utilities': path.resolve(__dirname, './src/utilities'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
      '/socket.io': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
        ws: true,
      },
    },
  },
  publicDir: path.join(root, 'public'),
});
