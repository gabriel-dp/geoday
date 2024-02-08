import { MdOutlineHistory, MdOutlineSettings, MdHelpOutline } from "react-icons/md";

import { ButtonsContainer, HeaderContainer, IconButton, LogoContainer } from "./styles";

export default function Navbar() {
	return (
		<HeaderContainer>
			<ButtonsContainer className="left">
				<IconButton>
					<MdHelpOutline />
				</IconButton>
			</ButtonsContainer>
			<LogoContainer>
				<h1>GeoDay</h1>
			</LogoContainer>
			<ButtonsContainer className="right">
				<IconButton>
					<MdOutlineHistory />
				</IconButton>
				<IconButton>
					<MdOutlineSettings />
				</IconButton>
			</ButtonsContainer>
		</HeaderContainer>
	);
}

