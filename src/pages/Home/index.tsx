import { useEffect } from "react";
import { MdOutlinedFlag, MdLightbulbOutline } from "react-icons/md";

import useSearchTimeout from "@/hooks/useSearchTimeout";
import { countryService } from "@/services/countryService";
import { generateCountrySearchable, matchCountriesSearch } from "@/utils/countryUtils";
import Navbar from "@/components/layout/Navbar";
import Input from "@/components/layout/Input";
import IconButton from "@/components/layout/IconButton";

import { BodyContent, UserInteractContainer, MainContainer } from "./styles";

export default function Home() {
	const [data, status] = countryService.All();
	const [search, setSearch, searchTimed] = useSearchTimeout();
	const searchable = generateCountrySearchable(data);

	useEffect(() => {
		if (status == "success") {
			console.log(matchCountriesSearch(searchTimed, searchable, 10));
		}
	}, [searchTimed, searchable, status]);

	return (
		<MainContainer>
			<Navbar />
			<BodyContent></BodyContent>
			<UserInteractContainer>
				<IconButton icon={MdOutlinedFlag} />
				<Input placeholder="Start with a random country" search={search} setSearch={setSearch} />
				<IconButton icon={MdLightbulbOutline} />
			</UserInteractContainer>
		</MainContainer>
	);
}

