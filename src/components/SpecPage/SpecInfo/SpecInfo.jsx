import './SpecInfo.css';

const SpecInfo = ({specInfo}) => {
	return (
		<>
		{specInfo?.map(
				({ title, data, id }) =>
				specInfo && (
						<li className="list-group-item" key={title}>
							{title}: {data}
						</li>
					),
			)}</>
	);
}

export default SpecInfo;