import './App.css';

import { useApiFact } from './hooks/useApiFact';
import { useGetImg } from './hooks/useGetImg';

const App = () => {
	const { fact, refresh } = useApiFact();
	const { IMG_URL } = useGetImg({ fact });

	const reload = () => {
		refresh();
	};

	return (
		<main>
			<h1>Gatos aleatorios</h1>
			<section>
				{IMG_URL && <p>{fact}</p>}
				{IMG_URL && <img src={IMG_URL} alt="cat random image" />}
			</section>
			{IMG_URL && <button onClick={reload}>Recargar</button>}
		</main>
	);
};

export default App;
