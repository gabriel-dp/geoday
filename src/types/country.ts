export interface Country {
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
}

export class CountryList {
	private list: { [id: string]: Country } = {};

	constructor(countries: Country[]) {
		countries.forEach((country) => this.insert(country));
	}

	public getAll() {
		return Object.values(this.list);
	}

	public get(id: string): Country | undefined {
		return this.list[id];
	}

	public exists(id: string): boolean {
		return this.list[id] != undefined;
	}

	public insert(country: Country): boolean {
		if (this.exists(country.cca3)) return false;

		this.list[country.cca3] = country;
		return true;
	}

	public remove(id: string): boolean {
		if (!this.exists(id)) return false;

		delete this.list[id];
		return true;
	}
}

