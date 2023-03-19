import { useEffect, useRef, useState } from 'react';

export const useSearch = () => {
	const [search, updateSearch] = useState('');
	const [error, setError] = useState(null);
	const isFirtsInput = useRef(true);

	useEffect(() => {
		if (isFirtsInput.current) {
			isFirtsInput.current = search === '';
			return;
		}

		if (search === '') {
			setError('No se puede buscar una pelicula vacia');
			return;
		}

		if (search.length < 3) {
			setError('La busqueda no puede ser menor a 3 caracteres');
			return;
		}

		setError(null);
	}, [search]);

	return { search, updateSearch, error };
};
