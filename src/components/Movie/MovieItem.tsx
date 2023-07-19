import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/pages_styles/Home.module.css';
import { Result1, Result2 } from 'types/HomePageTypes';

// type RequiredValues = 'original_title' | 'poster_path' | 'release_date' | 'original_name' | 'first_air_date';
// type MovieItemProps = Partial<Result> & Required<Pick<Result, RequiredValues>>;

type MovieItemProp = {
	item: Partial<Result1> | Partial<Result2>;
	serie?: boolean;
	series?: boolean;
	movies?: boolean;
};

export const isResult1 = (value: Partial<Result1> | Partial<Result2>): value is Partial<Result1> => {
	return 'original_name' in value && 'first_air_date' in value;
};

export const isResult2 = (value: Partial<Result1> | Partial<Result2>): value is Partial<Result2> => {
	return 'original_title' in value && 'release_date' in value;
};

const MovieItem: React.FC<MovieItemProp> = (props) => {
	// const { original_title, original_name, release_date, first_air_date, poster_path } = props.item;
	const [hovered, setHovered] = useState<boolean>(false);

	// if (isResult1(props.item)) {
	// 	console.log('props.item 1 :', props.item);
	// } else {
	// 	console.log('props.item 2 :', props.item);
	// }

	const navigate = useNavigate();

	const getYear = () => {
		const releaseDate = isResult1(props.item) ? props.item.first_air_date : props.item.release_date;

		if (releaseDate) {
			const date: Date = new Date(releaseDate);
			const year: number = date.getFullYear();
			return year;
		}

		return null;
	};

	const handleRoute = () => {
		if (props.serie) {
			navigate(`serie-details/${props.item.id}`);
		} else if (props.series) {
			navigate(`serie-details/${props.item.id}`);
		} else {
			navigate(`movie-details/${props.item.id}`);
		}
	};

	return (
		<div
			onClick={handleRoute}
			className={`rounded-lg cursor-pointer ${styles.movieItem}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className={`absolute hidden ${styles.movieTitle} ${hovered ? styles.fadeIn : null}`}>
				<span className='leading-[normal]'>
					{isResult1(props.item) ? props.item.original_name : props.item.original_title}
				</span>
				<span>{getYear()}</span>
			</div>
			<div className='w-full h-full rounded-lg relative'>
				<img
					src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`}
					alt={isResult1(props.item) ? props.item.original_name : props.item.original_title}
					className='w-full h-full rounded-lg'
				/>
			</div>
			<div
				className={`absolute w-full h-full z-2 rounded-lg ${hovered ? styles.fadeIn : null} ${styles.bgGradientCard}`}
			></div>
		</div>
	);
};

export default MovieItem;
