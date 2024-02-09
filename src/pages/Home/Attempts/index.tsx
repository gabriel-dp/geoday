import { Fragment } from "react";
import { MdOutlineGroups, MdPhotoSizeSelectSmall, MdOutlineExplore, MdOutlinePublic } from "react-icons/md";

import { Country } from "@/types/country";

import { Attempt, AttemptCategory, Categories, Category, CountryName, TableAttempts, TableContainer } from "./styles";

interface AttemptsProps {
	attempts: Country[];
}

export default function Attempts(props: AttemptsProps) {
	const CATERGORIES = [
		{ name: "Continent", color: "#FF2222", icon: MdOutlinePublic },
		{ name: "Area", color: "#22FF22", icon: MdPhotoSizeSelectSmall },
		{ name: "Population", color: "#FFFF22", icon: MdOutlineGroups },
		{ name: "Location", color: "#2222FF", icon: MdOutlineExplore },
	];

	const attemptsBody = props.attempts.map((attempt) => [
		attempt.data.region,
		attempt.data.area,
		attempt.data.population,
		attempt.data.latlng,
	]);

	return (
		<TableContainer>
			<TableAttempts>
				<Categories>
					{CATERGORIES.map((category) => (
						<Category key={category.name} bg={category.color}>
							<category.icon className="icon" />
							<p>{category.name}</p>
						</Category>
					))}
				</Categories>
				{props.attempts.map((attempt, index) => (
					<Fragment key={index + attempt.name.exact}>
						<CountryName>
							<span>{index + 1})</span>
							<span>{attempt.name.exact}</span>
						</CountryName>
						<Attempt>
							{attemptsBody[index].map((row) => (
								<AttemptCategory>{row}</AttemptCategory>
							))}
						</Attempt>
					</Fragment>
				))}
			</TableAttempts>
		</TableContainer>
	);
}

