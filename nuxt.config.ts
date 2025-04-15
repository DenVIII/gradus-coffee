import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      weatherApiKey: process.env.OPENWEATHER_API_KEY,
    },
    privateRuntimeConfig: {
      API_TOKEN: process.env.OPENWEATHER_API_KEY,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/helpers/variables" as *;
          `,
        },
      },
    },
  },

  modules: ["@nuxt/image"],

  image: {
    provider: "ipx",
    dir: "assets/images",
    width: 2560,
    height: 1440,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    format: ["webp", "jpg"],
    loading: "lazy",
  },

  compatibilityDate: "2025-03-31",
});
