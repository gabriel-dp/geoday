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

