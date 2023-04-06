import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import icon from './img/mark.svg';
import './FavoritesNav.css';

const FavoritesNav = () => {
	const [count, setCount] = useState();
	const storeData = useSelector(state => state.favoritesReducer)

	useEffect(() => {
		const lengthFavorites = Object.keys(storeData).length;
		lengthFavorites.toString().length > 2 ? setCount('...') : setCount(lengthFavorites);
	});
	return (
		<div className="counter_container">
			<Link to="/favorites">
				<span className="counter">{count}</span>
				<img src={icon} alt="fav" />
			</Link>
		</div>
	);
};

export default FavoritesNav;
