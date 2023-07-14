import HeroImage from 'assets/images/bg.jpg';
import React,{ useEffect,useState } from 'react';
import styles from '../styles/pages_styles/Home.module.css';

type HomeProps = {
	title: string;
	act: number;
};

const Home: React.FC<HomeProps> = (props) => {
	const { title } = props;

	return (
		<div className='h-full relative'>
			<h1 className={`z-10 ${styles.txtReflect}`}>Enjoy Watch Movies</h1>
			<img src={HeroImage} alt='hero image' className='w-full h-full absolute' />
			<div className={`w-full h-full absolute z-2 ${styles.bgGradient}`}></div>
		</div>
	);
};

export default Home;
