import React,{ useState } from 'react';
import { useInfiniteQuery,useQuery,useQueryClient } from 'react-query';
import { Value } from 'types/HomePageTypes';
import { fetchData } from '../api gateway/HomePage';

interface MovieProps {
	title: string;
}

const Movies: React.FC<MovieProps> = (props) => {
	const { title } = props;
	const queryClient = useQueryClient();

	const [page, setPage] = useState<number>(1);

	const fetchMovies = async (page: number) => {
		const res = await fetchData(
			`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
		);
		return res;
	};

	// const { data: moviesList, error, isLoading } = useQuery<Value[] | Value>(['movies', 'page'], fetchMovies);

	// console.log('/movies/ :', moviesList);

	const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
		['movies', page],
		() => fetchMovies(page),
		{ keepPreviousData: true }
	);

	console.log('data movs :', data);

	const fetchAgain = () => {
		setPage((prev) => prev + 1);
	};

	if (isLoading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>error</div>;
	}

	return (
		<div>
			{isLoading ? (
				<div>Loading...</div>
			) : isError ? (
				<div>Error: </div>
			) : (
				<div>{data.results?.map((project: any) => <p key={project.id}>{project.id}</p>)}</div>
			)}
			<span>Current Page: {page + 1}</span>
			<button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
				Previous Page
			</button>{' '}
			<button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
			{isFetching ? <span> Loading...</span> : null}{' '}
		</div>
	);
};

export default Movies;
