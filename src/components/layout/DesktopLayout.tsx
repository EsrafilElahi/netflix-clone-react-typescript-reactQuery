import Footer from 'components/header_footer/Footer';
import Navbar from 'components/header_footer/Navbar';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface DesktopLayoutProps {
	children: React.ReactNode
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
	const params = useLocation();
	console.log('params :', params);

	return (
		<div className='w-full h-full flex flex-col'>
			<header className=''>
				<Navbar scrollable={params.pathname === '/'} />
			</header>
			<main className='grow'>{children}</main>
			<footer className=''>
				<Footer />
			</footer>
		</div>
	);
};

export default DesktopLayout;
