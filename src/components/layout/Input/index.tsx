import { MdCheck } from "react-icons/md";

import IconButton from "@/components/layout/IconButton";

import { ButtonContainer, SearchContainer, SearchInput } from "./styles";

interface InputProps {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	placeholder: string;
	handleSubmit: () => void;
}

export default function Input(props: InputProps) {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.setSearch(event.target.value);
	};

	return (
		<SearchContainer>
			<SearchInput
				value={props.search}
				onChange={(event) => handleInputChange(event)}
				placeholder={props.placeholder}
			/>
			<ButtonContainer onClick={props.handleSubmit}>
				<IconButton icon={MdCheck} />
			</ButtonContainer>
		</SearchContainer>
	);
}
