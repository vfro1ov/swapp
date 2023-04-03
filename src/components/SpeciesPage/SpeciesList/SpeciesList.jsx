import { Link } from 'react-router-dom';
import './SpeciesList.scss';


const SpeciesList = ({ species }) => {
	return (
		<div className="cards">
			{species.map(({ id, name, img, language }) => (
		<div className="card card_item">
		<img src={img} className="img-fluid rounded" alt={name} />
		<div className="card-body">
			<h5 className="card-title">{name}</h5>
			<p className="card-text">{language}</p>
		<div className='button-effect'><Link to={`/`} className="effect effect-5">
		About
	</Link>
	</div>
	</div>
</div>
			))}
		</div>
	);
};

export default SpeciesList;
