import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://yano1978.github.io/ps-basic-font-tool/',
  plugins: [react()],
});
