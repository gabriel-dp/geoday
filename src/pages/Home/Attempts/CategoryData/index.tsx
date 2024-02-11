import { MdOutlineLocationOn } from "react-icons/md";

import { Country } from "@/types/country";
import { approximatedNumberString, fixNumber } from "@/utils/numericUtils";
import { calculateAngle, distanceCoordinates } from "@/utils/coordinatesUtils";

import { Arrow, CategoryItem } from "./styles";

interface CategoryItemProps<T> {
	data: T;
	answer: T;
}

enum COLORS {
	wrong = "#EE4444",
	correct = "#22FF22",
	almost = "#FFFF22",
	neutral = "#6666FF",
}

export function StringCategory(props: CategoryItemProps<string>) {
	return (
		<CategoryItem $bg={props.data == props.answer ? COLORS.correct : COLORS.wrong}>
			<span>{props.data}</span>
		</CategoryItem>
	);
}

export function NumberCategory(props: CategoryItemProps<number> & { almostRange: [number, number] }) {
	const inRange = (value: number, origin: number, ratio: number) =>
		value >= origin * ratio && value <= origin * (Math.abs(1 - ratio) + 1);

	let color: COLORS = COLORS.wrong;
	if (inRange(props.data, props.answer, props.almostRange[1])) color = COLORS.correct;
	else if (inRange(props.data, props.answer, props.almostRange[0])) color = COLORS.almost;

	return (
		<CategoryItem $bg={color}>
			<span>{approximatedNumberString(props.data)}</span>
			{props.data != props.answer && <Arrow $angle={props.data > props.answer ? "180" : "0"} />}
		</CategoryItem>
	);
}

interface CategoryProps {
	country: Country;
	answer: Country;
}

export const ContinentCategory = (props: CategoryProps) => (
	<StringCategory data={props.country.data.region} answer={props.answer.data.region} />
);

export const AreaCategory = (props: CategoryProps) => (
	<NumberCategory data={props.country.data.area} answer={props.answer.data.area} almostRange={[0.5, 0.75]} />
);

export const PopulationCategory = (props: CategoryProps) => (
	<NumberCategory
		data={props.country.data.population}
		answer={props.answer.data.population}
		almostRange={[0.5, 0.75]}
	/>
);

export const DistanceCategory = (props: CategoryProps) => {
	const [data, answer] = [props.country.data.latlng, props.answer.data.latlng];

	const distance = distanceCoordinates(data, answer);
	const degrees = calculateAngle(data, props.answer.data.latlng);

	return (
		<CategoryItem $bg={data == answer ? COLORS.correct : COLORS.neutral}>
			{data != answer ? (
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

