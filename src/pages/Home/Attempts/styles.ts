import styled from "styled-components";

export const TableContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 0rem calc(50% - (50rem / 2));
	overflow-y: auto;
`;

export const TableAttempts = styled.table`
	width: 100%;
`;

export const Categories = styled.tr`
	width: 100%;
	height: 4rem;
	box-shadow: 0 1rem 1rem -1.25rem #00000077;
	border-bottom: 1px solid ${(props) => props.theme.primary}22;
	position: sticky;
	top: 0;

	display: flex;
	flex-direction: row;
`;

export const Category = styled.th`
	width: 100%;
	padding: 0 1rem;
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.primary};
	font-size: 0.75rem;
	font-weight: bold;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;

	.icon {
		font-size: 1.25rem;
	}

	@media screen and (max-width: 767px) {
		font-size: 0.75rem;
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
	width: 100%;
	height: 4rem;
	margin-bottom: 1.5rem;
	padding: 0 1rem;

	display: flex;
	flex-direction: row;
`;

export const AttemptCategory = styled.td`
	width: 100%;
	flex: 1;
	font-size: 0.875rem;

	display: flex;
	align-items: center;
	justify-content: center;
`;

