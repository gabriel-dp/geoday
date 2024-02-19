import styled from "styled-components";

export const MainMapContainer = styled.div`
	position: absolute;
	inset: 0;
	outline: 1px solid ${(props) => props.theme.primary}AA;

	.leaflet-container {
		z-index: 0;
		width: 100%;
		height: 100%;
	}
`;
