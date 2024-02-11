import AppProvider from "@/contexts";
import Home from "@/pages/Home";

export default function App() {
	return (
		<AppProvider>
			<Home />
		</AppProvider>
	);
}
