import React from 'react';
import styles from 'styles/pages_styles/Home.module.css';
import { Result } from 'types/HomePageTypes';

// const date = new Date(dateString);
// const year = date.getFullYear();

type RequiredValues = 'original_title' | 'poster_path' | 'release_date';
type MovieItemProps = Partial<Result> & Required<Pick<Result, RequiredValues>>;

const MovieItem: React.FC<MovieItemProps> = (props) => {
	const { original_title, release_date, poster_path } = props;
  console.log(props);

	return (
		<div>
			<span>{original_title}</span>
			<span>{release_date}</span>
			<div className='w-full h-screen relative'>
				<img src={poster_path} alt={original_title} className='w-full h-full' />
			</div>
			<div className={`w-full h-screen absolute z-2 ${styles.bgGradient}`}></div>
		</div>
	);
};

export default MovieItem