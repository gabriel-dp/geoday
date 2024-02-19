import { createContext, useEffect } from "react";

import useLanguage from "@/contexts/language/useLanguage";
import useStoredState from "@/hooks/useStoredState";
import { darkThemePreferred, getPreferredLanguage } from "@/utils/browserUtils";

interface StoredConfigs {
	darkMode: boolean;
	language: string;
}

interface ConfigsContextI extends StoredConfigs {
	toggleTheme: () => void;
	changeLanguage: (newLanguage: string) => void;
}

export const ConfigsContext = createContext<ConfigsContextI>({} as ConfigsContextI);

export function ConfigsProvider(props: { children: React.ReactNode }) {
	const { i18n } = useLanguage();
	const [configs, setConfigs] = useStoredState<StoredConfigs>("configs", {
		darkMode: darkThemePreferred(),
		language: getPreferredLanguage(),
	});

	const { darkMode, language } = configs;

	// Set the language using the saved in configs
	useEffect(() => {
		i18n.changeLanguage(language);
	}, [i18n, language]);

	const toggleTheme = () => {
		setConfigs((config) => ({
			...config,
			darkMode: !config.darkMode,
		}));
	};

	const changeLanguage = (newLanguage: string) => {
		setConfigs((config) => ({
			...config,
			language: newLanguage,
		}));
	};

	return (
		<ConfigsContext.Provider value={{ darkMode, language, toggleTheme, changeLanguage }}>
			{props.children}
		</ConfigsContext.Provider>
	);
}
