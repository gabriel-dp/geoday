import { IconType } from "react-icons";

import { Button } from "./styles";

interface IconButtonProps {
	icon: IconType;
}

export default function IconButton(props: IconButtonProps) {
	return <Button>{<props.icon />}</Button>;
}

