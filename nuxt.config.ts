import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', // '@unocss/nuxt',
  '@pinia/nuxt', // '@nuxtjs/color-mode',
  '@vite-pwa/nuxt', '@nuxthq/ui', 'nuxt-lodash'],

  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons']
  },

  // experimental: {
  //   // when using generate, payload js assets included in sw precache manifest
  //   // but missing on offline, disabling extraction it until fixed
  //   payloadExtraction: false,
  //   inlineSSRStyles: false,
  //   renderJsonPayloads: true,
  // },

  // css: [
  //   '@unocss/reset/tailwind.css',
  // ],

  // colorMode: {
  //   classSuffix: '',
  // },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found

  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    // prerender: {
    //   crawlLinks: false,
    //   routes: ['/'],
    //   ignore: ['/hi'],
    // },
    storage: {
      data: { driver: 'vercelKV' },
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },
})