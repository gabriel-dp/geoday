import { ThemeProvider as StyledComponentsProvider } from "styled-components";

import { useConfigs } from "@/contexts/configs/useConfigs";
import Global from "@/styles/global";
import { AppTheme } from "@/styles/themes";
import { LightTheme } from "@/styles/themes/themeLight";
import { DarkTheme } from "@/styles/themes/themeDark";

export function ThemeProvider(props: { children: React.ReactNode }) {
	const { darkMode } = useConfigs();
	const theme: AppTheme = darkMode ? DarkTheme : LightTheme;

	return (
		<StyledComponentsProvider theme={theme}>
			<Global theme={theme} />
			{props.children}
		</StyledComponentsProvider>
	);
}
