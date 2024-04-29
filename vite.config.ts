import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { imagetools } from 'vite-imagetools'

installGlobals();

export default defineConfig({
  plugins: [imagetools(), remix(), tsconfigPaths()],
});
