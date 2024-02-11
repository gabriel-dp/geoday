import { ConfigsProvider } from "./configs";
import { ThemeProvider } from "./theme";
import { GameProvider } from "./game";

export default function AppProvider(props: { children: React.ReactNode }) {
	return (
		<ConfigsProvider>
			<ThemeProvider>
				<GameProvider>{props.children}</GameProvider>
			</ThemeProvider>
		</ConfigsProvider>
	);
}
