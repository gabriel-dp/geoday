import { useEffect, useState } from "react";

import { Country } from "@/types/country";
import { getTodaySeed, mapIntegerInterval, randomSeeded } from "@/utils/randomUtils";
import { countryService } from "@/services/countryService";
import { generateDictionary, areCountriesEqual } from "@/utils/countryUtils";

import Header from "./Header";
import Attempts from "./Attempts";
import UserInput from "./UserInput";
import { BodyContent, MainContainer } from "./styles";

export default function Home() {
	const [dataCountries, statusCountries] = countryService.All();
	const dictionary = generateDictionary(dataCountries);

	const answer =
		dictionary[
			Object.keys(dictionary)[mapIntegerInterval(randomSeeded(getTodaySeed()), Object.keys(dictionary).length)]
		];

	useEffect(() => {
		console.log(answer);
	}, [answer]);

	const [attempts, setAttempts] = useState<Country[]>([]);
	function registerAttempt(country: Country) {
		if (attempts.every((attempt) => !areCountriesEqual(country, attempt))) {
			setAttempts((prev) => [...prev, country]);
			if (areCountriesEqual(country, answer)) {
				console.log("win");
			}
		}
	}

	return (
		<MainContainer>
			<Header />
			<BodyContent>
				{statusCountries != "success" ? <p>Loading</p> : <Attempts attempts={attempts} answer={answer} />}
			</BodyContent>
			<UserInput dictionary={dictionary} registerAttempt={registerAttempt} />
		</MainContainer>
	);
}

