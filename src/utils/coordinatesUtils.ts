export type Coordinates = [number, number];

function toRadians(degrees: number): number {
	return degrees * (Math.PI / 180);
}

export const distanceCoordinates = (coords1: Coordinates, coords2: Coordinates): number => {
	// Convert latitude and longitude to radians
	const [lat1Rad, lon1Rad] = coords1.map(toRadians);
	const [lat2Rad, lon2Rad] = coords2.map(toRadians);

	// Calculate differences
	const latD = lat2Rad - lat1Rad;
	const lonD = lon2Rad - lon1Rad;

	// Haversine formula
	const a =
		Math.sin(latD / 2) * Math.sin(latD / 2) +
		Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonD / 2) * Math.sin(lonD / 2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	// Earth radius in kilometers
	const PLANET_RADIUS = 6371;

	// Calculate distance
	const d = PLANET_RADIUS * c;

	return d;
};

export const calculateAngle = (coords1: Coordinates, coords2: Coordinates): number => {
	const [lat1Rad, lon1Rad] = coords1.map(toRadians);
	const [lat2Rad, lon2Rad] = coords2.map(toRadians);

	const dLon = lon2Rad - lon1Rad;

	const y = Math.sin(dLon) * Math.cos(lat2Rad);
	const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) - Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);

	const angle = Math.atan2(y, x);

	return (angle * 180) / Math.PI; // Convert angle from radians to degrees
};

