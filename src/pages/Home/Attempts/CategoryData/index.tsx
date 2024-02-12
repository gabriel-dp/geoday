import { MdOutlineLocationOn } from "react-icons/md";

import { Country } from "@/types/country";
import { approximatedNumberString, fixNumber } from "@/utils/numericUtils";
import { calculateAngle, distanceCoordinates } from "@/utils/coordinatesUtils";

import { Arrow, CategoryItem } from "./styles";
import useGame from "@/contexts/game/useGame";
import { useTheme } from "@/contexts/theme/useTheme";

interface CategoryItemProps<T> {
	attempt: T;
	correct: T;
}

export function StringCategory(props: CategoryItemProps<string>) {
	const { correct, wrong } = useTheme()!;

	return (
		<CategoryItem $bg={props.attempt == props.correct ? correct : wrong}>
			<span>{props.attempt}</span>
		</CategoryItem>
	);
}

export function NumberCategory(props: CategoryItemProps<number> & { almostRange: [number, number] }) {
	const { correct, almost, wrong } = useTheme()!;

	const inRange = (value: number, origin: number, ratio: number) =>
		value >= origin * ratio && value <= origin * (Math.abs(1 - ratio) + 1);

	let color = wrong;
	if (inRange(props.attempt, props.correct, props.almostRange[1])) color = correct;
	else if (inRange(props.attempt, props.correct, props.almostRange[0])) color = almost;

	return (
		<CategoryItem $bg={color}>
			<span>{approximatedNumberString(props.attempt)}</span>
			{props.attempt != props.correct && (
				<Arrow $angle={props.attempt > props.correct ? "180" : "0"} $distance="near" />
			)}
		</CategoryItem>
	);
}

interface CategoryProps {
	country: Country;
}

export const ContinentCategory = (props: CategoryProps) => {
	const { answer } = useGame();
	return <StringCategory attempt={props.country.data.region} correct={answer.data.region} />;
};

export const AreaCategory = (props: CategoryProps) => {
	const { answer } = useGame();
	return <NumberCategory attempt={props.country.data.area} correct={answer.data.area} almostRange={[0.5, 0.75]} />;
};

export const PopulationCategory = (props: CategoryProps) => {
	const { answer } = useGame();
	return (
		<NumberCategory
			attempt={props.country.data.population}
			correct={answer.data.population}
			almostRange={[0.5, 0.75]}
		/>
	);
};

export const DistanceCategory = (props: CategoryProps) => {
	const { correct, neutral } = useTheme()!;

	const { answer } = useGame();
	const [attemptLatLng, correctLatLng] = [props.country.data.latlng, answer.data.latlng];

	const distance = distanceCoordinates(attemptLatLng, correctLatLng);
	const degrees = calculateAngle(attemptLatLng, correctLatLng);

	return (
		<CategoryItem $bg={attemptLatLng == correctLatLng ? correct : neutral}>
			{attemptLatLng != correctLatLng ? (
				<>
					<span>{fixNumber(distance, 0)}</span>
					<Arrow $angle={degrees.toString()} $distance="far" />
				</>
			) : (
				<MdOutlineLocationOn className="icon" />
			)}
		</CategoryItem>
	);
};
