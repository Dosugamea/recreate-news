import type { ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((nuxtApp) => {
  const myTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#FFF9F2',
      surface: '#FFFFFF',
      primary: colors.brown.darken1,
      secondary: '#FF6590',
      accent: '#719FFD',
      error: '#f44336',
      info: '#4caf50',
      success: '#00bcd4',
      warning: '#ff9800'
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
