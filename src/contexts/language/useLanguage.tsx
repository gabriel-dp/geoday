import { useTranslation } from "react-i18next";

export default function useLanguage() {
	const { t, i18n } = useTranslation();
	return { t, i18n };
}
