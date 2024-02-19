import { createContext, useEffect, useState } from "react";

import { Country } from "@/types/country";
import { GameContextI, GameDaily, State, initialDaily, initialState } from "@/types/game";
import { countryService } from "@/services/countryService";
import { FetchStatus } from "@/hooks/useFetchData";
import useStoredState from "@/hooks/useStoredState";
import { GenerateDictionary, getDailyAnswer } from "@/utils/countryUtils";
import { hasExpired } from "@/utils/dateUtils";

export const GameContext = createContext<GameContextI>(initialState());

export function GameProvider(props: { children: React.ReactNode }) {
	const [daily, setDaily] = useStoredState<GameDaily>("daily", initialDaily());
	const [data, requestStatus] = countryService.All();
	const dictionary = GenerateDictionary(data);
	const answer = getDailyAnswer(dictionary);

	// Controls status based on requestStatus
	const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
	useEffect(() => {
		const TIME = 3000;
		switch (requestStatus) {
			case "success":
				if (Object.keys(dictionary).length == 0) break;
				setTimeout(() => setStatus(FetchStatus.SUCCESS), TIME);
				break;
			case "error":
				setTimeout(() => setStatus(FetchStatus.SUCCESS), TIME);
				break;
			default:
				setStatus(requestStatus);
		}
	}, [requestStatus, dictionary]);

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
