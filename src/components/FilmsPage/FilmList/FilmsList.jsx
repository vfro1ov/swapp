import './FilmList.scss';

const FilmList = ({ film }) => {
	return (
		<>
			<ul>
				{film.map((title, episode_id, img) => (
					<li key={episode_id}>
						<img src={img} alt={title} />
						Episode:{episode_id}
					</li>
				))}
			</ul>
		</>
	);
};

export default FilmList;
