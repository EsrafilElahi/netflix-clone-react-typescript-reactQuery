// @ts-nocheck
// @ts-ignore

import MovieItem from 'components/Movie/MovieItem';
import React, { useDebugValue, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Result1, Result2, Value } from 'types/HomePageTypes';
import { fetchData } from '../api gateway/HomePage';

interface MovieDetailsProps {
	title: string;
}

export const isResult1 = (value: Partial<Result1> | Partial<Result2>): value is Partial<Result1> => {
	return 'original_name' in value && 'first_air_date' in value;
};

export const isResult2 = (value: Partial<Result1> | Partial<Result2>): value is Partial<Result2> => {
	return 'original_title' in value && 'release_date' in value;
};

const MoviesDetails: React.FC<MovieDetailsProps> = (props) => {
	const { title } = props;

	const { id } = useParams();

	const fetchMovieDetails = async () => {
		const res = await fetchData(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
		return res;
	};

	const { isLoading, isError, error, data } = useQuery<Partial<Result1> | Partial<Result2>>(
		['movies', id],
		() => fetchMovieDetails(),
		{
			enabled: !!id,
		}
	);

	console.log('data movie details :', data);

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
				<div className='flex flex-wrap justify-center sm:justify-between items-center gap-4'>
					<div className=''>
						<img
							src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
							alt={isResult1(data) ? data.original_name : data?.original_title}
							className='w-full h-full rounded-lg'
						/>
					</div>
					<div className='flex flex-1 flex-col justify-center items-center'>
						<span>name : {isResult1(data) ? data?.original_name : data?.original_title}</span>
						<span>year : {isResult1(data) ? data?.first_air_date : data?.release_date}</span>
						<span>budget : {data?.budget}</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default MoviesDetails;
