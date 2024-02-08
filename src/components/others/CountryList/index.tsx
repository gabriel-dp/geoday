import { CountrySearchable } from "@/utils/countryUtils";

import { ListContainer, ListElement } from "./styles";

interface CountryListProps {
	countries: CountrySearchable[];
	handleSelectCountry: (country: CountrySearchable) => void;
}

export default function CountryList(props: CountryListProps) {
	return (
		<ListContainer>
			{props.countries.map((country) => (
				<ListElement onClick={() => props.handleSelectCountry(country)}>{country.exact}</ListElement>
			))}
		</ListContainer>
	);
}

