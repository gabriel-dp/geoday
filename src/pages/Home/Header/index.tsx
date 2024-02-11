import { MdOutlineHistory, MdOutlineSettings, MdHelpOutline } from "react-icons/md";

import { useConfigs } from "@/contexts/configs/useConfigs";
import IconButton from "@/components/layout/IconButton";

import { ButtonsContainer, HeaderContainer, LogoContainer } from "./styles";

export default function Header() {
	const { toggleTheme } = useConfigs();

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
				<IconButton icon={MdOutlineSettings} onClick={toggleTheme} />
			</ButtonsContainer>
		</HeaderContainer>
	);
}
