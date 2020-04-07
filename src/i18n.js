import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import locales from "./locales";

i18n.use(LanguageDetector).init({
  fallbackLng: {
    default: ["SPA"],
  },
  detection: {
    order: ["localStorage"],
    lookupLocalStorage: "locale",
  },
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: locales,
  // react i18next special options (optional)
  react: {
    wait: true,
    withRef: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default",
  },
});

export const supportedCountries = ["SPA", "ENG"];

export default i18n;
