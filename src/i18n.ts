import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend, { type HttpBackendOptions } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    lng: 'en',
    fallbackLng: ['en', 'ja'],
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
      addPath: `${import.meta.env.BASE_URL}/locales/add/{{lng}}/{{ns}}`,
    },
  });

export default i18n;
