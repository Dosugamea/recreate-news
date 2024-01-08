import type { ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((nuxtApp) => {
  const myTheme: ThemeDefinition = {
    dark: false,
    colors: {
      // text color
      'on-background': '#764b42',
      'on-surface': '#764b42',
      background: '#FFF9F2',
      surface: '#FFFFFF',
      primary: colors.brown.darken1,
      secondary: '#FF6590',
      accent: '#719FFD',
      // pink
      info: '#ff5dc0',
      // ?
      success: '#00bcd4',
      // yellow
      warning: '#fb8c00',
      // red
      error: '#ff0000'
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
