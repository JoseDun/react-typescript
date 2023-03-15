const API_FACT = 'https://catfact.ninja/fact';

export const getWords = async () => {
	const response = await fetch(API_FACT);
	const data = await response.json();

	const { fact } = data;

	return fact;
};
