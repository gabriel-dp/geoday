import useGame from "@/contexts/game/useGame";
import useLanguage from "@/contexts/language/useLanguage";

import { ForfeitContainer } from "./styles";

export default function Forfeit() {
	const { t } = useLanguage();
	const { forfeit } = useGame().functions;

	return (
		<ForfeitContainer>
			<h1>{t`popups.forfeit`}</h1>
			<p>{t`forfeit.text`}</p>
			<button onClick={forfeit}>{t`forfeit.button`}</button>
		</ForfeitContainer>
	);
}
