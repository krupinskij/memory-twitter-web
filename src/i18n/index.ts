import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import Backend from 'i18next-http-backend';

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    ns: 'menu',
    debug: true,
    backend: {
      loadPath: 'src/i18n/translations/{{lng}}/{{ns}}.json',
      crossDomain: true,
    },
  });

export default i18next;
