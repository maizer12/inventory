import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationUA from './locales/ua.json';
import translationEN from './locales/en.json';

const detectedLanguage = localStorage.getItem('i18nextLng') || 'ua';

const resources = {
  ua: {
    translation: translationUA,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: detectedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
