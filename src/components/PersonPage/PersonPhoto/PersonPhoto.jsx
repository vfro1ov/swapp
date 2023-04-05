import { useDispatch } from 'react-redux';
import { setPersonToFavorites, removePersonToFavorites } from '@store/actions';
import iconFavorite from './img/fav.svg';
import iconFavoriteFill from './img/fav-fill.svg';

import './PersonPhoto.css';

const PersonPhoto = ({ personImg, personId, personName, personFavorites, setPersonFavorites }) => {
	const dispatch = useDispatch();

	const dispatchFavoritePeople = () => {
		if (personFavorites) {
			dispatch(removePersonToFavorites(personId));
			setPersonFavorites(false);
		} else {
			dispatch(
				setPersonToFavorites({
					[personId]: {
						name: personName,
						img: personImg,
					},
				}),
			);
			setPersonFavorites(true);
		}
	};

	return (
		<>
			<div className="col-md-4 person_img">
				<img src={personImg} alt="img" />
				</div>
<div className='icon'>
		<img 
		src={personFavorites ? iconFavoriteFill : iconFavorite} 
		alt="add favorites" 
		onClick={dispatchFavoritePeople}
		className='icon_favorite'
		/>

			</div>
		</>
	);
};

export default PersonPhoto;
