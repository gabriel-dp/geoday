import { useConfigs } from "@/contexts/configs/useConfigs";

import { SettingsContainer } from "./styles";

export default function Settings() {
	const { toggleTheme } = useConfigs();

	return (
		<SettingsContainer>
			<h1>Settings</h1>
			<button onClick={toggleTheme}>theme</button>
		</SettingsContainer>
	);
}
