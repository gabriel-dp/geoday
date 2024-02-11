import { Fragment } from "react";
import { MdOutlineGroups, MdPhotoSizeSelectSmall, MdOutlineExplore, MdOutlinePublic } from "react-icons/md";

import { Country } from "@/types/country";

import { AreaCategory, ContinentCategory, DistanceCategory, PopulationCategory } from "./CategoryData";
import { Attempt, AttemptCategory, Categories, Category, CountryName, TableAttempts, TableContainer } from "./styles";

const CATEGORIES = [
	{ name: "Continent", icon: MdOutlinePublic, component: ContinentCategory },
	{ name: "Area (km²)", icon: MdPhotoSizeSelectSmall, component: AreaCategory },
	{ name: "Population", icon: MdOutlineGroups, component: PopulationCategory },
	{ name: "Distance (km)", icon: MdOutlineExplore, component: DistanceCategory },
];

interface AttemptsProps {
	attempts: Country[];
	answer: Country;
}

export default function Attempts(props: AttemptsProps) {
	return (
		<TableContainer>
			<TableAttempts>
				<thead>
					<Categories>
						{CATEGORIES.map((category) => (
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
								{CATEGORIES.map((category, index) => (
									<AttemptCategory key={`${index}-${attempt.id}`}>
										<category.component country={attempt} answer={props.answer} />
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

