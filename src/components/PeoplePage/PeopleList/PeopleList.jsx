import './PeopleList.css';

const PeopleList = ({ people }) => {
	return (
		<>
			{people.map(({ id, name, img,gender }) => (
				<div className="card mb-3">
					<div className="row g-5">
						<div className="col-md-4">
							<img src={img} className="img-fluid rounded-start" alt={name} />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{name}</h5>
								<p className="card-text">{gender}</p>
							
							</div>
							<a href={id} className="btn btn-primary">
							Go somewhere
						</a>
						</div>
					</div>
					
				</div>
			))}
		</>
	);
};

export default PeopleList;
