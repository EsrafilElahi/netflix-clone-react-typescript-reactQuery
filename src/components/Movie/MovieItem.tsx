import React from 'react';
import { Result } from 'types/HomePageTypes';

// const date = new Date(dateString);
// const year = date.getFullYear();

type RequiredValues = 'original_title' | 'poster_path' | 'release_date';
type MovieItemProps = Partial<Result> & Required<Pick<Result, RequiredValues>>;

const MovieItem: React.FC<MovieItemProps> = (props) => {
	const { original_title, release_date, poster_path } = props;

	return (
		<div>
			<span>trending</span>
		</div>
	);
};

export default MovieItem