import { toRoman } from '@services/toRoman';
import './FilmsList.scss';


const FilmsList = ({ film }) => {
	
	return (
		<div className="films">
			{film &&
				film
					.sort((a, z) => a.episode_id - z.episode_id)
					.map(({ title, img, episode_id, opening_crawl }) => (
						<div className="card film-card">
							<h3 key={episode_id}>
								{/* <img src={img} alt='.' /> */}
								{title}
							</h3>
							<p>Episode: {toRoman(episode_id)}</p>
							<p>{opening_crawl}</p>
						</div>
					))}
		</div>
	);
};

export default FilmsList;
