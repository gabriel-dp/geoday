import Popup from "@/components/Popup";
import { useState } from "react";

export default function usePopup(component: JSX.Element): [() => void, JSX.Element] {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	const popupComponent = (
		<Popup isOpen={isOpen} close={close}>
			{component}
		</Popup>
	);

	return [open, popupComponent];
}
