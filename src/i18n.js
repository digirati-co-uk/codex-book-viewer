import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import path from "path";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ['en'],
    locales: ['en', 'es'],
    nsSeparator: ':',
    ns: ['common'],
    interpolation: {
      escapeValue: false
    },
    debug: false,
  });


export default i18n;