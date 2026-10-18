// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },
  components: [
    '~/components',
    {
      path: '~/components/ui',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/main.css'],
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
