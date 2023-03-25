import { useLocation } from 'react-router';
import img from './img/404nfp.png';
import './NotFoundPage.css';

const NotFoundPage = () => {
	let location = useLocation();

	return (
		<div className="nf_container">
			<div className="nf_h1">
				<h1>NOT FOUND 404</h1>
			</div>
			<div className="nf_img">
				<img src={img} alt="404" />
			</div>
			<div className="nf_text">
				<p>No match for {location.pathname}</p>
			</div>
		</div>
	);
};

export default NotFoundPage;
