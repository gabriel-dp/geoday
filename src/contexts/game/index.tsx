import { createContext, useEffect, useState } from "react";

import { Country, CountryDictionary } from "@/types/country";
import { countryService } from "@/services/countryService";
import { areCountriesEqual, generateDictionary } from "@/utils/countryUtils";
import { getTodaySeed, mapIntegerInterval, randomSeeded } from "@/utils/randomUtils";

enum GameState {
	IDLE = "idle",
	LOADING = "loading",
	ERROR = "error",
	PLAYING = "playing",
	FINISHED = "finished",
}

interface GameContextI {
	state: GameState;
	dictionary: CountryDictionary;
	answer: Country;
	attempts: Country[];
	registerAttempt: (country: Country) => void;
}

export const GameContext = createContext<GameContextI>({} as GameContextI);

export function GameProvider(props: { children: React.ReactNode }) {
	const [data, status] = countryService.All();
	const dictionary = generateDictionary(data);

	const answer =
		dictionary[
			Object.keys(dictionary)[mapIntegerInterval(randomSeeded(getTodaySeed()), Object.keys(dictionary).length)]
		];

	const [state, setState] = useState<GameState>(GameState.IDLE);
	useEffect(() => {
		switch (status) {
			case "loading":
				setState(GameState.LOADING);
				break;
			case "error":
				setState(GameState.ERROR);
				break;
			case "success":
				if (answer) setState(GameState.PLAYING);
				break;
		}
	}, [status, answer]);

	const [attempts, setAttempts] = useState<Country[]>([]);
	const registerAttempt = (country: Country): void => {
		if (attempts.every((attempt) => !areCountriesEqual(country, attempt))) {
			setAttempts((prev) => [...prev, country]);
			if (areCountriesEqual(country, answer)) {
				setState(GameState.FINISHED);
				console.log("win");
			}
		}
	};

	return (
		<GameContext.Provider
			value={{
				state,
				dictionary,
				answer,
				attempts,
				registerAttempt,
			}}>
			{props.children}
		</GameContext.Provider>
	);
}

