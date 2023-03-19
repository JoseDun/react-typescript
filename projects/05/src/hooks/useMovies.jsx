import { searchMovies } from '../api/searchMovies';
import { useCallback, useMemo, useRef, useState } from 'react';

export const useMovies = ({ sort }) => {
	const [movies, setMovies] = useState();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const previousSearch = useRef();

	const getMovies = useCallback(async ({ search }) => {
		if (previousSearch.current === search) return;

		try {
			setLoading(true);
			setError(null);
			previousSearch.current = search;
			const res = await searchMovies({ search });
			setMovies(res);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	const sorted = useMemo(() => {
		return sort
			? [...movies].sort((a, b) => a.title.localeCompare(b.title))
			: movies;
	}, [movies, sort]);

	return { movies: sorted, getMovies, loading, error };
};
