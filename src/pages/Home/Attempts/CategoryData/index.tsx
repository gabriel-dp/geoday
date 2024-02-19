import { MdOutlineLocationOn } from "react-icons/md";

import useGame from "@/contexts/game/useGame";
import useTheme from "@/contexts/theme/useTheme";
import useLanguage from "@/contexts/language/useLanguage";
import { Country } from "@/types/country";
import { approximatedNumberString, fixNumber } from "@/utils/numericUtils";
import { calculateAngle, distanceCoordinates } from "@/utils/coordinatesUtils";

import { Arrow, CategoryItem } from "./styles";

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
	const { t } = useLanguage();
	const {
		data: { dictionary, answer },
	} = useGame();

	const attemptContinent = t(`continents.${props.country.data.region.toLowerCase()}` as const);
	const correctContinent = t(`continents.${dictionary[answer].data.region.toLowerCase()}` as const);

	return <StringCategory attempt={attemptContinent} correct={correctContinent} />;
};

export const AreaCategory = (props: CategoryProps) => {
	const {
		data: { dictionary, answer },
	} = useGame();

	return (
		<NumberCategory
			attempt={props.country.data.area}
			correct={dictionary[answer].data.area}
			almostRange={[0.5, 0.75]}
		/>
	);
};

export const PopulationCategory = (props: CategoryProps) => {
	const {
		data: { dictionary, answer },
	} = useGame();

	return (
		<NumberCategory
			attempt={props.country.data.population}
			correct={dictionary[answer].data.population}
			almostRange={[0.5, 0.75]}
		/>
	);
};

export const DistanceCategory = (props: CategoryProps) => {
	const { t } = useLanguage();
	const { correct, neutral } = useTheme()!;

	const {
		data: { dictionary, answer },
	} = useGame();

	const [attemptLatLng, correctLatLng] = [props.country.data.latlng, dictionary[answer].data.latlng];

	const distance = distanceCoordinates(attemptLatLng, correctLatLng);
	const degrees = calculateAngle(attemptLatLng, correctLatLng);
	const isBorder = props.country.data.borders?.some((border) => border == answer);

	return (
		<CategoryItem $bg={distance == 0 ? correct : neutral}>
			{distance == 0 ? (
				<MdOutlineLocationOn className="icon" />
			) : isBorder ? (
				<span>{t`border`}</span>
			) : (
				<span>{fixNumber(distance, 0)}</span>
			)}
			{distance != 0 && <Arrow $angle={degrees.toString()} $distance="far" />}
		</CategoryItem>
	);
};
