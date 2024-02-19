import useLanguage from "@/contexts/language/useLanguage";

import { StatisticsContainer } from "./styles";

export default function Statistics() {
	const { t } = useLanguage();

	return (
		<StatisticsContainer>
			<h1>{t`popups.statistics`}</h1>
		</StatisticsContainer>
	);
}
