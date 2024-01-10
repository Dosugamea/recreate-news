import { globSync } from 'glob'
import vuetify from 'vite-plugin-vuetify'

const getContentRoutes = (): string[] => {
  const routeNames = globSync('src/content/**/*.md').map((f) =>
    f
      .replaceAll('\\', '/')
      .replaceAll('src/content', '')
      .replace('.md', '')
      .replaceAll('/en', '')
      .replaceAll('/ja', '')
  )
  return [...routeNames]
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: true,
  css: ['vuetify/lib/styles/main.sass', '@/styles/main.scss'],
  build: {
    transpile: ['vuetify']
  },
  nitro: {
    prerender: {
      routes: getContentRoutes()
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    '@nuxtjs/i18n',
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
      Lato: [400]
    },
    display: 'swap'
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'ja',
        iso: 'ja-JP'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    vueI18n: './i18n.config.ts'
  },
  typescript: {
    shim: false,
    strict: true,
    tsConfig: {
      compilerOptions: {
        strict: true,
        noImplicitReturns: true,
        noFallthroughCasesInSwitch: true
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
