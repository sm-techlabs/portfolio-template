import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Base path: works for GitHub Pages, forks, and custom domains
    base: env.VITE_BASE_PATH || '/',

    plugins: [react()],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    // Explicit, safe, and predictable
    define: {
      __APP_PROFILE_NAME__: JSON.stringify(env.VITE_PROFILE_NAME),
    },
  };
});
