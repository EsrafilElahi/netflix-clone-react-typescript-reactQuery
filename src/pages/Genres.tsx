import HeroImage from 'assets/images/bg.jpg';
import Select from 'components/other/Select';
import React,{ lazy,Suspense,useEffect,useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery,useQueryClient } from 'react-query';
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
	const [page, setPage] = useState<number>(1);
	  const queryClient = useQueryClient();

		const [selectedOption, setSelectedOption] = useState<any | null>(null);

  const cachedData = queryClient.getQueryData<any>(['genre', (selectedOption as any)?.id]);

  console.log('cachedData :', cachedData);

	  const handleGenreChange = (selectedGenre: Genre) => {
			setSelectedOption(selectedGenre);
		};


  return (
		<div className='h-full relative'>
			<Helmet>
				<title>Netflix | {title}</title>
			</Helmet>

			{!cachedData ? (
				<div>Loading...</div>
			) : (
				<div className='flex flex-wrap justify-center sm:justify-between items-center gap-8 '>
					{(cachedData?.results as Result[])?.map((project) => <MovieItem key={project.id} item={project} />)}
				</div>
			)}
			<div className='flex justify-center mt-10 gap-10'>
				{!cachedData ? (
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
			<Select options={genres.map((genre) => ({ id: genre.id, name: genre.name }))} onChange={handleGenreChange} />
		</div>
	);
};

export default Genres;
