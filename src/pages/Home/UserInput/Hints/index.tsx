import useGame from "@/contexts/game/useGame";
import { useLanguage } from "@/contexts/language/useLanguage";

import { HintsContainer } from "./styles";

function Hint(props: { name: string; description: string; children: React.ReactNode }) {
	return (
		<div className="hint">
			<div className="description">
				<h2>{props.name}</h2>
				<p>{props.description}</p>
			</div>
			<div className="answer">{props.children}</div>
		</div>
	);
}

export default function Hints() {
	const { t } = useLanguage();
	const { dictionary, answer } = useGame().data;
	const { landlocked, languages, capital, flags } = dictionary[answer].data;

	return (
		<HintsContainer>
			<h1>{t`popups.hints`}</h1>
			<Hint name={t`hints.languages.name`} description={t`hints.languages.description`}>
				{Object.values(languages).map((language) => (
					<p key={language}>{language}</p>
				))}
			</Hint>
			<Hint name={t`hints.coastline.name`} description={t`hints.coastline.description`}>
				<p>{t(`boolean.${(!landlocked).toString()}` as const)}</p>
			</Hint>
			<Hint name={t`hints.capitals.name`} description={t`hints.capitals.description`}>
				{Object.values(capital).map((city) => (
					<p key={city}>{city}</p>
				))}
			</Hint>
			<Hint name={t`hints.flag.name`} description={t`hints.flag.description`}>
				<img src={flags.png} alt={flags.alt} draggable={false} />
			</Hint>
		</HintsContainer>
	);
}
