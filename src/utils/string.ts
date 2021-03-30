export const onlyNumbers = (text: string): number => {
	return Number(text.replace(/\D/g, ''));
};
