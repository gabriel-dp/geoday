import { DefaultTheme } from "styled-components";

export type HexColor = `#${string}`;

export interface AppTheme extends DefaultTheme {
	logo: string;
	map: string;
	primary: HexColor;
	primaryText: HexColor;
	primaryHighlight: HexColor;
	text: HexColor;
	background: HexColor;
	light: HexColor;
	dark: HexColor;
	correct: HexColor;
	almost: HexColor;
	wrong: HexColor;
	neutral: HexColor;
}
