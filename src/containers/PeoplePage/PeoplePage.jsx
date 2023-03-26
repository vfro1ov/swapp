import { useState, useEffect } from 'react';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import { getPageId } from '@services/getPageId';
import { useQueryParams } from '@hooks/useQueryParams';
import PeopleList from '@components/PeoplePage/PeopleList';
import Pagination from '@components/Pagination';
import { withErrorApi } from '@hoc-helpers/withErrorApi';

import './PeoplePage.css';

const PeoplePage = ({ setErrorApi }) => {
	const [people, setPeople] = useState([]);
	// const [search, setSearch] = useState('');
	const [counterPage, setCounterPage] = useState(1);
	const [prev, setPrev] = useState(null);
	const [next, setNext] = useState(null);

	const query = useQueryParams();
	const queryPage = query.get('page');

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
			setCounterPage(getPageId(url));
			setPrev(res.previous);
			setNext(res.next);
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
			<Pagination getResource={getResource} counterPage={counterPage} prev={prev} next={next} />
				{/* <div className="input-group input-group-lg">
					<input
						className="search_input form-control"
						type="text"
						onChange={onChangePeople}
						value={search}
					/>
				</div> */}
				<div className="people_container">{people && <PeopleList people={people} />}</div>
		</>
	);
};

export default withErrorApi(PeoplePage);
