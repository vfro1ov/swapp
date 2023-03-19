import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import './PeoplePage.css';

const PeoplePage = () => {
	const [people, setPeople] = useState(null);

	const getResource = async (url) => {
		const res = await getApiResource(url);
		const peopleList = res.results.map(({ name, url }) => {
			const id = getPeopleId(url);
			const img = getPeopleImg(id);
			return {
				id: id,
				name: name,
				img: img,
			};
		});
		setPeople(peopleList);
	};

	useEffect(() => {
		getResource(API_PEOPLE);
	}, []);

	return (
		<>
			<ul>
				{people?.map(({ id, name, img }) => (
					<li key={id}>
						<img src={img} alt={name} />
						{name}
					</li>
				))}
			</ul>
		</>
	);
};

export default PeoplePage;
