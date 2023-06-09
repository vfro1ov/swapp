import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getApiResource } from '@utils/network';
import { getPeopleImg } from '@services/getPeopleData';
import LinkBack from '@components/LinkBack/LinkBack';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import { API_PERSON } from '@constants/api';

import './PersonPage.css';
import PersonFilms from '@components/PersonPage/PersonFilms';

const PersonPage = () => {
	const [personId, setPersonId] = useState();
	const [personInfo, setPersonInfo] = useState();
	const [personName, setPersonName] = useState();
	const [personImg, setPersonImg] = useState();
	const [personFilm, setPersonFilm] = useState();
	const [personFavorites, setPersonFavorites] = useState(false);
	const storeData = useSelector(state => state.favoritesReducer)
	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const res = await getApiResource(`${API_PERSON}/${id}/`);

			storeData[id] ? setPersonFavorites(true) : setPersonFavorites(false)
			
			setPersonId(id)
			setPersonInfo([
				{ title: 'Name', data: res.name },
				{ title: 'Gender', data: res.gender },
				{ title: 'Hair color', data: res.hair_color },
				{ title: 'Skin color', data: res.skin_color },
				{ title: 'Eye color', data: res.eye_color },
			]);
			setPersonImg(getPeopleImg(id));
			setPersonName(res.name);
			res.films.length && setPersonFilm(res.films);
		})();
	}, [id]);
	return (
		<>
			<LinkBack />
			<div className="card mb-3 person">
				<div className="row g-0">
					<h5 className="card-title person_name">{personName}</h5>
					<PersonPhoto personImg={personImg} personId={personId} personName={personName} personFavorites={personFavorites} setPersonFavorites={setPersonFavorites}/>
					<div className="col-md-8">
						
						<div className="card-body person_info">
							
							{personInfo && (
								<ul>
									<PersonInfo personInfo={personInfo} />
								</ul>
							)}
						</div>
					</div>
					<div className="card-body person_info">
						{personFilm && (
							<ul>
								<PersonFilms personFilm={personFilm} />
							</ul>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonPage;
