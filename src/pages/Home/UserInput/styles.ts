import styled from "styled-components";

export const UserInteractContainer = styled.div`
	width: 100%;
	padding: 0.5rem max(1rem, calc(50% - (50rem / 2)));
	border-top: 1px solid ${(props) => props.theme.primary}AA;
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
	max-height: min(25vh, 10rem);
	overflow-y: auto;

	border-radius: 0.5rem;
	border: 1px solid ${(props) => props.theme.primary}AA;
	background-color: ${(props) => props.theme.background};
	filter: drop-shadow(0 0 0.5rem ${(props) => props.theme.dark}55);

	position: absolute;
	left: 50%;
	bottom: calc(100% + 0.5rem);
	transform: translateX(-50%);
`;

export const ListContainer = styled.ul`
	width: 100%;
	padding: 0.25rem 0;
`;

export const ListElement = styled.li`
	list-style: none;
	width: 100%;
	padding: 0.5rem 1rem;
	font-size: 0.875rem;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.primary}33;
	}
`;
