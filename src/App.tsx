import { ThemeProvider } from "styled-components";

import Home from "@/pages/Home";
import GlobalStyle from "@/styles/global";
import { AppTheme } from "./styles/themes";
import { LightTheme } from "@/styles/themes/themeLight";

export default function App() {
	const theme: AppTheme = LightTheme;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle theme={theme} />
			<Home />
		</ThemeProvider>
	);
}

