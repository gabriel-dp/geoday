import { useContext } from "react";

import { GameContext } from ".";

export default function useGame() {
	const context = useContext(GameContext);
	return context;
}

