import { useSelector } from 'react-redux';

import './Favorites.css';

const Favorites = () => {
	const storeData = useSelector(state => state.favoritesReducer)
	console.log(storeData)
	return (
		<>
		<h1>Fav</h1>
		</>
	);
}

export default Favorites;