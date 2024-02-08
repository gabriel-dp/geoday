import styled from "styled-components";

export const ListContainer = styled.ul`
	width: 100%;
	max-height: 100%;
	overflow-y: auto;
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

