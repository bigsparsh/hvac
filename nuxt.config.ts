// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    // Default for first-time visitors; the user's choice is persisted in
    // localStorage under `nuxt-color-mode` and restored on every visit.
    preference: 'light',
    fallback: 'light',
    storage: 'localStorage'
  },
  components: [
    '~/components',
    {
      path: '~/components/ui',
      pathPrefix: false
    },
    {
      path: '~/components/aceternity',
      pathPrefix: false
    },
    {
      path: '~/components/magicui',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/main.css'],
  nitro: {
    externals: {
      // Bundle FontAwesome on the server: the traced CJS copy of
      // vue-fontawesome would otherwise `require` a second instance of
      // fontawesome-svg-core, and icons registered by the plugin
      // (ESM instance) wouldn't be found during SSR.
      inline: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome'
      ]
    }
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },
  runtimeConfig: {
    mail: {
      // Override with NUXT_MAIL_* env vars (see .env.example)
      host: '',
      port: '587',
      secure: 'false',
      user: '',
      pass: '',
      from: '"HVAC Services" <enquiries@example.com>',
      to: 'inbox@example.com'
    }
  }
})
