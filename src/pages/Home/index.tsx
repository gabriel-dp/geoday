import { countryService } from "@/services/countryService";
import { generateDictionary } from "@/utils/countryUtils";

import Header from "./Header";
import UserInput from "./UserInput";
import { BodyContent, MainContainer } from "./styles";

export default function Home() {
	const [dataCountries, statusCountries] = countryService.All();
	const dictionary = generateDictionary(dataCountries);

	return (
		<MainContainer>
			<Header />
			<BodyContent>{statusCountries == "loading" && <p>Loading</p>}</BodyContent>
			<UserInput dictionary={dictionary} />
		</MainContainer>
	);
}

