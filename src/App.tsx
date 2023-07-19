// eslint-disable-next-line prettier/prettier
import WithLayout from 'components/layout/WithLayout';
import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Genres from './pages/Genres';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import SeriesDetails from './pages/SerieDetails';
import Series from './pages/Series';

const HomeLayout = WithLayout(Home);
const MoviesLayout = WithLayout(Movies);
const SeriesLayout = WithLayout(Series);
const GenresLayout = WithLayout(Genres);
const MovieDetailsLayout = WithLayout(MovieDetails);
const SerieDetailsLayout = WithLayout(SeriesDetails);



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
	{
		path: '/movie-details/:id',
		element: <MovieDetailsLayout title='movie details' />,
	},
	{
		path: '/serie-details/:id',
		element: <SerieDetailsLayout title='serie details' />,
	},
	{
		path: 'movies/movie-details/:id',
		element: <MovieDetailsLayout title='movie details' />,
	},
	{
		path: 'series/serie-details/:id',
		element: <SerieDetailsLayout title='serie details' />,
	},
]);
// https://api.themoviedb.org/3/movie/{movie_id}?language=en-US

const App: React.FC = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
