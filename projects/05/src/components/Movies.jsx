// eslint-disable-next-line no-unused-vars
const ListOfMovies = ({ movies }) => {
	return (
		<ul className="movies">
			{movies.map((movie) => (
				<li key={movie.id} className="movie">
					<h3>{movie.title}</h3>
					<p>{movie.year}</p>
					<img src={movie.poster} alt={movie.title} />
				</li>
			))}
		</ul>
	);
};

// eslint-disable-next-line no-unused-vars
function NoMoviesResults() {
	return <p>No hay resultados</p>;
}

export const Movies = ({ movies }) => {
	const hasMovies = movies?.length > 0;

	return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
};
