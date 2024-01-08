import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: true,
  css: ['vuetify/lib/styles/main.sass', '@/styles/main.scss'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@nuxtjs/google-fonts',
    (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (!config.plugins) {
          return
        }
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  googleFonts: {
    families: {
      'Noto+Sans+JP': [400],
      Lato: [400]
    },
    display: 'swap'
  },
  typescript: {
    shim: false,
    strict: true,
    tsConfig: {
      extends: '@tsconfig/strictest/tsconfig.json',
      compilerOptions: {
        strict: true,
        noImplicitReturns: true,
        noFallthroughCasesInSwitch: true,
        noUncheckedIndexedAccess: true
      }
    }
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Sparkle News',
      titleTemplate: '%s - Sparkle News',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      link: [{ rel: 'icon', type: 'image/png', href: '/hitode.png' }],
      meta: [{ name: 'robots', content: 'noindex,nofollow,noarchive' }]
    }
  }
})
