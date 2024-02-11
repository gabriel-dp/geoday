import Home from "@/pages/Home";
import AppProvider from "@/contexts";

export default function App() {
	return (
		<AppProvider>
			<Home />
		</AppProvider>
	);
}
