// eslint-disable-next-line prettier/prettier
import WithLayout from 'components/layout/WithLayout';
import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Genres from './pages/Genres';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

const HomeLayout = WithLayout(Home);
const MoviesLayout = WithLayout(Movies);
const SeriesLayout = WithLayout(Series);
const GenresLayout = WithLayout(Genres);


const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout title='Home' />,
	},
	{
		path: '/movies',
		element: <MoviesLayout title='Movies' />,
	},
	{
		path: '/series',
		element: <SeriesLayout title='Series' />,
	},
	{
		path: '/genres',
		element: <GenresLayout title='genres' />,
	},
]);


const App: React.FC = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
