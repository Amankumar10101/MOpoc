import i18n from 'i18next';

// import { initReactI18next } from 'next-i18next';

import { useTranslation, initReactI18next } from "react-i18next";





i18n.use(initReactI18next).init({

  resources: {

    en: {

      translation: require('./locales/en/translations.json')

    },

    es: {

      translation: require('./locales/es/translations.json')

    }

  },

  lng: "en"

});




i18n.languages = ['en', 'es'];




export const getTranslation = () => {

  const { t } = useTranslation();

  return t;

}





export const changeLanguageToEs = () => {

  const lang = () => {

    return 'es';

  };

 

  i18n.changeLanguage(lang());  

}