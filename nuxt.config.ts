import Aura from '@primevue/themes/aura';
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  ssr: false,
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4,
  },
  srcDir: 'src/',
  devtools: { enabled: true },
  imports: {
    dirs: ['stores'],
  },
  runtimeConfig: {
    public: {
      currentVersion: process.env.CURRENT_VERSION || 'dev'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'nuxt-vuefire'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
          cssLayer: false,
        },
      },
    },
  },
  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: "AIzaSyBBRQ3qdWfVW4KD3Lg8yM4lbTW-y1NOjj8",
      authDomain: "code-review-8419e.firebaseapp.com",
      projectId: "code-review-8419e",
      storageBucket: "code-review-8419e.firebasestorage.app",
      messagingSenderId: "506740216853",
      appId: "1:506740216853:web:32ca32859fcef473312a1c"
    },
  },
});
