import { IconType } from "react-icons";

import { Button } from "./styles";

interface IconButtonProps {
	icon: IconType;
	onClick?: () => void;
	label: string;
}

export default function IconButton(props: IconButtonProps) {
	return (
		<Button onClick={props.onClick} aria-label={props.label}>
			{<props.icon />}
		</Button>
	);
}
