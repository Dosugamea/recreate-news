import { globSync } from 'glob'
import vuetify from 'vite-plugin-vuetify'

const getContentRoutes = (): string[] => {
  const routeNames = globSync('src/content/**/*.md').map((f) =>
    f.replaceAll('\\', '/').replaceAll('src/content', '').replace('.md', '')
  )
  const extraRoutes = [
    '/ja/maintenance',
    '/ja/update',
    '/ja/information',
    '/en/maintenance',
    '/en/update',
    '/en/information'
  ]
  return [...routeNames, ...extraRoutes]
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: true,
  css: ['@/styles/main.scss'],
  build: {
    transpile: ['vuetify']
  },
  nitro: {
    prerender: {
      routes: getContentRoutes()
    }
  },
  content: {
    markdown: {
      remarkPlugins: ['remark-breaks']
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
    strategy: 'prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'ja', iso: 'ja-JP' }
    ],
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
    baseURL: import.meta.env.GITHUB_ACTIONS ? '/recreate-news/' : undefined,
    cdnURL: import.meta.env.GITHUB_ACTIONS
      ? 'https://dosugamea.github.io/recreate-news/'
      : undefined,
    buildAssetsDir: 'assets',
    head: {
      title: 'Sparkle News',
      titleTemplate: '%s - Sparkle News',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      charset: 'utf-8',
      link: [{ rel: 'icon', type: 'image/png', href: '/hitode.png' }],
      meta: [{ name: 'robots', content: 'noindex,nofollow,noarchive' }]
    }
  }
})
