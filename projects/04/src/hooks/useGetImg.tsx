import { useEffect, useState } from 'react';

export const useGetImg = ({ fact }: { fact: string }) => {
	const [imgCat, setImgCat] = useState('');

	const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

	useEffect(() => {
		if (!fact) return;

		const factQuery = fact?.split(' ', 3)?.join(' ');

		fetch(`https://cataas.com/cat/says/${factQuery}?&json=true`)
			.then((res) => res.json())
			.then(({ url }) => setImgCat(url));
	}, [fact]);

	const IMG_URL = `${CAT_PREFIX_IMAGE_URL}${imgCat}`;

	return { IMG_URL };
};
