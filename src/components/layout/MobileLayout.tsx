import Footer from 'components/header_footer/Footer';
import React from 'react';
import Navbar from 'components/header_footer/Navbar';

interface MobileLayoutProps {
  children: React.ReactNode
}

const MobileLayout: React.FC<MobileLayoutProps> = ({children}) => {
  return (
		<div className='w-full h-full flex flex-col'>
			<div>
				<Navbar />
			</div>
			<main className='grow'>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default MobileLayout