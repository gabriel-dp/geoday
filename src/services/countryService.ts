import { CountryData } from "@/types/country";
import { FetchStatus, useFetchData } from "@/hooks/useFetchData";

const BASE_REST_COUNTRIES_URL = "https://restcountries.com/v3.1";

export const countryService = {
	All: (): [CountryData[], FetchStatus] => {
		const url = `${BASE_REST_COUNTRIES_URL}/all`;
		const { data, status } = useFetchData<CountryData[]>(url);

		const countries = data ?? [];
		const independentCountries = countries.filter((country) => country.independent);

		return [independentCountries, status];
	},
};
