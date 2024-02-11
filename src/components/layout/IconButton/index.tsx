import { IconType } from "react-icons";

import { Button } from "./styles";

interface IconButtonProps {
	icon: IconType;
	onClick?: () => void;
}

export default function IconButton(props: IconButtonProps) {
	return <Button onClick={props.onClick}>{<props.icon />}</Button>;
}
