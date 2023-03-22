import PeoplePage from '@containers/PeoplePage';
import SpeciesPage from '@containers/SpeciesPage';

export const routerConfig = [
	{
		path: '/people',
		element: <PeoplePage />,
	},
	{
		path: '/species',
		element: <SpeciesPage />,
	}
]