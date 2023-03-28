import './SpeciesList.scss';


const SpeciesList = ({ species }) => {
	return (
		<div className="cards">
			{species.map(({ id, name, img, language }) => (
				<div className="card_item card" key={id}>
					<img src={img} alt={name} />
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{language}</p>
						<div className="button">
							<div className="button__text">Learn more...</div>
						<a href="/">
							<div className="button__wrapper">
								<div className="button__arrow"></div>
								<div className="button__border-circle"></div>
								<div className="button__mask-circle">
									<div className="button__small-circle"></div>
								</div>
							</div>
							</a> 
						</div>
						</div>
				</div>
			))}
		</div>
	);
};

export default SpeciesList;
