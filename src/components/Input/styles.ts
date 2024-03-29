import styled from "styled-components";

export const SearchContainer = styled.div.attrs({
	className: "search",
})`
	width: 100%;
	height: 100%;
	border-radius: 100rem;
	border: 1px solid ${(props) => props.theme.primary}AA;
	background-color: ${(props) => props.theme.background};
	overflow: hidden;

	display: flex;
	flex-direction: row;

	&,
	* {
		transition: all 0.25s ease-in-out;
	}
`;

export const SearchInput = styled.input`
	height: 100%;
	flex-grow: 1;
	padding: 0 1rem;
	background-color: transparent;
	border: none;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: ${(props) => props.theme.text};

	&::placeholder {
		opacity: 0.5;
		color: ${(props) => props.theme.text};
	}
`;

export const ButtonContainer = styled.div`
	height: 100%;
	aspect-ratio: 1;
	border-radius: 50%;
	background-color: ${(props) => props.theme.primary};

	* {
		color: ${(props) => props.theme.primaryText};
		padding: 0;
		font-size: 1rem;
	}

	&:hover {
		background-color: ${(props) => props.theme.primaryHighlight};
		* {
			color: ${(props) => props.theme.primaryText};
		}
	}
`;
