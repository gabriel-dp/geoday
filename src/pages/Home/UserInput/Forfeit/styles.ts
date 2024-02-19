import styled from "styled-components";

export const ForfeitContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	button {
		width: max-content;
		background-color: ${(props) => props.theme.background};
		border: 1px solid ${(props) => props.theme.primary};
		color: ${(props) => props.theme.primary};
		border-radius: 100rem;
		padding: 0.5rem 1.5rem;
		cursor: pointer;
		transition: all 0.25s ease-in-out;

		&:hover {
			background-color: ${(props) => props.theme.primary};
			color: ${(props) => props.theme.primaryText};
		}
	}
`;
