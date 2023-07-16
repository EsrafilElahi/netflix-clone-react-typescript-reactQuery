import React from 'react';
import { useQuery,useQueryClient } from 'react-query';
import { fetchData } from '../api gateway/HomePage';

interface MovieProps {
	title: string;
}

const Movies: React.FC<MovieProps> = (props) => {
	const { title } = props;
	const queryClient = useQueryClient();
	
	const fetchMovies = async () => {
		const res = await fetchData(import.meta.env.VITE_ALL_MOVIES);
		return res;
	};

	const { data: moviesList, error, isLoading } = useQuery<any>(['movies', 'page'], fetchMovies);

	console.log('/movies/ :', moviesList);

	if (isLoading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>error</div>;
	}

	return <div>hi {title} page</div>;
};

export default Movies;
