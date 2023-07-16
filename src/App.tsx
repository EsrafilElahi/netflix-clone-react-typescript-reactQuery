// eslint-disable-next-line prettier/prettier
import WithLayout from 'components/layout/WithLayout';
import React from 'react';
import { useQueryClient } from 'react-query';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

const HomeLayout = WithLayout(Home);
const MoviesLayout = WithLayout(Movies);
const SeriesLayout = WithLayout(Series);


const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout title='Home' act={2234234} />,
	},
	{
		path: '/movies',
		element: <MoviesLayout title='Movies' />,
		loader: async () => {
			const queryClient = useQueryClient();
			const prefetchTodos = async () => {
				await queryClient.prefetchQuery('todos', fetchTodos);
			};
		},
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
