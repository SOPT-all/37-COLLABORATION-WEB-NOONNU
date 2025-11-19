<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
=======
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr'
>>>>>>> 338e6d1a97421d6345832d0e29b1c79608cec228

export default defineConfig({
  plugins: [
    react(),
<<<<<<< HEAD
    vanillaExtractPlugin({
      identifiers: "debug",
    }),
=======
    svgr(),
>>>>>>> 338e6d1a97421d6345832d0e29b1c79608cec228
  ],
});
