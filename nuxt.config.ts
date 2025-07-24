// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
    app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    runtimeConfig: {
      baseURL: '/', // NUXT_PUBLIC_BASE_URL によって上書きされる 公式ドキュメント参照
    },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '2025常盤祭公式サイト - 横浜国立大学の学園祭' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '25常盤祭 - 横浜国立大学大学祭' },
        { property: 'keywords', content: '常盤祭,横浜国立大学,大学祭,文化祭,横国,2025,秋,学祭,イベント,横浜' },
      ],
    },
  },
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
