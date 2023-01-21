import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
export const ghostClient = new GhostContentAPI({
  url: "https://my.kerimnur.com",
  key: import.meta.env.CONTENT_API_KEY,
  version: "v5.0",
});