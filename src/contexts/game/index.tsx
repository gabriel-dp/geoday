import { createContext, useEffect, useState } from "react";

import { Country, CountryDictionary } from "@/types/country";
import { countryService } from "@/services/countryService";
import { areCountriesEqual, generateDictionary, getDailyAnswer } from "@/utils/countryUtils";

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
	const answer = getDailyAnswer(dictionary);

	// Store all attempts
	const [attempts, setAttempts] = useState<Country[]>([]);
	const registerAttempt = (country: Country): void => {
		if (attempts.every((attempt) => !areCountriesEqual(country, attempt))) {
			setAttempts((prev) => [...prev, country]);
		}
	};

	// Controls the game state based on request status
	const [state, setState] = useState<GameState>(GameState.IDLE);
	useEffect(() => {
		switch (status) {
			case "idle":
				setState(GameState.IDLE);
				break;
			case "loading":
				setState(GameState.LOADING);
				break;
			case "error":
				setState(GameState.ERROR);
				break;
			case "success":
				setState(GameState.PLAYING);
				break;
		}
	}, [status]);

	// Controls when the game finishes
	useEffect(() => {
		const { length } = attempts;
		if (length > 0 && areCountriesEqual(attempts[length - 1], answer)) {
			setState(GameState.FINISHED);
		}
	}, [attempts, answer]);

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
