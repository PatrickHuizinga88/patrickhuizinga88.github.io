// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        title: 'Portfolio | Patrick Huizinga',
        meta: [
          { name: 'description', content: 'A front-end developer that loves doing creative things with code.' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ],
    },
  },
  nitro: {
    preset: 'github_pages',
  },
  css: ['../assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],
})
