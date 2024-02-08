import { MdOutlineHistory, MdOutlineSettings, MdHelpOutline } from "react-icons/md";

import IconButton from "@/components/layout/IconButton";

import { ButtonsContainer, HeaderContainer, LogoContainer } from "./styles";

export default function Header() {
	return (
		<HeaderContainer>
			<ButtonsContainer className="left">
				<IconButton icon={MdHelpOutline} />
			</ButtonsContainer>
			<LogoContainer>
				<h1>GeoDay</h1>
			</LogoContainer>
			<ButtonsContainer className="right">
				<IconButton icon={MdOutlineHistory} />
				<IconButton icon={MdOutlineSettings} />
			</ButtonsContainer>
		</HeaderContainer>
	);
}

