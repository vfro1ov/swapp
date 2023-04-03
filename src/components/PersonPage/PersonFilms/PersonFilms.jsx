import { makeConCorrentRequest } from '@utils/network';
import { useState, useEffect } from 'react';
import './PersonFilms.css';

const PersonFilms = ({ personFilm }) => {
	const [filmName, setFilmName] = useState();
	useEffect(() => {
		(async () => {
			const response = await makeConCorrentRequest(personFilm);
			setFilmName(response);
			console.log(response)
		})();
	}, []);
	return (
		<>
			<div>
				{filmName && (filmName
				.sort((a,z) => a.episode_id - z.episode_id)
				.map(({ title, episode_id }) => (
					<li className="list-group-item" key={episode_id}>
						Episode:{episode_id}:{title}
					</li>
				)) )}
			</div>
		</>
	);
};

export default PersonFilms;
