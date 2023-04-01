import './PersonInfo.css';

const PersonInfo = ({ personInfo }) => {
	return (
		<>
			{personInfo.map(
				({ title, data, id }) =>
					personInfo && (
						<li className="list-group-item" key={title}>
							{title}: {data}
						</li>
					),
			)}
		</>
	);
};

export default PersonInfo;
