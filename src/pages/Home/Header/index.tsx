import { MdOutlineHistory, MdOutlineSettings, MdHelpOutline } from "react-icons/md";

import usePopup from "@/hooks/usePopup";
import IconButton from "@/components/IconButton";

import Help from "./Help";
import Statistics from "./Statistics";
import Settings from "./Settings";
import { ButtonsContainer, HeaderContainer, LogoContainer } from "./styles";

export default function Header() {
	const [openHelpPopup, HelpPopup] = usePopup(<Help />);
	const [openStatisticsPopup, StatisticsPopup] = usePopup(<Statistics />);
	const [openSettingsPopup, SettingsPopup] = usePopup(<Settings />);

	return (
		<HeaderContainer>
			<ButtonsContainer className="left">
				<IconButton icon={MdHelpOutline} onClick={openHelpPopup} />
			</ButtonsContainer>
			<LogoContainer>
				<h1>GeoDay</h1>
			</LogoContainer>
			<ButtonsContainer className="right">
				<IconButton icon={MdOutlineHistory} onClick={openStatisticsPopup} />
				<IconButton icon={MdOutlineSettings} onClick={openSettingsPopup} />
			</ButtonsContainer>
			{HelpPopup}
			{StatisticsPopup}
			{SettingsPopup}
		</HeaderContainer>
	);
}
