import styled from "styled-components";

export const Button = styled.button`
	height: 100%;
	max-width: 100%;
	aspect-ratio: 1;
	padding: 0.75rem 0.5rem;
	cursor: pointer;
	border: none;
	background-color: transparent;

	display: flex;
	align-items: center;
	justify-content: center;

	* {
		font-size: 1.5rem;
		color: ${(props) => props.theme.primary};
		transition: color 0.25s ease;
	}

	&:hover {
		* {
			color: ${(props) => props.theme.primaryHighlight};
		}
	}
`;

