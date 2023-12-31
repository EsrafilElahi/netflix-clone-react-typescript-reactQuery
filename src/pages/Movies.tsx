import MovieItem from 'components/Movie/MovieItem';
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { Result, Value } from 'types/HomePageTypes';
import { fetchData } from '../api gateway/HomePage';

interface MoviesProps {
	title: string;
}

const Movies: React.FC<MoviesProps> = (props) => {
	const { title } = props;

	const [page, setPage] = useState<number>(1);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const fetchMovies = async (page: number) => {
		const res = await fetchData(
			`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
		);
		return res;
	};

	const { isLoading, isError, error, data, isFetching } = useQuery<Value>(['movies', page], () => fetchMovies(page), {
		keepPreviousData: true,
	});

	const handleScrollToTop = () => {
		(containerRef.current as Element).scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	useEffect(() => {
		if (!isFetching) {
			handleScrollToTop();
		}
	}, [page, isFetching]);

	console.log('data movs :', data);

	if (isLoading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>error</div>;
	}

	return (
		<div className='px-3 py-5 mt-[3rem]' ref={containerRef}>
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
				{isFetching ? (
					<span>loading...</span>
				) : (
					<>
						<button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
							Previous Page
						</button>{' '}
						<button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Movies;
