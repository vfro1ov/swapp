import { useEffect, useState } from 'react';
import { useQueryParams } from '@hooks/useQueryParams';
import { API_SPECIES } from '@constants/api';
import { getApiResource } from '@utils/network';
import { getSpeciesId, getSpeciesImg } from '@services/getSpeciesData';
import { getPageId } from '@services/getPageId';
import SpeciesList from '@components/SpeciesPage/SpeciesList';
import Pagination from '@components/Pagination';
import { withErrorApi } from '@hoc-helpers/withErrorApi';


import './SpeciesPage.css';

const SpeciesPage = ({setErrorApi}) => {
	const [species, setSpecies] = useState();
	const [counterPage, setCounterPage] = useState(1);
	const [prev, setPrev] = useState(null);
	const [next, setNext] = useState(null);

	const query = useQueryParams();
	const queryPage = query.get('page');

	const getResource = async (url) => {
		const res = await getApiResource(url);
		if (res) {
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
		setErrorApi(false)
	} else {
		setErrorApi(true)
	}
	}
	useEffect(() => {
		getResource(API_SPECIES + queryPage);
	}, [queryPage]);

	return (
		<>
			<Pagination getResource={getResource} counterPage={counterPage} prev={prev} next={next} />
			<div className="species__container">{species && <SpeciesList species={species} />}</div>
		</>
	);
};
export default withErrorApi(SpeciesPage);
