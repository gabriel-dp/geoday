import { MdClose } from "react-icons/md";

import IconButton from "@/components/IconButton";

import { BackgroundFilter, CloseButtonContainer, PopupContainer } from "./styles";

interface PopupProps {
	isOpen: boolean;
	close: () => void;
	children: React.ReactNode;
}

export default function Popup(props: PopupProps) {
	return (
		<BackgroundFilter onClick={props.close} $isOpen={props.isOpen.toString()}>
			<PopupContainer onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
				<CloseButtonContainer>
					<IconButton icon={MdClose} onClick={props.close} />
				</CloseButtonContainer>
				{props.children}
			</PopupContainer>
		</BackgroundFilter>
	);
}
