import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/common.scss';`,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    typecheck: {
      checker: 'vue-tsc',
    },
  },
});
