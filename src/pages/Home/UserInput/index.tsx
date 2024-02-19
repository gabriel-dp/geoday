import { useEffect, useRef, useState } from "react";
import { MdLightbulbOutline, MdOutlinedFlag } from "react-icons/md";

import { useLanguage } from "@/contexts/language/useLanguage";
import useGame from "@/contexts/game/useGame";
import useSearchTimeout from "@/hooks/useSearchTimeout";
import { matchCountriesSearch } from "@/utils/countryUtils";
import IconButton from "@/components/IconButton";
import Input from "@/components/Input";

import CountryList from "./ContryList";
import { CountryListContainer, UserInteractContainer } from "./styles";

export default function UserInput() {
	const { t } = useLanguage();
	const {
		data: { dictionary },
		functions: { registerAttempt, forfeit },
	} = useGame();

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

	// Controls clicks outside the countries list
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

	// Keep list element view when navigation using arrows
	const listElementRef = useRef<HTMLLIElement>(null);
	useEffect(() => {
		listElementRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [matchIndex]);

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

	function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
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
	}

	return (
		<UserInteractContainer onKeyDown={(event) => handleKeyDown(event)}>
			<IconButton icon={MdOutlinedFlag} label="forfeit" onClick={forfeit} />
			<Input placeholder={t("placeholder")} search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
			<IconButton icon={MdLightbulbOutline} label="hints" />
			{isListOpen && match.length > 0 && (
				<CountryListContainer ref={listRef}>
					<CountryList
						countries={match}
						selectedIndex={matchIndex}
						listElementRef={listElementRef}
						handleSelectCountry={handleSelectCountry}
					/>
				</CountryListContainer>
			)}
		</UserInteractContainer>
	);
}
