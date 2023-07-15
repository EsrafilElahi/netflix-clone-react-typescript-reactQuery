import React,{ useState } from 'react';
import styles from 'styles/pages_styles/Home.module.css';
import { Result } from 'types/HomePageTypes';

type RequiredValues = 'original_title' | 'poster_path' | 'release_date';
type MovieItemProps = Partial<Result> & Required<Pick<Result, RequiredValues>>;

const MovieItem: React.FC<MovieItemProps> = (props) => {
	const { original_title, release_date, poster_path } = props;
  const [hovered, setHovered] = useState<boolean>(false);
	const date: Date = new Date(release_date);
	const year: number = date.getFullYear();
	console.log(props);

	return (
		<div
			className={`rounded-lg cursor-pointer ${styles.movieItem}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className={`absolute ${styles.movieTitle}`}>
				<span className='leading-[normal]'>{original_title}</span>
				<span>{year}</span>
			</div>
			<div className='w-full h-full rounded-lg relative'>
				<img
					src={`https://image.tmdb.org/t/p/w500${poster_path}`}
					alt={original_title}
					className='w-full h-full rounded-lg'
				/>
			</div>
			<div
				className={`${hovered ? 'visible' : 'invisible'} absolute w-full h-full z-2 rounded-lg ${
					styles.bgGradientCard
				}`}
			></div>
		</div>
	);
};

export default MovieItem;
