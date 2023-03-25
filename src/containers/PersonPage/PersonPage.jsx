import { useParams } from 'react-router';

import './PersonPage.css';

const PersonPage = () => {
	const id = useParams()
	return (
		<>
			<h1>{useParams().id}</h1>
		</>
	);
};

export default PersonPage;
