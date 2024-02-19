export const generateExpirationTime = () => {
	const time = new Date();
	time.setDate(time.getDate() + 1);
	time.setHours(0, 0, 0, 0);

	return time;
};

export const hasExpired = (expiration: Date) => {
	const now = new Date();
	const final = new Date(expiration.getFullYear(), expiration.getMonth(), expiration.getDate());

	return now.getTime() > final.getTime();
};
