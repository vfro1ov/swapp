import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';

const Pagination = ({ counterPage, prev, next, getResource,queryPage }) => {
	const handleChangePrev = () => getResource(prev);
	const handleChangeNext = () => getResource(next);
	const [listItems, getListItems] = useState(1);
	return (
		<div className='pagination_wrapper'>
		<nav aria-label="">
			<ul className="pagination">
				<li className="page-item" onClick={handleChangePrev} disabled={!prev}>
				<div className='button-effect'>
					<Link className="page-link" to={`?page=${counterPage - 1}`}>
						Previous
					</Link>
					</div>
				</li>
				<li className="page-item" onClick={handleChangeNext} disabled={!next}>
				<div className='button-effect'>
					<Link className="page-link" to={`?page=${counterPage + 1}`}>
						Next
					</Link>
					</div>
				</li>
			</ul>
		</nav>
		</div>
	);
};

export default Pagination;
