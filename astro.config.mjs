import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kerimnur.com",
  integrations: [
    tailwind(),
    sitemap({
      customPages: [
        "https://kerimnur.com",
        "https://kerimnur.com/about-kerimnur",
        "https://kerimnur.com/post",
        "https://kerimnur.com/mosques",
        "https://kerimnur.com/islam-resources",
        "https://kerimnur.com/contact",
      ],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
