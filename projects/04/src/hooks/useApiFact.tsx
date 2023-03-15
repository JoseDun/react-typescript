import { useEffect, useState } from 'react';
import { getWords } from '../api/getWords';

export const useApiFact = () => {
	const [fact, setFact] = useState('');

	const refresh = () => {
		getWords().then((newfact) => setFact(newfact));
	};

	useEffect(refresh, []);

	return { refresh, fact };
};
