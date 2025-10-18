// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {enabled: true},
  runtimeConfig: {
    baseURL: '/25/tokiwa/', // NUXT_PUBLIC_BASE_URL によって上書きされる 公式ドキュメント参照
  },
  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL ?? "/25/tokiwa/",
    head: {
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {id: 'description', name: 'description', content: '2025常盤祭公式サイト - 横浜国立大学大学祭'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: '25常盤祭 - 横浜国立大学大学祭'},
        {property: 'og:image', content: 'https://ynu-fes.yokohama/25/tokiwa/images/OGP-thumbnail.webp'},
        {property: 'keywords', content: '常盤祭,横浜国立大学,大学祭,文化祭,横国,2025,秋,学祭,イベント,横浜'},
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.svg' },
      ],
    },
  },
  css: [
    '@/assets/css/reset.css'
  ],
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
    'nuxt-particles',
  ],
  googleFonts: {
    families: {
      'Kaisei Decol': true
    },
    preconnect: true,
    display: 'swap'
  },
  gtag: {
    id: 'G-9JJ0DXRDH4'
  },
  particles: {
    mode:'slim',
  },
})
