import { useEffect, useState } from "react";

import { CountryData } from "@/types/country";
import { FetchStatus, useFetchData } from "@/hooks/useFetchData";

const BASE_REST_COUNTRIES_URL = "https://restcountries.com/v3.1";
const ALL_COUNTRIES_URL = `${BASE_REST_COUNTRIES_URL}/all`;

export const countryService = {
	All: (): [CountryData[], FetchStatus] => {
		const { data, status } = useFetchData<CountryData[]>(ALL_COUNTRIES_URL);
		const [allCountries, setAllCountries] = useState<CountryData[]>([]);

		useEffect(() => {
			if (data) {
				const territories = data ?? [];
				const independentCountries = territories.filter((country) => country.independent);
				setAllCountries(independentCountries);
			}
		}, [data]);

		return [allCountries, status];
	},
};
