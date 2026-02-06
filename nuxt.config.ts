export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    css: ['~/assets/css/main.scss'],
    modules: [
      '@nuxt/image',
      '@pinia/nuxt',
      'nuxt-headlessui'
    ],
    typescript: { typeCheck: 'build' },
    extends: [ './app/layers/demo' ]
})