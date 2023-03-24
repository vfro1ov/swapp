import PeoplePage from '@containers/PeoplePage';
import SpeciesPage from '@containers/SpeciesPage';
import SearchPage from '@containers/SearchPage';
import NotFoundPage from '@containers/NotFoundPage';
import HomePage from '@containers/HomePage';

export const routerConfig = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/search',
		element: <SearchPage />,
	},
	{
		path: '/people',
		element: <PeoplePage />,
	},
	{
		path: '/species',
		element: <SpeciesPage />,
	},
	{
		path: '*',
		exact: false,
		element: <NotFoundPage />,
	},
];
