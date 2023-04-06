import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList';
import './FavoritesPage.css';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
	const [people, setPeople] = useState([])
	const storeData = useSelector(state => state.favoritesReducer)
	
	useEffect(()=> {
		const arr = Object.entries(storeData);
		if (arr.length) {
			const res = arr.map(item => {
				return {
					id: item[0],
					name: item[1].name,
					img: item[1].img,
				}
			})
		setPeople(res)
		}
	},[])
	return (
		<>
		<div className='result'>
		{
			people.length ? <PeopleList people={people}/> : <h2>Not Favorites</h2>
		}
		</div>
		</>
	);
}

export default FavoritesPage;