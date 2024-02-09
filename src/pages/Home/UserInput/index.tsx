import { useEffect, useRef, useState } from "react";
import { MdLightbulbOutline, MdOutlinedFlag } from "react-icons/md";

import useSearchTimeout from "@/hooks/useSearchTimeout";
import { Country, CountryDictionary } from "@/types/country";
import { matchCountriesSearch } from "@/utils/countryUtils";
import IconButton from "@/components/layout/IconButton";
import Input from "@/components/layout/Input";

import { CountryListContainer, ListContainer, ListElement, UserInteractContainer } from "./styles";

interface UserInputProps {
	dictionary: CountryDictionary;
	registerAttempt: (country: Country) => void;
}

export default function UserInput(props: UserInputProps) {
	const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

	const [search, setSearch, searchTimed] = useSearchTimeout(500);
	const match = matchCountriesSearch(searchTimed, props.dictionary, 10);

	const [isListOpen, setIsListOpen] = useState(false);
	const automaticList = useRef(false);
	useEffect(() => {
		if (automaticList.current) {
			automaticList.current = false;
			return;
		}

		setIsListOpen(searchTimed.length > 0);
		setSelectedCountry(null);
	}, [searchTimed]);

	function handleSelectCountry(country: Country) {
		setSearch(country.name.exact);
		setSelectedCountry(country);

		automaticList.current = true;
		setIsListOpen(false);
	}

	function handleSubmit() {
		if (selectedCountry) {
			props.registerAttempt(selectedCountry);
			setSearch("");
		}
	}

	return (
		<UserInteractContainer>
			<IconButton icon={MdOutlinedFlag} />
			<Input
				placeholder="Start with a random country"
				search={search}
				setSearch={setSearch}
				handleSubmit={handleSubmit}
			/>
			<IconButton icon={MdLightbulbOutline} />
			{isListOpen && match.length > 0 && (
				<CountryListContainer>
					<ListContainer>
						{match.map((country) => (
							<ListElement key={country.id} onClick={() => handleSelectCountry(country)}>
								{country.name.exact}
							</ListElement>
						))}
					</ListContainer>
				</CountryListContainer>
			)}
		</UserInteractContainer>
	);
}

