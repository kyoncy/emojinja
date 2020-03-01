import i18n from 'i18next';
import enTranslation from './i18n/en';
import jaTranslation from './i18n/ja';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: enTranslation },
  ja: { translation: jaTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: { escapeValue: false },
    react: { wait: true },
    resources: resources,
  }
);

export default i18n;