// import { readFileSync } from 'node:fs';
// import { dirname, resolve } from 'node:path';
// import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  cacheDir: './public/vite',
  plugins: [react(), tsconfigPaths()],
  // Uncomment the next lines in case, you would like to run Vite dev server using HTTPS and in case,
  // you have key and certificate. You retrieve your certificate and key using mkcert.
  // Learn more:
  // https://docs.telegram-mini-apps.com/platform/getting-app-link#mkcert
  //
  server: {
    port: 3000,
    host: '0.0.0.0',
    watch: {
      usePolling: true
    }
  },
  // server: {
  //   port: 443,
  //   https: {
  //     cert: readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), './ssl/server.cert')),
  //     key: readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), './ssl/server.key')),
  //   },
  //   host: 't2c.docker',
  // },
  publicDir: './public',
});

