import useGame from "@/contexts/game/useGame";

import Header from "./Header";
import Attempts from "./Attempts";
import UserInput from "./UserInput";
import { BodyContent, MainContainer } from "./styles";

export default function Home() {
	const { state } = useGame();

	return (
		<MainContainer>
			<Header />
			<BodyContent>{state != "playing" ? <p>Loading</p> : <Attempts />}</BodyContent>
			<UserInput />
		</MainContainer>
	);
}

