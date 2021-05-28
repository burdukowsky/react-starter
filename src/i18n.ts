import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { LS_LANG } from './app/globals/ls-keys';

const lsLang = localStorage.getItem(LS_LANG);

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: lsLang ? JSON.parse(lsLang) : 'ru',
    ns: ['common', 'home'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });
