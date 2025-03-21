import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/python-events/',
  define: {
    BUILD_TIMESTAMP: JSON.stringify(new Date().toISOString()),
  },
});
