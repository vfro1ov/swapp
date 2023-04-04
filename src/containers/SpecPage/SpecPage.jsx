import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getApiResource } from '@utils/network';
import { getSpeciesImg } from '@services/getSpeciesData';
import LinkBack from '@components/LinkBack/LinkBack';
import { API_SPEC } from '@constants/api';
import SpecInfo from '@components/SpecPage/SpecInfo';
import SpecPeople from '@components/SpecPage/SpecPeople';

import './SpecPage.css';

const SpecPage = () => {
	const [specInfo, setSpecInfo] = useState();
	const [specImg, setSpecImg] = useState();
	const [specName, setSpecName] = useState();
	const [specPeople, setSpecPeople] = useState();
	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const res = await getApiResource(`${API_SPEC}/${id}/`);
			setSpecInfo([
				{ title: 'Name', data: res.name },
				{ title: 'Classification', data: res.classification },
				{ title: 'Designation', data: res.designation },
				{ title: 'Skin colors', data: res.skin_colors },
				{ title: 'Average_lifespan', data: res.average_lifespan },
			]);
			setSpecImg(getSpeciesImg(id));
			setSpecName(res.name);
			setSpecPeople(res.people,id);
			console.log(res.people);
		})();
	}, [id]);
	return (
		<>
			<LinkBack />
			<div>
				<h1>{specName}</h1>
				<img src={specImg} alt="img" />
				<SpecInfo specInfo={specInfo} /> 
				{specPeople && <SpecPeople specPeople={specPeople} />}
			</div>
		</>
	);
};

export default SpecPage;
