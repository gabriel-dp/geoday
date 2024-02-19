import useLanguage from "@/contexts/language/useLanguage";
import useConfigs from "@/contexts/configs/useConfigs";

import { ConfigContainer, SettingsContainer } from "./styles";
import ThemeSwitch from "@/components/ThemeSwitch";

const LANGUAGES_OPTIONS: { [key: string]: string } = {
	en: "EN - 🇺🇸",
	pt: "PT - 🇧🇷",
};

export default function Settings() {
	const { t } = useLanguage();
	const { language, changeLanguage } = useConfigs();

	function handleSelectCountry(e: React.ChangeEvent<HTMLSelectElement>) {
		changeLanguage(e.target.value);
	}

	return (
		<SettingsContainer>
			<h1>{t`popups.settings`}</h1>
			<ConfigContainer>
				<div className="description">
					<h2>{t`configs.theme.title`}</h2>
					<p>{t`configs.theme.description`}</p>
				</div>
				<ThemeSwitch />
			</ConfigContainer>
			<ConfigContainer>
				<div className="description">
					<h2>{t`configs.language.title`}</h2>
					<p>{t`configs.language.description`}</p>
				</div>
				<select onChange={handleSelectCountry} value={language}>
					{Object.keys(LANGUAGES_OPTIONS).map((opt) => (
						<option key={opt} value={opt}>
							{LANGUAGES_OPTIONS[opt]}
						</option>
					))}
				</select>
			</ConfigContainer>
		</SettingsContainer>
	);
}
