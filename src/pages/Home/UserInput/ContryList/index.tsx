import { Country } from "@/types/country";
import { ListContainer, ListElement } from "./styles";

interface CountryListProps {
	countries: Country[];
	selectedIndex?: number;
	listElementRef?: React.RefObject<HTMLLIElement>;
	handleSelectCountry?: (index: number) => void;
}

export default function CountryList(props: CountryListProps) {
	function handleElementClick(index: number) {
		if (props.handleSelectCountry) {
			props.handleSelectCountry(index);
		}
	}

	return (
		<ListContainer>
			{props.countries.map((country, index) => (
				<ListElement
					key={country.id}
					ref={index == props.selectedIndex ? props.listElementRef : null}
					onClick={() => handleElementClick(index)}
					$selected={(index == props.selectedIndex).toString()}>
					{country.name.exact}
				</ListElement>
			))}
		</ListContainer>
	);
}
