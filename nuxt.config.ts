export default defineNuxtConfig({
    app: {
        baseURL: '/it-innovo-frontend/',
        head: {
            title: 'ИННОВО',
            htmlAttrs: { lang: 'ru', dir: 'ltr' },
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Комплексные ИТ-решения для бизнеса. Цифровизация производственных процессов.' },
                { property: 'og:title', content: 'ИННОВО' },
                { property: 'og:description', content: 'Комплексные ИТ-решения для бизнеса. Цифровизация производственных процессов.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:locale', content: 'ru_RU' },
                { property: 'og:site_name', content: 'ИННОВО' },
                // { property: 'og:url', content: 'https://example.com' },
                // Превью в мессенджерах
                // { property: 'og:image', content: 'https://example.com/og.png' },
            ],
        },
    },
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    css: ['~/assets/css/main.scss'],
    modules: [
      '@nuxt/image',
      '@pinia/nuxt',
      'nuxt-headlessui'
    ],
    typescript: { typeCheck: 'build' },
    extends: [ './app/layers/visits' ]
})