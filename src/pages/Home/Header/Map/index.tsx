import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

import useTheme from "@/contexts/theme/useTheme";

import { MainMapContainer } from "./styles";

const MAP_BOUNDS = new L.LatLngBounds(
	new L.LatLng(-90, -180), // Southwest corner of the world
	new L.LatLng(90, 180) // Northeast corner of the world
);

export default function Map() {
	const theme = useTheme();

	return (
		<MainMapContainer>
			<MapContainer center={[0, 0]} zoom={0} maxBounds={MAP_BOUNDS} maxBoundsViscosity={1} minZoom={1} fadeAnimation>
				<TileLayer url={theme?.map} noWrap />
			</MapContainer>
		</MainMapContainer>
	);
}
