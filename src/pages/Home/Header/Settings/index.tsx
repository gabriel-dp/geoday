import { useConfigs } from "@/contexts/configs/useConfigs";

import { ConfigContainer, SettingsContainer } from "./styles";

const LANGUAGES_OPTIONS: { [key: string]: string } = {
	en: "🇺🇸 - EN",
	pt: "🇧🇷 - PT",
};

export default function Settings() {
	const { toggleTheme, language, changeLanguage } = useConfigs();

	function handleSelectCountry(e: React.ChangeEvent<HTMLSelectElement>) {
		changeLanguage(e.target.value);
	}

	return (
		<SettingsContainer>
			<h1>Settings</h1>
			<ConfigContainer>
				<div className="description">
					<h2>Theme</h2>
					<p>Change the appearence</p>
				</div>
				<button onClick={toggleTheme}>theme</button>
			</ConfigContainer>
			<ConfigContainer>
				<div className="description">
					<h2>Language</h2>
					<p>Select the best language for you</p>
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
