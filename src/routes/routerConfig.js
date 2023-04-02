import PeoplePage from '@containers/PeoplePage';
import SpeciesPage from '@containers/SpeciesPage';
import SearchPage from '@containers/SearchPage';
import NotFoundPage from '@containers/NotFoundPage';
import HomePage from '@containers/HomePage';
import FilmPage from '@containers/FilmPage';
import PersonPage from '../containers/PersonPage/PersonPage';

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
		path: '/people/:id',
		element: <PersonPage />,
	},
	{
		path: '/species',
		element: <SpeciesPage />,
	},
	{
		path: '/films',
		element: <FilmPage />,
	},
	{
		path: '*',
		exact: false,
		element: <NotFoundPage />,
	},
];
