import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import projectRoot from 'app-root-path';

const { PORT = 3000 } = process.env;

const clientServer = await createServer({
  resolve: {
    alias: {
      '@': projectRoot.resolve('./src'),
      '../utilities': projectRoot.resolve('./src/utilities'),
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
    watch: {
      ignored: ['**/node_modules', '**/.git', '**/server.js'],
    },
  },
  publicDir: projectRoot.resolve('./public'),
  css: {
    postcss: projectRoot.resolve('./postcss.config.js'),
  },
});

export const startClientServer = () =>
  clientServer.listen().then((client) => {
    console.log('🧑‍🎨 Vite is also up and running.');
    client.printUrls();
  });

export default clientServer;
