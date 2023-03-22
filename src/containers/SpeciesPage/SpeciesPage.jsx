import { useEffect, useState } from 'react';
import { API_SPECIES } from '@constants/api';
import { getApiResource } from '@utils/network';
import { getSpeciesId, getSpeciesImg } from '@services/getSpeciesData';
import SpeciesList from '@components/SpeciesPage/SpeciesList'

import './SpeciesPage.css';

const SpeciesPage = () => {
	const [species, setSpecies] = useState();

	const getResource = async (url) => {
		const res = await getApiResource(url);
		const speciesList = res.results.map(({ name, url, language }) => {
			const id = getSpeciesId(url);
			const img = getSpeciesImg(id);
			return {
				id,
				name,
				img,
				language
			};
		});
		console.log(speciesList);
		setSpecies(speciesList);
	};

	useEffect(() => {
		getResource(API_SPECIES);
	}, []);

	return (
		<>
		<div className='species__container'>
			{species && <SpeciesList species={species}/>}
			</div>
		</>
	);
};

export default SpeciesPage;
