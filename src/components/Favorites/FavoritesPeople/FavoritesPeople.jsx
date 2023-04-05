import './FavoritesPeople.css';

const FavoritesPeople = ({storeData}) => {
	return (
		<>
		{storeData?.map(({name,img})=> (
			<li>
				<img src={img} alt="" />
				{name}</li>
		))}
		</>
	);
}

export default FavoritesPeople;