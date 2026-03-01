import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://masatoarnold.dev",
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
  i18n: {
		locales: ["de", "en"],
		defaultLocale: "de",
		fallback: {
			en: "de",
		},
		routing: {
			fallbackType: "rewrite",
		},
	},
});
