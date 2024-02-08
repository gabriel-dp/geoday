import { useCallback, useEffect, useRef, useState } from "react";

export default function useSearchTimeout(
	delay: number = 1000
): [string, React.Dispatch<React.SetStateAction<string>>, string] {
	const [search, setSearch] = useState("");
	const [searchTimed, setSearchTimed] = useState("");
	const [timer, setTimer] = useState<number | null>(null);

	// Triggers when the search changes and updates the value after the timeout ends
	const handleChangeSearch = useCallback(() => {
		if (timer) {
			clearTimeout(timer);
			setTimer(null);
		}

		setTimer(
			setTimeout(() => {
				setSearchTimed(search);
			}, delay)
		);
	}, [delay, timer, setTimer, search, setSearchTimed]);

	// Use a ref to track the handleChangeSearch function and avoid infinite loop
	const handleChangeSearchRef = useRef(handleChangeSearch);
	useEffect(() => {
		handleChangeSearchRef.current = handleChangeSearch;
	}, [handleChangeSearch]);

	// Triggers every time the search changes
	useEffect(() => {
		handleChangeSearchRef.current();
	}, [search]);

	return [search, setSearch, searchTimed];
}

