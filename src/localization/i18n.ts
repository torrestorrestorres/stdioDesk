import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                title: "Home Page",
                description: "This is an example of translation in en",
                homeButton: "Continue",
            },
        },
        "pt-DE": {
            translation: {
                title: "Startseite",
                description: "Das ist ein Beispiel für Übersetzung in de",
                homeButton: "Fortsetzen",
            },
        },

    },
});
