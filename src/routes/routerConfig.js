import PeoplePage from '@containers/PeoplePage';
import SpeciesPage from '@containers/SpeciesPage';
import SpecPage from '@containers/SpecPage';
import SearchPage from '@containers/SearchPage';
import NotFoundPage from '@containers/NotFoundPage';
import HomePage from '@containers/HomePage';
import FilmPage from '@containers/FilmPage';
import PersonPage from '@containers/PersonPage/PersonPage';
import Favorites from '@containers/Favorites';

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
		path: '/species/:id',
		element: <SpecPage />,
	},
	{
		path: '/films',
		element: <FilmPage />,
	},
	{
		path: '/favorites',
		element: <Favorites />,
	},
	{
		path: '*',
		exact: false,
		element: <NotFoundPage />,
	},
];
