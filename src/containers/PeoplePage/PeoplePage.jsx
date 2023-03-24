import { useState, useEffect } from 'react';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import './PeoplePage.css';

const PeoplePage = () => {
	const [people, setPeople] = useState([]);
	const [errorApi, setErrorApi] = useState(false);


	const getResource = async (url) => {
		const res = await getApiResource(url);
		if (res) {
			const peopleList = res.results.map(({ name, url, gender }) => {
				const id = getPeopleId(url);
				const img = getPeopleImg(id);
				return {
					id,
					name,
					img,
					gender,
				};
			});
			setPeople(peopleList);
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};

	useEffect(() => {
		getResource(API_PEOPLE);
	}, []);

	return (
		<>
			<div className="people_wrapper">
				{people && <PeopleList people={people} />}
			</div>
		</>
	);
};

export default PeoplePage;
