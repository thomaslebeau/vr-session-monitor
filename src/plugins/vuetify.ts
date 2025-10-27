import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Couleurs Reality Academy (violet)
export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'realityTheme',
    themes: {
      realityTheme: {
        dark: false,
        colors: {
          primary: '#7B2CBF',      // Violet Reality Academy
          secondary: '#9D4EDD',    // Violet clair
          accent: '#C77DFF',       // Violet pastel
          background: '#F8F7FC',   // Fond très clair
          surface: '#FFFFFF',
          error: '#EF4444',
          info: '#3B82F6',
          success: '#10B981',
          warning: '#F59E0B',
        }
      }
    }
  }
})