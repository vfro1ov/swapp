import { useState, useEffect } from 'react';
import { makeConCorrentRequest } from '@utils/network';

import './SpecPeople.css';

const SpecPeople = ({specPeople,id}) => {
	const [peopleName,setPeopleName] = useState()
	useEffect(() => {
		(async () => {
			const response = await makeConCorrentRequest(specPeople);
			setPeopleName(response);
			console.log(response)
		})();
	}, []);
	return (
		<>
		<div>
			<h3>Members:</h3>
		{
			peopleName?.map(({name})=> (
					<li>{name}</li>
			))
		}
		</div>
		</>
	);
}

export default SpecPeople;