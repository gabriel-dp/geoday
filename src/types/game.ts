import { Country, CountryDictionary, CountryId } from "@/types/country";
import { FetchStatus } from "@/hooks/useFetchData";
import { generateExpirationTime } from "@/utils/dateUtils";

export enum State {
	IDLE = "idle",
	LOADING = "loading",
	ERROR = "error",
	PLAYING = "playing",
	FINISHED = "finished",
	FORFEITED = "forfeited",
}

export interface GameDaily {
	state: State;
	attempts: CountryId[];
	usedMaps: boolean;
	usedHints: boolean;
	expirationTime: Date;
}

export interface GameData {
	status: FetchStatus;
	dictionary: CountryDictionary;
	answer: CountryId;
}

export interface GameFunctions {
	registerAttempt: (country: Country) => void;
	forfeit: () => void;
}

export interface GameContextI {
	daily: GameDaily;
	data: GameData;
	functions: GameFunctions;
}

export const initialDaily = (): GameDaily => ({
	state: State.IDLE,
	attempts: [],
	usedHints: false,
	usedMaps: false,
	expirationTime: generateExpirationTime(),
});

export const initialState = (): GameContextI => ({
	daily: initialDaily(),
	data: {
		status: FetchStatus.IDLE,
		dictionary: {},
		answer: "",
	},
	functions: {
		registerAttempt: () => {},
		forfeit: () => {},
	},
});
