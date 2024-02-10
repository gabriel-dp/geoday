export const fixNumber = (value: number, decimals: number) => {
	const fixed = value.toFixed(decimals);
	return fixed;
};

export const approximatedNumberString = (value: number): string => {
	let exponent = 0;
	while (Math.pow(10, exponent) < Math.abs(value)) exponent++;

	switch (Math.floor((exponent - 1) / 3)) {
		case 1:
			return fixNumber(value / Math.pow(10, 3), 1) + "K";
		case 2:
			return fixNumber(value / Math.pow(10, 6), 1) + "M";
		case 3:
			return fixNumber(value / Math.pow(10, 9), 1) + "B";
		case 4:
			return fixNumber(value / Math.pow(10, 12), 1) + "T";
		default:
			return value + "";
	}
};

