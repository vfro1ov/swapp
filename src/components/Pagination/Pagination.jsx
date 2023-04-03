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
			<div className="pagination">
			
			<Link className="page-link" to={`?page=${counterPage - 1}`} disabled={!prev}>
					<button type="button" className="page_nav page-item" onClick={handleChangePrev} disabled={!prev}>Previous</button>
					</Link>
				{/* <button className="button-effect page-item" > */}
				{/* <div className='button-effect'> */}
				

					{/* </div> */}
				{/* </button> */}
				<Link className="page-link" to={`?page=${counterPage + 1}`}>
						<button type="button" className="page_nav page-item"  onClick={handleChangeNext} disabled={!next}>Next</button>
					</Link>
				{/* <li className="page-item"> */}
				{/* <div className='button-effect'> */}
					
					</div>
		</nav>
		</div>
	);
};

export default Pagination;
