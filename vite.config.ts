import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      identifiers: 'debug',
    }),
    svgr(),
  ],
});
