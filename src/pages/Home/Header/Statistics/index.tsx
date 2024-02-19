import useLanguage from "@/contexts/language/useLanguage";
import useGame from "@/contexts/game/useGame";

import { StatisticsContainer } from "./styles";

function Registry(props: { title: string; children: React.ReactNode }) {
	return (
		<div className="registry">
			<p>{props.title}</p>
			{props.children}
		</div>
	);
}

export default function Statistics() {
	const { t } = useLanguage();
	const { usedHints, usedMap } = useGame().daily;

	return (
		<StatisticsContainer>
			<h1>{t`popups.statistics`}</h1>
			<Registry title={t`statistics.usedHints`}>
				<p>{t(`boolean.${usedHints.toString()}` as const)}</p>
			</Registry>
			<Registry title={t`statistics.usedMap`}>
				<p>{t(`boolean.${usedMap.toString()}` as const)}</p>
			</Registry>
		</StatisticsContainer>
	);
}
