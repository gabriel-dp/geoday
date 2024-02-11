export interface CountryData {
	// code
	cca3: string;

	// names
	name: { common: string; official: string };
	altSpellings: string[];

	// local
	region: string;
	latlng: [number, number];
	border: string[]; // cca3 codes

	// numeric
	area: number;
	population: number;

	// flag
	flag: string; // emoji
	flags: { png: string; svg: string; alt: string }; // links + alt

	// map
	maps: { googleMaps: string; openStreetMaps: string }; // map links

	// hints
	languages: { [abbreviation: string]: string };
	capital: string[];
	landlocked: boolean;

	// filters
	independent: boolean;
}

export interface Country {
	id: string | number;
	name: {
		exact: string;
		alias: string[];
	};
	data: CountryData;
}

export type CountryDictionary = Record<string, Country>;
