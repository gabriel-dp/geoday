import { useState } from "react";

import { Country } from "@/types/country";
import { countryService } from "@/services/countryService";
import { generateDictionary, areCountriesEqual } from "@/utils/countryUtils";

import Header from "./Header";
import UserInput from "./UserInput";
import { BodyContent, MainContainer } from "./styles";

export default function Home() {
	const [dataCountries, statusCountries] = countryService.All();
	const dictionary = generateDictionary(dataCountries);
	const answer = dictionary["BRA"];

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
				{statusCountries != "success" ? (
					<p>Loading</p>
				) : (
					attempts.map((attempt, index) => <p key={index + attempt.name.exact}>{attempt.name.exact}</p>)
				)}
			</BodyContent>
			<UserInput dictionary={dictionary} registerAttempt={registerAttempt} />
		</MainContainer>
	);
}

