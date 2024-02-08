import { MdOutlinedFlag, MdLightbulbOutline } from "react-icons/md";

import useSearchTimeout from "@/hooks/useSearchTimeout";
import { countryService } from "@/services/countryService";
import { CountrySearchable, generateCountrySearchable, matchCountriesSearch } from "@/utils/countryUtils";
import Navbar from "@/components/layout/Navbar";
import Input from "@/components/layout/Input";
import IconButton from "@/components/layout/IconButton";
import CountryList from "@/components/others/CountryList";

import { BodyContent, UserInteractContainer, MainContainer, CountryListContainer } from "./styles";

export default function Home() {
	const [data] = countryService.All();
	const [search, setSearch, searchTimed] = useSearchTimeout(500);
	const searchable = generateCountrySearchable(data);

	const handleSelectCountry = (country: CountrySearchable) => {
		setSearch(country.exact);
		window.blur();
	};

	return (
		<MainContainer>
			<Navbar />
			<BodyContent></BodyContent>
			<UserInteractContainer>
				<IconButton icon={MdOutlinedFlag} />
				<Input placeholder="Start with a random country" search={search} setSearch={setSearch} />
				<IconButton icon={MdLightbulbOutline} />
				{searchTimed.length > 0 && (
					<CountryListContainer>
						<CountryList
							countries={matchCountriesSearch(searchTimed, searchable, 10)}
							handleSelectCountry={handleSelectCountry}
						/>
					</CountryListContainer>
				)}
			</UserInteractContainer>
		</MainContainer>
	);
}

