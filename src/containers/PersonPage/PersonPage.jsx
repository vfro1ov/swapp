import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getApiResource } from '@utils/network';
import { getPeopleImg } from '@services/getPeopleData';
import { API_PERSON } from '@constants/api';

import './PersonPage.css';

const PersonPage = () => {
	const [personInfo, setPersonInfo] = useState();
	const [personName, setPersonName] = useState();
	const [personImg, setPersonImg] = useState();
	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const res = await getApiResource(`${API_PERSON}/${id}/`);
			setPersonInfo([
				{ title: 'Name', data: res.name },
				{ title: 'Gender', data: res.gender },
				{ title: 'Hair color', data: res.hair_color },
				{ title: 'Skin_color', data: res.skin_color },
				{ title: 'eye_color', data: res.eye_color },
				{ title: 'species', data: res.species },
			]);
			setPersonName(res.name);
			setPersonImg(getPeopleImg(id));
		})();
	}, [id]);
	return (
		<>
			<h1>{personName}</h1>
			<img src={personImg} alt="img" />

			{personInfo && (
				<ul>
					{personInfo.map(
						({ title, data }) =>
							data && (
								<li className="list-group-item">
									{title}: {data}
								</li>
							),
					)}
				</ul>
			)}
		</>
	);
};

export default PersonPage;
