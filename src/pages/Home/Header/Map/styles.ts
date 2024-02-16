import styled from "styled-components";

export const MainMapContainer = styled.div`
	position: absolute;
	inset: 0;

	.leaflet-container {
		margin: auto;
		z-index: 0;
		width: 100%;
		height: 100%;
	}
`;
