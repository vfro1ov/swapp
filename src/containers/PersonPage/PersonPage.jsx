import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getApiResource } from '@utils/network';
import { getPeopleImg } from '@services/getPeopleData';
import LinkBack from '@components/LinkBack/LinkBack';
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
				{ title: 'Skin color', data: res.skin_color },
				{ title: 'Eye color', data: res.eye_color },
			]);
			setPersonName(res.name);
			setPersonImg(getPeopleImg(id));
		})();
	}, [id]);
	return (
		<>
			<LinkBack />
			<div className="card mb-3 person">
				<div className="row g-0">
					<h5 className="card-title person_name">{personName}</h5>
					<div className="col-md-4 person_img">
						<img src={personImg} alt="img" />
					</div>
					<div className="col-md-8">
						<div className="card-body person_info">
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonPage;
