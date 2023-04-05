import { useDispatch } from 'react-redux';
import { setPersonToFavorites, removePersonToFavorites } from '@store/actions';
import './PersonPhoto.css';

const PersonPhoto = ({ personImg, personId, personName, personFavorites, setPersonFavorites }) => {
	const dispatch = useDispatch();

	const set = () => {
		dispatch(
			setPersonToFavorites({
				[personId]: {
					name: personName,
					img: personImg,
				},
			}),
		);
		setPersonFavorites(true)
	};

	const remove = () => {
		dispatch(removePersonToFavorites(personId));
		setPersonFavorites(false)

	};
	return (
		<>
			<div className="col-md-4 person_img">
				<img src={personImg} alt="img" />
				{personFavorites ? <button onClick={remove}>Удалить из избранного</button> : <button onClick={set}>Добавить в избранное</button>}
			</div>
		</>
	);
};

export default PersonPhoto;
