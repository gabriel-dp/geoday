import { Country } from "@/types/country";
import { normalize } from "@/utils/stringUtils";

export interface CountrySearchable {
	cca3: string;
	exact: string;
	alias: string[];
}

export const generateCountrySearchable = (countries: Country[]): CountrySearchable[] => {
	return countries
		.map((country) => ({
			cca3: country.cca3,
			exact: country.name.common,
			alias: [country.name.official, ...country.altSpellings],
		}))
		.sort((a, b) => a.exact.localeCompare(b.exact));
};

export const matchCountriesSearch = (search: string, all: CountrySearchable[], max: number): CountrySearchable[] => {
	if (search.length == 0) return [];

	const normalizedSearch = normalize(search);

	const match = all
		.filter((country) => {
			if (normalize(country.exact).includes(normalizedSearch)) return true;
			return country.alias.some((alias) => normalize(alias).includes(normalizedSearch));
		})
		.sort((a, b) => {
			// Sort by exact match first
			const aExactMatch = normalize(a.exact).startsWith(normalizedSearch);
			const bExactMatch = normalize(b.exact).startsWith(normalizedSearch);

			if (aExactMatch && !bExactMatch) {
				return -1; // a comes first
			} else if (!aExactMatch && bExactMatch) {
				return 1; // b comes first
			}

			// If neither or both are exact matches, maintain their original order
			return 0;
		})
		.slice(0, max);

	return match;
};

export const findCountry = () => {};

