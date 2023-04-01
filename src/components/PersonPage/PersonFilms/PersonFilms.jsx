import './PersonFilms.css';

const PersonFilms = ({ personFilm }) => {

	return (
		<>
			{personFilm.map(
				({ title, episode_id }) =>
				personFilm && (
						<li className="list-group-item" key={personFilm.episode_id}>
							Episode:{episode_id}:{title}
						</li>
					),
			)}
		</>
	);
};

export default PersonFilms;
