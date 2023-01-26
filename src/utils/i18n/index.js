import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnPage from "./locale/en";
import JpPage from "./locale/jp";
import KoPage from "./locale/ko";

i18n.use(initReactI18next).init({
    resources: {
        ko: {
            translations: KoPage,
        },
        en: { translations: EnPage },
        jp: { translations: JpPage },
    },
    lng: localStorage.getItem("react-i18n") || "ko",
    fallbackLng: localStorage.getItem("react-i18n") || "ko",
    defaultNS: "translations",
    ns: "translations",
    keySeparator: false,
    debug: true,
    saveMissing: true,
    interpolation: {
        escapeValue: false,
    },
    function(err) {
        if (err) console.error(err);
    },
});

export default i18n;
