import { MdLightbulbOutline, MdOutlinedFlag } from "react-icons/md";

import useSearchTimeout from "@/hooks/useSearchTimeout";
import { Country, CountryDictionary } from "@/types/country";
import { matchCountriesSearch } from "@/utils/countryUtils";
import IconButton from "@/components/layout/IconButton";
import Input from "@/components/layout/Input";

import { CountryListContainer, ListContainer, ListElement, UserInteractContainer } from "./styles";

interface UserInputProps {
	dictionary: CountryDictionary;
}

export default function UserInput(props: UserInputProps) {
	const [search, setSearch, searchTimed] = useSearchTimeout(500);
	const match = matchCountriesSearch(searchTimed, props.dictionary, 10);

	const handleSelectCountry = (country: Country) => {
		setSearch(country.name.exact);
	};

	return (
		<UserInteractContainer>
			<IconButton icon={MdOutlinedFlag} />
			<Input placeholder="Start with a random country" search={search} setSearch={setSearch} />
			<IconButton icon={MdLightbulbOutline} />
			{searchTimed.length > 0 && (
				<CountryListContainer>
					<ListContainer>
						{match.map((country) => (
							<ListElement onClick={() => handleSelectCountry(country)}>{country.name.exact}</ListElement>
						))}
					</ListContainer>
				</CountryListContainer>
			)}
		</UserInteractContainer>
	);
}

