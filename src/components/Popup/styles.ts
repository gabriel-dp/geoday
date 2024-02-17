import styled from "styled-components";

export const BackgroundFilter = styled.div<{ $isOpen: string }>`
	height: 100dvh;
	width: 100dvw;
	background-color: ${(props) => props.theme.background}55;
	backdrop-filter: blur(10px);
	position: fixed;
	inset: 0;
	z-index: 1;

	visibility: ${(props) => (props.$isOpen == "true" ? "visible" : "hidden")};
	opacity: ${(props) => (props.$isOpen == "true" ? "1" : "0")};
	transition: visibility 0.25s ease-in-out, opacity 0.25s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PopupContainer = styled.div`
	height: min(calc(100% - 2rem), 30rem);
	width: min(calc(100% - 2rem), 30rem);
	border-radius: 0.5rem;
	padding: 1.5rem;
	padding-top: 2.5rem;
	background-color: ${(props) => props.theme.background};
	border: 1px solid ${(props) => props.theme.primary};
	overflow-y: auto;
	position: relative;
	text-align: center;

	h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: ${(props) => props.theme.primary};
	}

	hr {
		height: 1px;
		border: none;
		width: 100%;
		margin: 0.5rem 0;
		background-color: ${(props) => props.theme.primary};
	}

	.link {
		color: ${(props) => props.theme.primary};
		font-weight: bold;
	}
`;

export const CloseButtonContainer = styled.div`
	height: 2.5rem;
	aspect-ratio: 1;
	z-index: 1;

	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
`;
