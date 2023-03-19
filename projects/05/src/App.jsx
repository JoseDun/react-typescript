import { useCallback, useState } from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';

function App() {
	const { search, updateSearch, error } = useSearch();
	const [sort, setSort] = useState(false);
	const { movies, getMovies, loading } = useMovies({ sort });

	//! con react usando useRef no controlada
	/* 	const handleSubmit = (event) => {
		event.preventDefault();
		const inputEl = inputRef.current.value;
		console.log(inputEl);
	}; */

	/* 	//! con el dom no controlada
	const handleSubmit = (event) => {
		event.preventDefault();
		const { query } = Object.fromEntries(new window.FormData(event.target));
		console.log(query);
	}; */

	//! con react controlada
	const handleSubmit = (event) => {
		event.preventDefault();
		getMovies({ search });
	};
	const debouncedGetMovies = useCallback(
		debounce((search) => {
			console.log('search', search);
			getMovies({ search });
		}, 300),
		[getMovies],
	);
	console.log(sort);
	//! con react controlada
	const handleChange = (event) => {
		updateSearch(event.target.value);
		debouncedGetMovies(event.target.value);
	};

	const handleSort = () => {
		setSort(!sort);
	};

	return (
		<div className="page">
			<h1>Buscador de peliculas</h1>

			<header>
				<form onSubmit={handleSubmit} className="form">
					<input
						name="search"
						value={search}
						onChange={handleChange}
						placeholder="Avengers, Matrix..."
					/>

					<input checked={sort} type="checkbox" onChange={handleSort} />

					<button type="submit">Buscar</button>
				</form>

				{error && <p style={{ color: 'red' }}>{error}</p>}
			</header>

			<main>{loading ? <p>Cargando</p> : <Movies movies={movies} />}</main>
		</div>
	);
}

export default App;
