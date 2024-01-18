// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
        title: 'Portfolio | Patrick Huizinga',
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
        ],
    },
  },
  nitro: {
    preset: 'github_pages',
  },
  css: ['../assets/css/main.css'],
  modules: [
    '@vueuse/motion/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
