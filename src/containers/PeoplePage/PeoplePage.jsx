import { useState, useEffect } from 'react';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import {getPageId } from '@services/getPageId';
import { useQueryParams } from '@hooks/useQueryParams';
import PeopleList from '@components/PeoplePage/PeopleList';
import Pagination from '@components/Pagination';

import './PeoplePage.css';

const PeoplePage = () => {
	const [people, setPeople] = useState([]);
	// const [search, setSearch] = useState('');
	const [errorApi, setErrorApi] = useState(false);
	const [counterPage, setCounterPage] = useState(1);
	const [prev, setPrev] = useState(null);
	const [next, setNext] = useState(null);

	const query = useQueryParams();
	const queryPage = query.get('page');

	const getResource = async (url) => {
		const res = await getApiResource(url);
		console.log(res);
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
			setCounterPage(getPageId(url));
			setPrev(res.previous);
			setNext(res.next)
			setPeople(peopleList);
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};

	// const onChangePeople = (event) => {
	// 	const value = event.target.value;
	// 	setSearch(value);
	// 	getResource(value);
	// };

	useEffect(() => {
		getResource(API_PEOPLE + queryPage);
	}, [queryPage]);

	return (
		<>
			<div className="people_wrapper">
				{/* <div className="input-group input-group-lg">
					<input
						className="search_input form-control"
						type="text"
						onChange={onChangePeople}
						value={search}
					/>
				</div> */}
				<div className="people_card">{people && <PeopleList people={people} />}</div>
			</div>
			<Pagination 
			getResource={getResource}
			counterPage={counterPage}
			prev={prev}
			next={next}
			/>
		</>
	);
};

export default PeoplePage;
