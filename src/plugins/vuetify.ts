import type { ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default defineNuxtPlugin((nuxtApp) => {
  const myTheme: ThemeDefinition = {
    dark: false,
    colors: {
      // brown (text color)
      'on-background': '#764b42',
      'on-surface': '#764b42',
      background: '#FFF9F2',
      surface: '#FFFFFF',
      primary: '#7e4940',
      secondary: '#FF6590',
      accent: '#719FFD',
      // pink
      info: '#ff5dc0',
      // ?
      success: '#00bcd4',
      // yellow
      warning: '#fb8c00',
      // red
      error: '#ff0000',
      // news
      'news-wrap': '#7e4940',
      'news-base': '#fffde5'
    }
  }

  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'myTheme',
      themes: {
        myTheme
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
