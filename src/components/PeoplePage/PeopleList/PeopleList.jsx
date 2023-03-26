import { Link } from 'react-router-dom';
import './PeopleList.css';

const PeopleList = ({ people }) => {
	return (
		<div className="cards">
			{people.map(({ id, name, img,gender }) => (
				<div className="card card_item">
							<img src={img} className="img-fluid rounded" alt={name} />
							<div className="card-body">
								<h5 className="card-title">{name}</h5>
								<p className="card-text">{gender}</p>
							<Link to={`/people/${id}`} className="btn btn-primary card-btn">
							Go somewhere
						</Link>
						</div>
					</div>
					
			))}
		</div>
	);
};

export default PeopleList;
