import useGame from "@/contexts/game/useGame";
import Loading from "@/components/Loading";

import Header from "./Header";
import Attempts from "./Attempts";
import UserInput from "./UserInput";
import { BodyContent, MainContainer } from "./styles";

export default function Home() {
	const { state } = useGame();

	let body: JSX.Element = <></>;
	switch (state) {
		case "loading":
			body = <Loading />;
			break;
		case "error":
			body = <p>ERROR</p>;
			break;
		default:
			body = <Attempts />;
			break;
	}

	return (
		<MainContainer>
			<Header />
			<BodyContent>{body}</BodyContent>
			{state == "playing" && <UserInput />}
		</MainContainer>
	);
}
