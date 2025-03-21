import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'scheduled-events': '{{count}} events are scheduled.',
      },
    },
    ja: {
      translation: {
        'scheduled-events': '{{count}}個のイベントが予定されています。',
      },
    },
  },
  lng: 'en',
  fallbackLng: ['en', 'ja'],
});

export default i18n;
