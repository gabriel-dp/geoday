import { useContext } from "react";

import { ConfigsContext } from "@/contexts/configs";

export default function useConfigs() {
	const context = useContext(ConfigsContext);
	return context;
}
