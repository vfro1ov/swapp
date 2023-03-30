import { Link } from 'react-router-dom';
import './PeopleList.scss';

const PeopleList = ({ people }) => {
	return (
		<div className="cards">
			{people.map(({ id, name, img,gender }) => (
				<div className="card card_item">
							<img src={img} className="img-fluid rounded" alt={name} />
							<div className="card-body">
								<h5 className="card-title">{name}</h5>
								<p className="card-text">{gender}</p>
							<div className='button-effect'><Link to={`/people/${id}`} className="effect effect-5">
							About
						</Link>
						</div>
						</div>
					</div>
					
			))}
		</div>
	);
};

export default PeopleList;
