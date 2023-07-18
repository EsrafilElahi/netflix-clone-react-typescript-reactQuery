import MovieItem from 'components/Movie/MovieItem';
import React,{ useState } from 'react';
import { Helmet } from 'react-helmet';
import { useInfiniteQuery,useQuery,useQueryClient } from 'react-query';
import { Result,Value } from 'types/HomePageTypes';
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

	const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<Value>(
		['movies', page],
		() => fetchMovies(page),
		{ keepPreviousData: true }
	);

	console.log('data movs :', data);

	if (isLoading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>error</div>;
	}

	return (
		<div className='px-3 py-5 mt-[3rem]'>
			<Helmet>
				<title>Netflix | {title}</title>
			</Helmet>
			{isLoading ? (
				<div>Loading...</div>
			) : isError ? (
				<div>Error: </div>
			) : (
				<div className='flex flex-wrap justify-center sm:justify-between items-center gap-8 '>
					{(data?.results as Result[])?.map((project) => <MovieItem key={project.id} item={project} />)}
				</div>
			)}
			<div className='flex justify-center mt-10 gap-10'>
				<button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
					Previous Page
				</button>{' '}
				<button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
				{isFetching ? <span> Loading...</span> : null}{' '}
			</div>
		</div>
	);
};

export default Movies;
