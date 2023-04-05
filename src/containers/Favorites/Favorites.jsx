import { useSelector } from 'react-redux';
import FavoritesPeople from '@components/Favorites/FavoritesPeople'

import './Favorites.css';

const Favorites = () => {
	const storeData = useSelector(state => state.favoritesReducer)
	console.log(storeData)
	return (
		<>
		{/* <FavoritesPeople storeData={storeData} /> */}
		</>
	);
}

export default Favorites;