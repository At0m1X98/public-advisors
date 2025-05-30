import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationCS from './locales/cs/translation.json';
import translationEN from './locales/en/translation.json';
import translationUK from './locales/uk/translation.json';

const resources = {
  cs: { translation: translationCS },
  en: { translation: translationEN },
  uk: { translation: translationUK },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'cs',
    interpolation: { escapeValue: false },
  });

export default i18n;
