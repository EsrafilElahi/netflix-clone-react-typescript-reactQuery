import React from 'react';
import { useQuery } from 'react-query';

interface MovieProps {
	title: string;
}

const Movies: React.FC<MovieProps> = (props) => {
	const { title } = props;
	const { data, error, isLoading } = useQuery<any>(['movies', 'page']);

	console.log('data movies page :', data);

	if (isLoading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>error</div>;
	}

	return <div>hi {title} page</div>;
};

export default Movies;
