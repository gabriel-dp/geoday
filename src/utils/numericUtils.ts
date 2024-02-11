export const fixNumber = (value: number, decimals: number): string => {
	if (value == Math.floor(value)) return value.toString();

	const fixed = value.toFixed(decimals);
	return fixed;
};

const exponentSufix = (value: number, exponent: number, sufix: string): string =>
	fixNumber(value / Math.pow(10, exponent), 1) + sufix;

export const approximatedNumberString = (value: number): string => {
	let exponent = 0;
	while (Math.pow(10, exponent) < Math.abs(value)) exponent++;

	switch (Math.floor((exponent - 1) / 3)) {
		case 0:
			return exponentSufix(value, 0, "");
		case 1:
			return exponentSufix(value, 3, "K");
		case 2:
			return exponentSufix(value, 6, "M");
		case 3:
			return exponentSufix(value, 9, "B");
		case 4:
			return exponentSufix(value, 12, "T");
		default:
			return exponentSufix(value, 0, "");
	}
};
