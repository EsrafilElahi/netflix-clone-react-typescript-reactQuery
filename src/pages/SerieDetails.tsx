import MovieItem from 'components/Movie/MovieItem';
import React,{ useEffect,useRef,useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Result,Value } from 'types/HomePageTypes';
import { fetchData } from '../api gateway/HomePage';

interface MovieDetailsProps {
	title: string;
}

const SeriesDetails: React.FC<MovieDetailsProps> = (props) => {
	const { title } = props;

	const { id } = useParams();

	const fetchSerieDetails = async () => {
		const res = await fetchData(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);
		return res;
	};

	const { isLoading, isError, error, data } = useQuery<Value>(['movies', id], () => fetchSerieDetails(), {
		enabled: !!id,
	});

	console.log('data serie details :', data);

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

export default SeriesDetails;
