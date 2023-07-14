import HeroImage from 'assets/images/bg.jpg';
import React,{ useEffect,useState } from 'react';
import { Helmet } from "react-helmet";
import { useQuery } from 'react-query';
import styles from '../styles/pages_styles/Home.module.css';

type Result = {
	adul: boolean;
	backdrop_path: string | null;
	genre_ids: number[];
	id: number;
	media_type: 'movie' | 'tv' | Omit<string, 'movie' | 'tv'>;
	original_language: 'en' | Omit<string, 'en'>;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	release_date: string;
	title: string;
	video: false;
	vote_average: number;
	vote_count: number;
};

type Value = {
	page: number;
	results: Result[];
	total_pages: number;
	total_results: number;
};

type HomeProps = {
	title: string;
	act: number;
};

type HomeData = Value[]; // Adjust the type as per your data structure


const Home: React.FC<HomeProps> = (props) => {
	const { title } = props;

	const { isLoading, data: homeData, error } = useQuery<HomeData>(['home', 'trendings', 'favorites', 'series']);

	console.log('data in home page :', homeData);


	if (isLoading) {
		return <div>loading...</div>;
	}
	if(error) {
		return <div>error</div>;
	}

	return (
		<div className='h-full relative'>
			<Helmet>
				<title>Netflix | {title}</title>
			</Helmet>

			<h1 className={`z-10 ${styles.txtReflect}`}>Enjoy Watch Movies</h1>
			<img src={HeroImage} alt='hero image' className='w-full h-full absolute' />
			<div className={`w-full h-full absolute z-2 ${styles.bgGradient}`}></div>
		</div>
	);
};

export default Home;
