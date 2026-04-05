import { defineConfig } from 'vite';

export default defineConfig({
  // Вказуємо відносні шляхи для коректної роботи після збірки
  base: './', 
  build: {
    outDir: 'dist',
    minify: 'terser', // або esbuild (за замовчуванням)
  }
});