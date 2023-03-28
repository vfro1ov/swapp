import { Link, useNavigate } from 'react-router-dom';
import './LinkBack.css';

const LinkBack = () => {
	const history = useNavigate();

	const handleBack = (e) => {
		e.preventDefault();
		history(-1);
	};
	return (
		<div className='linkback'>
			<Link href="/" className='btn1 btn-back' onClick={handleBack}>
				go baack
			</Link>
		</div>
	);
};

export default LinkBack;
