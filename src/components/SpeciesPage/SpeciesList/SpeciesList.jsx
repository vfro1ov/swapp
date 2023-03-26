import './SpeciesList.css';

const SpeciesList = ({species}) => {
	return (
		<div className="cards">
			{species.map(({ id, name, img, language }) => (
				<div className="card_item card" key={id}>
					<img src={img} alt={name} />
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{language}</p>
						<a href="/" className="btn btn-primary card-btn">
							Go somewhere
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default SpeciesList;
