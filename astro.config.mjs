import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // ...
  site: "https://kerimnur.com",
  integrations: [sitemap()],
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
});
