import { useEffect, useState } from 'react';
import { API_FILMS } from '@constants/api';
import { getApiResource } from '@utils/network';
import { getFilmId, getFilmImg } from '@services/getFilmData';
import  FilmsList  from '@components/FilmsPage/FilmsList';


import './FilmPage.css';

const FilmPage = () => {
	const [film, setFilm] = useState(null);

	const getResource = async (url) => {
		const res = await getApiResource(url);
		if (res) {
			const filmList = res.results.map(({ title, episode_id }) => {
				const id = getFilmId(url);
				const img = getFilmImg(id);
				console.log(img)
				console.log(res.results)
				return {
					id,
					img,
					title,
					episode_id,
				};
			});
			setFilm(filmList);
		}
	};

	useEffect(() => {
		getResource(API_FILMS);

	}, []);
	return (
		<>
		<FilmsList film={film}/>

		</>
	);
};

export default FilmPage;
