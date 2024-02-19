import styled from "styled-components";

export const HintsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.hint {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;

		.description {
			text-align: left;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			gap: 0.25rem;

			h2 {
				font-size: 1.25rem;
				color: ${(props) => props.theme.primary};
			}

			p {
				font-size: 0.875rem;
				opacity: 0.75;
			}
		}

		.answer {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.25rem;

			img {
				max-height: 2.5rem;
				pointer-events: none;
			}
		}
	}
`;
