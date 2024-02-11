import { MdOutlineLocationOn } from "react-icons/md";

import { Country } from "@/types/country";
import { approximatedNumberString, fixNumber } from "@/utils/numericUtils";
import { calculateAngle, distanceCoordinates } from "@/utils/coordinatesUtils";

import { Arrow, CategoryItem } from "./styles";
import useGame from "@/contexts/game/useGame";

interface CategoryItemProps<T> {
	attempt: T;
	correct: T;
}

enum COLORS {
	wrong = "#EE4444",
	correct = "#22FF22",
	almost = "#FFFF22",
	neutral = "#6666FF",
}

export function StringCategory(props: CategoryItemProps<string>) {
	return (
		<CategoryItem $bg={props.attempt == props.correct ? COLORS.correct : COLORS.wrong}>
			<span>{props.attempt}</span>
		</CategoryItem>
	);
}

export function NumberCategory(props: CategoryItemProps<number> & { almostRange: [number, number] }) {
	const inRange = (value: number, origin: number, ratio: number) =>
		value >= origin * ratio && value <= origin * (Math.abs(1 - ratio) + 1);

	let color: COLORS = COLORS.wrong;
	if (inRange(props.attempt, props.correct, props.almostRange[1])) color = COLORS.correct;
	else if (inRange(props.attempt, props.correct, props.almostRange[0])) color = COLORS.almost;

	return (
		<CategoryItem $bg={color}>
			<span>{approximatedNumberString(props.attempt)}</span>
			{props.attempt != props.correct && <Arrow $angle={props.attempt > props.correct ? "180" : "0"} />}
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
	const { answer } = useGame();
	const [attempt, correct] = [props.country.data.latlng, answer.data.latlng];

	const distance = distanceCoordinates(attempt, correct);
	const degrees = calculateAngle(attempt, correct);

	return (
		<CategoryItem $bg={attempt == correct ? COLORS.correct : COLORS.neutral}>
			{attempt != correct ? (
				<>
					<span>{fixNumber(distance, 0)}</span>
					<Arrow $angle={degrees.toString()} />
				</>
			) : (
				<MdOutlineLocationOn className="icon" />
			)}
		</CategoryItem>
	);
};

