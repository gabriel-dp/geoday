import styled from "styled-components";

export const SettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	button {
		width: min-content;
		background-color: ${(props) => props.theme.primary};
		color: ${(props) => props.theme.primaryText};
		border-radius: 100rem;
		border: none;
		padding: 0.5rem 1.5rem;
		cursor: pointer;
	}
`;
