import Footer from 'components/header_footer/Footer';
import Navbar from 'components/header_footer/Navbar';
import React from 'react';

interface DesktopLayoutProps {
	children: React.ReactNode
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
	return (
		<div className='w-full h-full flex flex-col gap-3'>
			<header className=''>
				<Navbar />
			</header>
			<main className='grow'>{children}</main>
			<footer className=''>
				<Footer />
			</footer>
		</div>
	);
};

export default DesktopLayout;
