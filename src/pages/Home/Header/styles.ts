import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
	height: 3rem;
	padding: 0 max(1rem, calc(50% - (50rem / 2)));
	border-bottom: 1px solid ${(props) => props.theme.primary}44;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const LogoContainer = styled.div`
	padding: 0.75rem 1rem;
	height: 100%;
	font-size: 0.625rem;
	color: ${(props) => props.theme.primary};

	display: flex;
	justify-content: center;
	align-items: center;

	* {
		transition: all 0.25s ease-in-out;
	}

	img {
		max-height: 100%;
		object-fit: contain;
	}
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
