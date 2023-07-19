import HeroImage from 'assets/images/bg.jpg';
import Select from 'components/other/Select';
import React,{ lazy,Suspense,useEffect,useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import styles from 'styles/pages_styles/Home.module.css';
import { Result,Value } from 'types/HomePageTypes';
const MovieItem = lazy(() => import('components/Movie/MovieItem'));

type GenresProps = {
  title: string;
};

type Genre = {
  id: number;
  name: string;
};

const genres: Genre[] = [
	{ id: 0, name: 'None Genre' },
	{ id: 28, name: 'Action' },
	{ id: 12, name: 'Adventure' },
	{ id: 16, name: 'Animation' },
	{ id: 35, name: 'Comedy' },
	{ id: 80, name: 'Crime' },
	{ id: 10402, name: 'Musical' },
	{ id: 10749, name: 'Romance' },
	{ id: 27, name: 'Horror' },
	{ id: 36, name: 'History' },
	{ id: 18, name: 'Drama' },
	{ id: 37, name: 'Western' },
	{ id: 10751, name: 'Family' },
	{ id: 14, name: 'Fantasy' },
];

const Genres: React.FC<GenresProps> = (props) => {
  const { title } = props;

  const { isLoading, data: homeData, error } = useQuery<Value[] | Value>(['genres']);
  console.log('data in home page :', homeData);

  const trendings = Array.isArray(homeData) ? homeData[0] : undefined;
  const favorites = Array.isArray(homeData) ? homeData[1] : undefined;
  const series = Array.isArray(homeData) ? homeData[2] : undefined;

  const handleFruitChange = (selectedFruit: Genre) => {
    console.log('Selected movie:', selectedFruit);
  };

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

      <Select options={genres.map((genre) => ({ id: genre.id, name: genre.name }))} onChange={handleFruitChange} />

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
            {Array.isArray(trendings?.results) &&
              trendings?.results?.map((item) => <MovieItem key={item.id as number} item={item} />)}
          </Suspense>
        </section>
      </section>

      {/* favorites */}
      <section className='flex flex-col p-4 gap-4'>
        <h2 className='font-barlowBold text-3xl drop-shadow-lg tracking-[.3rem]'>Favorites</h2>
        <section className={styles.scrollSection}>
          <Suspense fallback={<span>loading...</span>}>
            {Array.isArray(favorites?.results) &&
              favorites?.results?.map((item) => <MovieItem key={item.id as number} item={item} />)}
          </Suspense>
        </section>
      </section>

      {/* series */}
      <section className='flex flex-col p-4 gap-4'>
        <h2 className='font-barlowBold text-3xl drop-shadow-lg tracking-[.3rem]'>Series</h2>
        <section className={styles.scrollSection}>
          <Suspense fallback={<span>loading...</span>}>
            {Array.isArray(series?.results) &&
              series?.results?.map((item) => <MovieItem key={item.id as number} item={item} />)}
          </Suspense>
        </section>
      </section>
    </div>
  );
};

export default Genres;
