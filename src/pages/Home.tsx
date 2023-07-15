import HeroImage from 'assets/images/bg.jpg';
import MovieItem from 'components/Movie/MovieItem';
import React,{ useEffect,useState } from 'react';
import { Helmet } from "react-helmet";
import { useQuery } from 'react-query';
import styles from 'styles/pages_styles/Home.module.css';
import { Result,Value } from 'types/HomePageTypes';


type HomeProps = {
	title: string;
	act: number;
};

const Home: React.FC<HomeProps> = (props) => {
	const { title } = props;

	const { isLoading, data: homeData, error } = useQuery<Value[] | Value>(['home', 'trendings', 'favorites', 'series']);
	console.log('data in home page :', homeData);

	const trendings = Array.isArray(homeData) ? homeData[0] : undefined;
	const favorites = Array.isArray(homeData) ? homeData[1] : undefined;
	const series = Array.isArray(homeData) ? homeData[2] : undefined;
	console.log('trendings :', trendings);

	if (isLoading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>error</div>;
	}

	return (
		<div className='h-full relative'>
			<Helmet>
				<title>Netflix | {title}</title>
			</Helmet>

			<h1 className={`z-10 ${styles.txtReflect}`}>Enjoy Watch Movies</h1>
			<div className='w-full h-screen relative'>
				<img src={HeroImage} alt='hero image' className='w-full h-full' />
			</div>
			<div className={`w-full h-screen absolute z-2 ${styles.bgGradient}`}></div>

			{/* trendings */}
			<section className={styles.scrollSection}>{trendings?.results?.map((trend) => <MovieItem key={trend.id} {...trend} />)}</section>
		</div>
	);
};

export default Home;
