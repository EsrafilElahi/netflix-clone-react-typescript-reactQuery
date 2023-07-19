import MovieItem from 'components/Movie/MovieItem';
import React,{ useEffect,useRef,useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { Result,Value } from 'types/HomePageTypes';
import { fetchData } from '../api gateway/HomePage';

interface MovieDetailsProps {
	title: string;
  id: number
}

const MoviesDetails: React.FC<MovieDetailsProps> = (props) => {
	const { title, id } = props;


	const fetchMovieDetails = async (id: number) => {
		const res = await fetchData(`https://api.themoviedb.org/3/movie/id?language=en-US`);
		return res;
	};

	const { isLoading, isError, error, data, isFetching } = useQuery<Value>(['movies', id], () => fetchMovieDetails(id), {
		enabled: !!id,
	});

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
		</div>
	);
};

export default MoviesDetails;
