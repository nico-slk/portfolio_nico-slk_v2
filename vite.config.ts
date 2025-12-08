import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      // Define el alias '@' para que apunte a la raíz de tu proyecto ('/src')
      '@': path.resolve(__dirname, './src'),
    }
  }
});
