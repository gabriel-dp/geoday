import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import localeEN from "@/locales/en.json";
import localePT from "@/locales/pt.json";

const resources = {
	en: { translation: localeEN },
	pt: { translation: localePT },
};

i18next.use(initReactI18next).init({
	resources,
	supportedLngs: ["en", "pt"],
	nonExplicitSupportedLngs: true,
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18next;
