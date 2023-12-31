import MovieItem from 'components/Movie/MovieItem';
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useInfiniteQuery, useQuery, useQueryClient } from 'react-query';
import { Result, Value } from 'types/HomePageTypes';
import { fetchData } from '../api gateway/HomePage';

interface SeriesProps {
	title: string;
}

const Series: React.FC<SeriesProps> = (props) => {
	const { title } = props;

	const [page, setPage] = useState<number>(1);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const fetchSeries = async (page: number) => {
		const res = await fetchData(
			`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`
		);
		return res;
	};

	const { isLoading, isError, error, data, isFetching } = useQuery<Value>(['series', page], () => fetchSeries(page), {
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
					{(data?.results as Result[])?.map((project) => <MovieItem key={project.id} series item={project} />)}
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

export default Series;
