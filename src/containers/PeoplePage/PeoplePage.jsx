import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';
import './PeoplePage.css';

const PeoplePage = () => {
	const [people, setPeople] = useState(null);
	const [errorApi, seterrorApi] = useState(false);

	const getResource = async (url) => {
		const res = await getApiResource(url);
		if (res) {
			const peopleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const img = getPeopleImg(id);
				return {
					id,
					name,
					img,
				};
			});
			setPeople(peopleList);
			seterrorApi(false);
		} else {
			seterrorApi(true);
		}
	};

	useEffect(() => {
		getResource(API_PEOPLE);
	}, []);
	return <>
	{
		people && <PeopleList people={people} />
		}
		</>;
};

export default PeoplePage;
