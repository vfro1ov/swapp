import LinkBack from '@components/LinkBack/LinkBack';
import './ErrorApi.css';
import img from './img/babyyoda.gif';

const ErrorApi = () => {
	return (
		<>
			<LinkBack />
			<div className="errorApi">
				<h2>ERROR 404</h2>
				<img src={img} alt="babyyoda" />
				<p>May the Force be with you</p>
			</div>
		</>
	);
};

export default ErrorApi;
