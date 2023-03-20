import { useEffect, useState } from 'react';
import { API_SPECIES } from '../../constants/api';
import { getApiResource } from '../../utils/network';
import { getSpeciesId, getSpeciesImg } from '../../services/getSpeciesData';

import './SpeciesPage.css';

const SpeciesPage = () => {
	const [species, setSpecies] = useState(null);

	const getResource = async (url) => {
		const res = await getApiResource(url);
		const speciesList = res.results.map(({ name, url }) => {
			const id = getSpeciesId(url);
			const img = getSpeciesImg(id);
			return {
				id,
				name,
				img,
			};
		});
		console.log(speciesList)
		setSpecies(speciesList);
	};

	useEffect(() => {
		getResource(API_SPECIES);
	}, []);

	return (
		<>
			{species && (
				<ul>
					{species.map(({ id, name, img }) => (
						<li key={id}>
							<img src={img} alt={name} />
							{name}
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default SpeciesPage;
