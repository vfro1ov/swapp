import { useEffect, useState } from 'react';
import { API_FILMS } from '@constants/api';
import { getApiResource } from '@utils/network';
import { getFilmId, getFilmImg } from '@services/getFilmData';
import { FilmList } from '@components/FilmsPage/FilmList';

import './FilmPage.css';

const FilmPage = () => {
	const [film, setFilm] = useState();
	const getResource = async (url) => {
		const res = await getApiResource(url);
		if (res) {
			const filmList = res.results.map(({ title, episode_id }) => {
				const id = getFilmId(url);
				const img = getFilmImg(id);
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
		<FilmList film={film}/>
		</>
	);
};

export default FilmPage;
