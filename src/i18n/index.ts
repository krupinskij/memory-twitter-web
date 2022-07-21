import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: 'menu',
    debug: true,
    backend: {
      loadPath: 'src/i18n/translations/{{lng}}/{{ns}}.json',
      crossDomain: true,
    },
    detection: {
      order: ['navigator'],
    },
  });

export default i18next;
