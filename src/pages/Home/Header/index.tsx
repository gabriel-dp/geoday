import { MdOutlineHistory, MdOutlineSettings, MdHelpOutline } from "react-icons/md";

import { useConfigs } from "@/contexts/configs/useConfigs";
import usePopup from "@/hooks/usePopup";
import IconButton from "@/components/IconButton";

import { ButtonsContainer, HeaderContainer, LogoContainer } from "./styles";

export default function Header() {
	const { toggleTheme } = useConfigs();

	const [openHelpPopup, helpPopup] = usePopup(<div>ajuda</div>);

	return (
		<HeaderContainer>
			<ButtonsContainer className="left" onClick={openHelpPopup}>
				<IconButton icon={MdHelpOutline} />
			</ButtonsContainer>
			<LogoContainer>
				<h1>GeoDay</h1>
			</LogoContainer>
			<ButtonsContainer className="right">
				<IconButton icon={MdOutlineHistory} />
				<IconButton icon={MdOutlineSettings} onClick={toggleTheme} />
			</ButtonsContainer>
			{helpPopup}
		</HeaderContainer>
	);
}
