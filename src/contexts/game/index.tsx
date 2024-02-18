import { createContext, useEffect, useState } from "react";

import { Country, CountryDictionary, CountryId } from "@/types/country";
import { countryService } from "@/services/countryService";
import { GenerateDictionary, getDailyAnswer } from "@/utils/countryUtils";

enum GameState {
	IDLE = "idle",
	LOADING = "loading",
	ERROR = "error",
	PLAYING = "playing",
	FINISHED = "finished",
	FORFEITED = "forfeited",
}

interface GameContextI {
	state: GameState;
	dictionary: CountryDictionary;
	answer: CountryId;
	attempts: CountryId[];
	registerAttempt: (country: Country) => void;
	forfeit: () => void;
}

export const GameContext = createContext<GameContextI>({
	state: GameState.IDLE,
	dictionary: {},
	answer: "",
	attempts: [],
	registerAttempt: () => {},
	forfeit: () => {},
});

export function GameProvider(props: { children: React.ReactNode }) {
	const [data, status] = countryService.All();
	const dictionary = GenerateDictionary(data);
	const answer = getDailyAnswer(dictionary);

	// Store all attempts
	const [attempts, setAttempts] = useState<CountryId[]>([]);
	const registerAttempt = (country: Country): void => {
		if (attempts.every((attempt) => country.id != attempt)) {
			setAttempts((prev) => [...prev, country.id]);
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
				setTimeout(() => setState(GameState.ERROR), 3000);
				break;
			case "success":
				setTimeout(() => setState(GameState.PLAYING), 3000);
				break;
		}
	}, [status, setState]);

	// Controls when the game finishes
	useEffect(() => {
		const { length } = attempts;
		if (length > 0 && attempts[length - 1] == answer) {
			setState(GameState.FINISHED);
		}
	}, [attempts, answer, setState]);

	const forfeit = () => {
		setState(GameState.FORFEITED);
	};

	return (
		<GameContext.Provider
			value={{
				state,
				dictionary,
				answer,
				attempts,
				registerAttempt,
				forfeit,
			}}>
			{props.children}
		</GameContext.Provider>
	);
}
