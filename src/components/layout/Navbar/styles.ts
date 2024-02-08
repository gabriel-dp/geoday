import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
	padding: 0 max(1rem, calc(50% - (50rem / 2)));
	border-bottom: 1px solid ${(props) => props.theme.primary}44;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const LogoContainer = styled.div`
	padding: 0 2rem;
	height: auto;
	font-size: 0.625rem;
	color: ${(props) => props.theme.primary};

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ButtonsContainer = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.25rem;

	&.right {
		justify-content: flex-end;
	}
`;

export const IconButton = styled.button`
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

