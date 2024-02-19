import useGame from "@/contexts/game/useGame";
import Loading from "@/components/Loading";

import Header from "./Header";
import Attempts from "./Attempts";
import UserInput from "./UserInput";
import { BodyContent, MainContainer } from "./styles";

export default function Home() {
	const {
		data: { status },
		daily: { state },
	} = useGame();

	let body: JSX.Element = <></>;
	switch (status) {
		case "loading":
			body = <Loading />;
			break;
		case "error":
			body = <p>ERROR</p>;
			break;
		case "success":
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
