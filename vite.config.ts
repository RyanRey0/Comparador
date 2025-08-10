import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< Updated upstream
  base: '/comparador/',
  build: { outDir: 'docs' }
})
=======
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
>>>>>>> Stashed changes
