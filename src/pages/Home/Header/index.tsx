import { MdOutlineHistory, MdOutlineSettings, MdHelpOutline, MdOutlineMap } from "react-icons/md";

import { useTheme } from "@/contexts/theme/useTheme";
import useGame from "@/contexts/game/useGame";
import usePopup from "@/hooks/usePopup";
import IconButton from "@/components/IconButton";

import Map from "./Map";
import Help from "./Help";
import Settings from "./Settings";
import Statistics from "./Statistics";
import { ButtonsContainer, HeaderContainer, LogoContainer } from "./styles";

export default function Header() {
	const theme = useTheme();
	const { usedMap } = useGame().functions;

	const [openMapPopup, MapPopup] = usePopup(<Map />);
	const [openHelpPopup, HelpPopup] = usePopup(<Help />);
	const [openSettingsPopup, SettingsPopup] = usePopup(<Settings />);
	const [openStatisticsPopup, StatisticsPopup] = usePopup(<Statistics />);

	return (
		<HeaderContainer>
			<ButtonsContainer className="left">
				<IconButton icon={MdHelpOutline} onClick={openHelpPopup} label="help" />
				<IconButton
					icon={MdOutlineMap}
					onClick={() => {
						openMapPopup();
						usedMap();
					}}
					label="map"
				/>
			</ButtonsContainer>
			<LogoContainer>
				<img src={`${theme?.logo}`} alt="GeoDay" />
			</LogoContainer>
			<ButtonsContainer className="right">
				<IconButton icon={MdOutlineHistory} onClick={openStatisticsPopup} label="statistics" />
				<IconButton icon={MdOutlineSettings} onClick={openSettingsPopup} label="settings" />
			</ButtonsContainer>
			{MapPopup}
			{HelpPopup}
			{SettingsPopup}
			{StatisticsPopup}
		</HeaderContainer>
	);
}
