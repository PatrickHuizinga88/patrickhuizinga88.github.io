// import MetaImage from './assets/images/intro.jpg'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
        title: 'Portfolio | Patrick Huizinga',
        meta: [
          { name: 'description', content: 'A front-end developer that loves doing creative things with code.' },
          { name: 'og:image', content: 'https://patrickhuizinga.nl/intro.jpg' }
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
