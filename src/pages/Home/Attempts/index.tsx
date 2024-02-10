import { Fragment } from "react";
import { MdOutlineGroups, MdPhotoSizeSelectSmall, MdOutlineExplore, MdOutlinePublic } from "react-icons/md";

import { Country } from "@/types/country";

import { Attempt, AttemptCategory, Categories, Category, CountryName, TableAttempts, TableContainer } from "./styles";
import { approximatedNumberString } from "@/utils/numericUtils";

interface AttemptsProps {
	attempts: Country[];
}

export default function Attempts(props: AttemptsProps) {
	const CATERGORIES = [
		{ name: "Continent", color: "#FF2222", icon: MdOutlinePublic },
		{ name: "Area (km²)", color: "#22FF22", icon: MdPhotoSizeSelectSmall },
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
				<thead>
					<Categories>
						{CATERGORIES.map((category) => (
							<Category key={category.name}>
								<category.icon className="icon" />
								<span>{category.name}</span>
							</Category>
						))}
					</Categories>
				</thead>
				<tbody>
					{props.attempts.map((attempt, index) => (
						<Fragment key={index + attempt.name.exact}>
							<tr>
								<CountryName>
									<span>{index + 1})</span>
									<span>{attempt.name.exact}</span>
								</CountryName>
							</tr>
							<Attempt>
								{attemptsBody[index].map((row, index) => (
									<AttemptCategory key={`${index}-${attempt.id}`}>
										{typeof row == "number" ? approximatedNumberString(row) : row}
									</AttemptCategory>
								))}
							</Attempt>
						</Fragment>
					))}
				</tbody>
			</TableAttempts>
		</TableContainer>
	);
}

