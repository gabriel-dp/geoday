// Remove accents/diariatrics from strings
export const normalize = (str: string): string => {
	return str
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase();
};
