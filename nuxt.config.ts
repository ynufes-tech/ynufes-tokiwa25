// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '@/assets/css/reset.css'
  ],
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Kaisei Decol': true    
    },
    preconnect: true,
    display: 'swap'
  }
})
