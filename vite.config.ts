import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseUrls = {
    'pmvv': ''
  };

  return {
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, './src')
        }
      ]
    },
    base: baseUrls[mode] ?? ''
  }

})
