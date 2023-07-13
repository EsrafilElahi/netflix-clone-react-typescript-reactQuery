import Navbar from 'components/header_footer/Navbar';
import React from 'react';

interface HomeProps {
	title: string;
}

const Home: React.FC<HomeProps> = (props) => {
	const { title } = props;

	return (
		<div className=''>
			<Navbar />
		</div>
	);
};

export default Home;
