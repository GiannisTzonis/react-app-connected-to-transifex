import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import "./i18n/config";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translation: require("./locales/en/translation.json"),
    },
    es: {
      translation: require("./locales/de/translation.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "de"];

export default i18n;
