import { useLocation } from 'react-router';
import LinkBack from '@components/LinkBack/LinkBack';

import img from './img/400obi.png';
import './NotFoundPage.css';


const NotFoundPage = () => {
	let location = useLocation();

	return (
		<>
		

		<div className="nf_container">
			<div className="nf_h1">
				<h1>BAD REQUEST 400</h1>
			</div>
			<div className="nf_img">
				<img src={img} alt="400" />
			</div>
			<div className="nf_text">
				<p>No match for {location.pathname}</p>
				<div className='nf_btn'><LinkBack /></div>
			</div>

		</div>
		</>
	);
};

export default NotFoundPage;
