import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'scheduled-events': '{{count}} events are scheduled.',
        'display-events': 'This map displays {{count}} events.',
      },
    },
    ja: {
      translation: {
        'scheduled-events': '{{count}} 個のイベントが予定されています。',
        'display-events':
          '地図上には {{count}} 個のイベントが表示されています。',
      },
    },
  },
  lng: 'en',
  fallbackLng: ['en', 'ja'],
});

export default i18n;
