import React from 'react';

type HomeProps = {
	title: string;
	act:number
}

const Home: React.FC<HomeProps> = (props) => {
	const { title } = props;

	return (
		<div className='h-full'>
			<span>{title} page</span>
		</div>
	);
};

export default Home;
