import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "200.html", // Use '200.html' if you need a SPA fallback, or 'index.html' for static pages
    }),
    paths: {
      base: dev ? "" : "/neko-dreams", // Ensure this matches your GitHub repo name
    },
    prerender: {
      entries: ["*"], // Prerender all routes
    },
  },
};

export default config;
