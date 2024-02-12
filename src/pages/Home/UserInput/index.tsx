import { useEffect, useRef, useState } from "react";
import { MdLightbulbOutline, MdOutlinedFlag } from "react-icons/md";

import useGame from "@/contexts/game/useGame";
import useSearchTimeout from "@/hooks/useSearchTimeout";
import { matchCountriesSearch } from "@/utils/countryUtils";
import IconButton from "@/components/layout/IconButton";
import Input from "@/components/layout/Input";

import { CountryListContainer, ListContainer, ListElement, UserInteractContainer } from "./styles";

export default function UserInput() {
	const { dictionary, registerAttempt } = useGame();

	const [search, setSearch, searchTimed] = useSearchTimeout(250);
	const match = matchCountriesSearch(searchTimed, dictionary, 10);
	const [matchIndex, setMatchIndex] = useState<number>(-1);

	// Controls countries list state
	const [isListOpen, setIsListOpen] = useState(false);
	const automaticList = useRef(false);
	useEffect(() => {
		if (automaticList.current) {
			automaticList.current = false;
			return;
		}

		setIsListOpen(searchTimed.length > 0);
		setMatchIndex(searchTimed.length > 0 ? 0 : -1);
	}, [searchTimed]);

	// Controls outside countries list clicks
	const listRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (listRef.current && !listRef.current.contains(event.target as Node)) {
				setIsListOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	function handleSelectCountry(index: number) {
		const country = match[index];
		setSearch(country.name.exact);
		setMatchIndex(0);

		automaticList.current = true;
		setIsListOpen(false);
	}

	function handleSubmit() {
		if (matchIndex >= 0) {
			registerAttempt(match[matchIndex]);
			setSearch("");
			setIsListOpen(false);
		}
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		const { key } = event;
		switch (key) {
			case "ArrowUp":
				setMatchIndex((index) => Math.max(0, index - 1));
				break;
			case "ArrowDown":
				setMatchIndex((index) => Math.min(match.length - 1, index + 1));
				break;
			case "Enter":
				handleSubmit();
				break;
			default:
				break;
		}
	};

	// Keep list element view when navigation using arrows
	const listElementRef = useRef<HTMLLIElement>(null);
	useEffect(() => {
		listElementRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [matchIndex]);

	return (
		<UserInteractContainer onKeyDown={(event) => handleKeyDown(event)}>
			<IconButton icon={MdOutlinedFlag} />
			<Input
				placeholder="Start with a random country"
				search={search}
				setSearch={setSearch}
				handleSubmit={handleSubmit}
			/>
			<IconButton icon={MdLightbulbOutline} />
			{isListOpen && match.length > 0 && (
				<CountryListContainer ref={listRef}>
					<ListContainer>
						{match.map((country, index) => (
							<ListElement
								key={country.id}
								ref={index == matchIndex ? listElementRef : null}
								onClick={() => handleSelectCountry(index)}
								$selected={(index == matchIndex).toString()}>
								{country.name.exact}
							</ListElement>
						))}
					</ListContainer>
				</CountryListContainer>
			)}
		</UserInteractContainer>
	);
}
