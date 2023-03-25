import { useEffect, useState } from 'react';
import { useQueryParams } from '@hooks/useQueryParams';
import { API_SPECIES } from '@constants/api';
import { getApiResource } from '@utils/network';
import { getSpeciesId, getSpeciesImg } from '@services/getSpeciesData';
import { getPageId } from '@services/getPageId';
import SpeciesList from '@components/SpeciesPage/SpeciesList';
import Pagination from '@components/Pagination';

import './SpeciesPage.css';

const SpeciesPage = () => {
	const [species, setSpecies] = useState();
	const [counterPage, setCounterPage] = useState(1);
	const [prev, setPrev] = useState(null);
	const [next, setNext] = useState(null);

	const query = useQueryParams();
	const queryPage = query.get('page');

	const getResource = async (url) => {
		const res = await getApiResource(url);
		const speciesList = res.results.map(({ name, url, language }) => {
			const id = getSpeciesId(url);
			const img = getSpeciesImg(id);
			return {
				id,
				name,
				img,
				language,
			};
		});
		setCounterPage(getPageId(url));
		setSpecies(speciesList);
		setPrev(res.previous);
		setNext(res.next);
	};

	useEffect(() => {
		getResource(API_SPECIES + queryPage);
	}, [queryPage]);

	return (
		<>
			<div className="species__container">{species && <SpeciesList species={species} />}</div>
			<Pagination getResource={getResource} counterPage={counterPage} prev={prev} next={next} />
		</>
	);
};

export default SpeciesPage;
