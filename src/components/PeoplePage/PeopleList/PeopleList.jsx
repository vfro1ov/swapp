import './PeopleList.css';

const PeopleList = ({people}) => {
	return (
		<ul>
		{people.map(({ id, name, img }) => (
			<li key={id}>
				<img src={img} alt={name} />
				{name}
			</li>
		))}
	</ul>
	);
}

export default PeopleList;