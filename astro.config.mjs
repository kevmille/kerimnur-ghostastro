import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://kerimnur.com",
  integrations: [sitemap()],
  output: "server",
  adapter: vercel(),
});
