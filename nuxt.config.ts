// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
  ],
  modules: [
    '@nuxt/image',
    'nuxt-aos',
    'nuxt-twemoji',
  ],
  image: {
    quality: 90,
    format: ['webp'],
    
  }
})
