import styled from "styled-components";

export const TableContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 0rem calc(50% - (50rem / 2));
	overflow-y: auto;

	thead {
		position: sticky;
		top: 0;
	}

	* {
		transition: all 0.25s ease-in-out;
	}
`;

export const TableAttempts = styled.table`
	width: 100%;
`;

export const Categories = styled.tr`
	width: 100%;
	height: 5rem;
	padding: 0 1rem;
	box-shadow: 0 1rem 1rem -1.25rem #00000077;
	border-bottom: 1px solid ${(props) => props.theme.primary}22;

	display: flex;
	flex-direction: row;
`;

export const Category = styled.th`
	width: 100%;
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.primary};
	font-size: 0.75rem;
	font-weight: bold;
	white-space: nowrap;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;

	.icon {
		font-size: 1.25rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 0.625rem;
	}
`;

export const CountryName = styled.td`
	color: ${(props) => props.theme.primary};
	font-size: 0.875rem;
	margin-top: 1rem;
	margin-bottom: 0.5rem;
	padding: 0 1rem;

	display: flex;
	flex-direction: row;
	gap: 0.5rem;
`;

export const Attempt = styled.tr`
	height: 5rem;
	margin-bottom: 1.5rem;
	padding: 0 1rem;

	display: flex;
	flex-direction: row;
	gap: 0rem;

	@media screen and (max-width: 480px) {
		height: 4.5rem;
	}
`;

export const AttemptCategory = styled.td`
	height: 100%;
	width: 100%;
	aspect-ratio: 1;
	font-size: 0.875rem;
	z-index: -1;

	display: flex;
	align-items: center;
	justify-content: center;
`;
