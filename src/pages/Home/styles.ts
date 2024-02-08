import styled from "styled-components";

export const MainContainer = styled.div`
	width: 100%;
	min-height: 100dvh;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const BodyContent = styled.div`
	width: 100%;
	flex: 1;
`;

export const UserInteractContainer = styled.div`
	width: 100%;
	padding: 0.5rem max(1rem, calc(50% - (50rem / 2)));
	border: 1px solid ${(props) => props.theme.primary}AA;
	position: relative;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;

	.search {
		height: 2.5rem;
		max-width: 30rem;
		min-width: 5rem;
		margin: auto;
	}
`;

export const CountryListContainer = styled.div`
	width: min(calc(100% - 3rem), 30rem);
	height: min(25vh, 10rem);
	border-radius: 0.5rem;
	border: 1px solid ${(props) => props.theme.primary}AA;
	background-color: ${(props) => props.theme.light};

	position: absolute;
	left: 50%;
	bottom: calc(100% + 0.5rem);
	transform: translateX(-50%);
`;

