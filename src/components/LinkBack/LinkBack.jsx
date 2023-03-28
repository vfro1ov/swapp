import { Link, useNavigate } from 'react-router-dom';
import './LinkBack.scss';

const LinkBack = () => {
	const history = useNavigate();

	const handleBack = (e) => {
		e.preventDefault();
		history(-1);
	};
	return (
		<div>
			<Link href="/" className='btn-flip' onClick={handleBack} data-back="BACK" data-front="Назад">
			</Link>
		</div>
	);
};

export default LinkBack;
