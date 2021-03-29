import * as en from './en'
import * as pt from './pt-br'
import * as es from './es'
import * as Localization from 'expo-localization'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en,
  pt,
  es
}

i18n.use(initReactI18next).init({
  resources,
  lng: Localization.locale,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
