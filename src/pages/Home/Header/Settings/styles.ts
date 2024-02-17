import styled from "styled-components";

export const SettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
`;

export const ConfigContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	.description {
		display: flex;
		flex-direction: column;
		text-align: left;
		gap: 0.25rem;

		h2 {
			font-size: 1.125rem;
			color: ${(props) => props.theme.primary};
		}

		p {
			font-size: 0.875rem;
		}
	}

	button {
		width: min-content;
		background-color: ${(props) => props.theme.background};
		border: 1px solid ${(props) => props.theme.primary};
		color: ${(props) => props.theme.primary};
		border-radius: 100rem;
		padding: 0.5rem 1.5rem;
		cursor: pointer;
	}

	select {
		appearance: none;
		background-color: ${(props) => props.theme.background};
		border: 1px solid ${(props) => props.theme.primary};
		border-radius: 100rem;
		padding: 0.5rem 1.5rem;
		color: ${(props) => props.theme.primary};
		cursor: pointer;

		* {
			font-size: 1rem;
		}
	}
`;
