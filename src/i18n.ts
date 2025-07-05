import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import el from "./locales/el.json";

i18n
  .use(Backend)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass to react-i18next
  .init({
    fallbackLng: "gr",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      gr: { translation: el },
    },
    react: {
      useSuspense: false, // true by default - for async loading
    },
  });

export default i18n;
