import styled, { css } from "styled-components";

export const ListContainer = styled.ul`
	width: 100%;
`;

const selected = css`
	font-weight: bold;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: calc(50%);
		left: 0.75rem;
		transform: translate(-50%, -50%);

		width: 0.25rem;
		aspect-ratio: 1;
		border-radius: 100rem;
		background-color: ${(props) => props.theme.primary};
	}
`;

export const ListElement = styled.li<{ $selected: string }>`
	list-style: none;
	width: 100%;
	padding: 0.5rem 1rem;
	padding-left: 1.25rem;
	font-size: 0.875rem;
	cursor: pointer;

	${(props) => props.$selected == "true" && selected}

	&:hover {
		background-color: ${(props) => props.theme.primary}33;
	}
`;
