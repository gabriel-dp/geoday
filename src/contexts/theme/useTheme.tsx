import { useContext } from "react";
import { ThemeContext } from "styled-components";

export default function useTheme() {
	const context = useContext(ThemeContext);
	return context;
}
