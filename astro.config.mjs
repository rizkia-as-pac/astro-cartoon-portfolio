// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
// import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
  // adapter: edgeoneAdapter(),
  site: "https://rizkia-as-pac.github.io",
  base: "/portfolio/",
  output: "static",
  integrations: [react()],
});
