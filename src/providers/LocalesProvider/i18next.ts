import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import Languagedetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: {
      changeTheme: "Change theme",
      genders: "Gender",
      results: "Results",
      nationality: "Nationality",
      female: "Female",
      male: "Male",
      phone: "Phone",
      email: "Email",
    },
  },
  ru: {
    translation: {
      changeTheme: "Изменить тему",
      genders: "Пол",
      results: "Результаты",
      nationality: "Национальность",
      female: "Женский",
      male: "Мужской",
      phone: "Телефон",
      email: "Почта",
    },
  },
};

i18n
  .use(Languagedetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng:'en',
    resources,
    debug: false,
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;