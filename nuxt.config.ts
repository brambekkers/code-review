import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module', '@nuxt/icon', '@pinia/nuxt', 'nuxt-vuefire', '@nuxtjs/mdc'],
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
      apiKey: 'AIzaSyBPwpOPDoJ6kheG_qDYxJFdVk3PtLUrca0',
      authDomain: 'code-review-f53d6.firebaseapp.com',
      projectId: 'code-review-f53d6',
      storageBucket: 'code-review-f53d6.appspot.com',
      messagingSenderId: '328549315397',
      appId: '1:328549315397:web:e9da32c9f766b0cf24442c',
      measurementId: 'G-4C9D38WGLW',
    },
  },
});
