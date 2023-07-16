// eslint-disable-next-line prettier/prettier
import WithLayout from 'components/layout/WithLayout';
import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { fetchData } from './api gateway/HomePage';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

const HomeLayout = WithLayout(Home);
const MoviesLayout = WithLayout(Movies);
const SeriesLayout = WithLayout(Series);

interface PP {}

const MoviesLoader: React.FC<PP> = async () => {
	const queryClient = useQueryClient();
	const getAll = async () => {
		const getAllMoviesList = await fetchData(import.meta.env.VITE_TRENDING_MOVIES);
		return await queryClient.prefetchQuery(['movies', 'page'], getAllMoviesList);
	};

	React.useEffect(() => {
		getAll();
	}, []); // Empty dependency array to run the effect only once

	return null; // The loader component doesn't render anything
};


const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout title='Home' />,
	},
	{
		path: '/movies',
		element: <MoviesLayout title='Movies' />,
		loader: () => <MoviesLoader />,
	},
	{
		path: '/series',
		element: <SeriesLayout title='Series' />,
		loader: async () => {
			// prefetch this page data
		},
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
