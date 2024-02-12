export interface CountryData {
	// id
	cca3: string;

	// filters
	independent: boolean;

	// names
	name: { common: string; official: string };
	altSpellings: string[];

	// locals
	region: string;
	latlng: [number, number];
	borders: string[]; // cca3 codes

	// numerics
	area: number;
	population: number;

	// flags
	flag: string; // emoji
	flags: { png: string; svg: string; alt: string }; // links + alt

	// maps
	maps: { googleMaps: string; openStreetMaps: string }; // map links

	// hints
	languages: { [abbreviation: string]: string };
	capital: string[];
	landlocked: boolean;
}

export type CountryId = string;

export interface Country {
	id: CountryId;
	name: {
		exact: string;
		alias: string[];
	};
	data: CountryData;
}

export type CountryDictionary = Record<CountryId, Country>;
