import { MdOutlinedFlag, MdLightbulbOutline } from "react-icons/md";

import Navbar from "@/components/layout/Navbar";
import Input from "@/components/layout/Input";
import IconButton from "@/components/layout/IconButton";

import { BodyContent, UserInteractContainer, MainContainer } from "./styles";

export default function Home() {
	return (
		<MainContainer>
			<Navbar />
			<BodyContent></BodyContent>
			<UserInteractContainer>
				<IconButton icon={MdOutlinedFlag} />
				<Input placeholder="Start with a random country" elements={[]} />
				<IconButton icon={MdLightbulbOutline} />
			</UserInteractContainer>
		</MainContainer>
	);
}

