import { MdCheck } from "react-icons/md";

import IconButton from "@/components/layout/IconButton";

import { ButtonContainer, SearchContainer, SearchInput } from "./styles";

interface InputProps {
	elements: { exact: string; alias: string[] }[];
	placeholder: string;
}

export default function Input(props: InputProps) {
	return (
		<SearchContainer>
			<SearchInput placeholder={props.placeholder} />
			<ButtonContainer>
				<IconButton icon={MdCheck} />
			</ButtonContainer>
		</SearchContainer>
	);
}

