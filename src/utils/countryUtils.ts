import { CountryData, Country, CountryDictionary } from "@/types/country";
import useLanguage from "@/contexts/language/useLanguage";
import { normalize } from "@/utils/stringUtils";

import { getTodaySeed, mapIntegerInterval, randomSeeded } from "./randomUtils";

// Map the language used by i18n to the API format
const LANGUAGE_MAP = {
	"pt-BR": "por",
};

export const GenerateDictionary = (allCountries: CountryData[]): CountryDictionary => {
	const { i18n } = useLanguage();
	const language = LANGUAGE_MAP[i18n.language as keyof typeof LANGUAGE_MAP];
	const dictionary: CountryDictionary = {};

	allCountries
		.sort((a, b) => a.name.common.localeCompare(b.name.common))
		.forEach((country) => {
			dictionary[country.cca3] = {
				id: country.cca3,
				name: {
					exact: country.translations[language]?.common ?? country.name.common,
					alias: [country.name.official, ...country.altSpellings],
				},
				data: country,
			};
		});

	return dictionary;
};

export const matchCountriesSearch = (search: string, dictionary: CountryDictionary, max: number): Country[] => {
	if (search.length == 0) return [];

	const normalizedSearch = normalize(search);

	const match = Object.values(dictionary)
		.filter((country) => {
			if (normalize(country.name.exact).includes(normalizedSearch)) return true;
			return country.name.alias.some((alias) => normalize(alias).includes(normalizedSearch));
		})
		.sort((a, b) => {
			// Sort by exact match first
			const aExactMatch = normalize(a.name.exact).startsWith(normalizedSearch);
			const bExactMatch = normalize(b.name.exact).startsWith(normalizedSearch);

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

export const getDailyAnswer = (dictionary: CountryDictionary): string => {
	const ids = Object.keys(dictionary);
	if (ids.length == 0) return null!;
	return dictionary[ids[mapIntegerInterval(randomSeeded(getTodaySeed()), ids.length)]].id;
};
