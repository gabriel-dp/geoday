import { createContext, useEffect } from "react";

import { Country } from "@/types/country";
import { GameContextI, GameDaily, State, initialDaily, initialState } from "@/types/game";
import { countryService } from "@/services/countryService";
import { FetchStatus } from "@/hooks/useFetchData";
import useStoredState from "@/hooks/useStoredState";
import { GenerateDictionary, getDailyAnswer } from "@/utils/countryUtils";
import { hasExpired } from "@/utils/dateUtils";

export const GameContext = createContext<GameContextI>(initialState());

export function GameProvider(props: { children: React.ReactNode }) {
	const [data, requestStatus] = countryService.All();
	const dictionary = GenerateDictionary(data);
	const answer = getDailyAnswer(dictionary);

	const status =
		requestStatus == FetchStatus.SUCCESS && Object.keys(dictionary).length == 0 ? FetchStatus.LOADING : requestStatus;

	const [daily, setDaily] = useStoredState<GameDaily>("daily", initialDaily());

	// Resets daily data if it has expired
	useEffect(() => {
		if (hasExpired(new Date(daily.expirationTime))) {
			setDaily(initialDaily());
		}
	}, [daily.expirationTime, setDaily]);

	// Controls the game state based on request status
	useEffect(() => {
		if (daily.state == "idle" && status == "success") {
			setDaily((prev) => ({ ...prev, state: State.PLAYING }));
		}
	}, [daily.state, setDaily, status]);

	// Controls when the game finishes
	useEffect(() => {
		const { length } = daily.attempts;
		if (length > 0 && daily.attempts[length - 1] == answer) {
			setDaily((prev) => ({ ...prev, state: State.FINISHED }));
		}
	}, [daily.attempts, answer, setDaily]);

	const registerAttempt = (country: Country): void => {
		if (daily.attempts.every((attempt) => country.id != attempt)) {
			setDaily((prev) => ({ ...prev, attempts: [...prev.attempts, country.id] }));
		}
	};

	const forfeit = () => {
		if (daily.state == "playing") setDaily((prev) => ({ ...prev, state: State.FINISHED, hasFofeited: true }));
	};

	const usedHints = () => {
		if (daily.state == "playing") setDaily((prev) => ({ ...prev, usedHints: true }));
	};

	const usedMap = () => {
		if (daily.state == "playing") setDaily((prev) => ({ ...prev, usedMap: true }));
	};

	const value = {
		daily,
		data: {
			status,
			dictionary,
			answer,
		},
		functions: {
			registerAttempt,
			forfeit,
			usedHints,
			usedMap,
		},
	};

	return <GameContext.Provider value={value}>{props.children}</GameContext.Provider>;
}
