import { FetchStatus, useFetchData } from "@/hooks/useFetchData";
import { Country } from "@/types/country";

const BASE_REST_COUNTRIES_URL = "https://restcountries.com/v3.1";

export const countryService = {
	All: (): [Country[], FetchStatus] => {
		const url = `${BASE_REST_COUNTRIES_URL}/all`;
		const { data, status } = useFetchData<Country[]>(url);

		const countries = data ?? [];
		return [countries, status];
	},
};

