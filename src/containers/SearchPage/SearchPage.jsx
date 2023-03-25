import { useState } from 'react';
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import Result from '@components/SearchPage/Result';

import './SearchPage.css';

const SearchPage = () => {
	const [search, setSearch] = useState('');
	const [people, setPeople] = useState([]);

	const getResponse = async (param) => {
		const res = await getApiResource(API_SEARCH + param);
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
		}
	};
	const onChangePeople = (event) => {
		const value = event.target.value;
		setSearch(value);
		getResponse(value);
	};

	return (
		<>
			<div className="input-group input-group-lg">
				<input
					className="search_input form-control"
					type="text"
					onChange={onChangePeople}
					value={search}
				/>
			</div>
			<div className="search_results">
				<div className="search_people_card">
					{people.length ? <PeopleList people={people} />	: <Result/>} 
				</div>
			</div>
		</>
	);
};

export default SearchPage;
