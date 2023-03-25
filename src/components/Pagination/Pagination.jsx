import { Link } from 'react-router-dom';
import './Pagination.css';

const Pagination = ({ counterPage, prev, next, getResource,queryPage }) => {
	const handleChangePrev = () => getResource(prev);
	const handleChangeNext = () => getResource(next);
	return (
		<div className='pagination_wrapper'>
		<nav aria-label="">
			<ul className="pagination">
				<li className="page-item" onClick={handleChangePrev} disabled={!prev}>
					<Link className="page-link" to={`?page=${counterPage - 1}`}>
						Previous
					</Link>
				</li>
			
				<li className="page-item" onClick={handleChangeNext}>
					<Link className="page-link" to={`?page=${counterPage + 1}`}>
						Next
					</Link>
				</li>
			</ul>
		</nav>
		</div>
	);
};

export default Pagination;
