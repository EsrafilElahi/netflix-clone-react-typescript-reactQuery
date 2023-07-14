import HeroImage from 'assets/images/bg.jpg';
import React,{ useEffect,useState } from 'react';
import { Helmet } from "react-helmet";
import { useQuery } from 'react-query';
import { Result,Value } from 'types/HomePageTypes';
import styles from '../styles/pages_styles/Home.module.css';


type HomeProps = {
	title: string;
	act: number;
};

const Home: React.FC<HomeProps> = (props) => {
	const { title } = props;

	const { isLoading, data: homeData, error } = useQuery<Value[]>(['home', 'trendings', 'favorites', 'series']);
	console.log('data in home page :', homeData);

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
			<img src={HeroImage} alt='hero image' className='w-full h-full absolute' />
			<div className={`w-full h-full absolute z-2 ${styles.bgGradient}`}></div>
		</div>
	);
};

export default Home;
