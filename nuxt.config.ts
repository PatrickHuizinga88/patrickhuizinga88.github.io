// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        title: 'Portfolio | Patrick Huizinga',
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
        ],
    },
  },
  css: ['../assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],
})
