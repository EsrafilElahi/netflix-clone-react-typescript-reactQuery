import HeroImage from 'assets/images/bg.jpg';
import React,{ lazy,Suspense,useEffect,useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import styles from 'styles/pages_styles/Home.module.css';
import { Value } from 'types/HomePageTypes';
const MovieItem = lazy(() => import('components/Movie/MovieItem'));



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
			<section className='flex flex-col p-4 gap-4'>
				<h2 className='font-barlowBold text-3xl drop-shadow-lg tracking-[.3rem]'>Trending</h2>
				<section className={styles.scrollSection}>
					<Suspense fallback={<span>loading...</span>}>
						{trendings?.results?.map((item) => <MovieItem key={item.id as number} item={item} />)}
					</Suspense>
				</section>
			</section>

			{/* favorites */}
			<section className='flex flex-col p-4 gap-4'>
				<h2 className='font-barlowBold text-3xl drop-shadow-lg tracking-[.3rem]'>Favorites</h2>
				<section className={styles.scrollSection}>
					<Suspense fallback={<span>loading...</span>}>
						{favorites?.results?.map((item) => <MovieItem key={item.id as number} item={item} />)}
					</Suspense>
				</section>
			</section>

			{/* series */}
			<section className='flex flex-col p-4 gap-4'>
				<h2 className='font-barlowBold text-3xl drop-shadow-lg tracking-[.3rem]'>Series</h2>
				<section className={styles.scrollSection}>
					<Suspense fallback={<span>loading...</span>}>
						{series?.results?.map((item) => <MovieItem key={item.id as number} item={item} />)}
					</Suspense>
				</section>
			</section>
		</div>
	);
};

export default Home;
