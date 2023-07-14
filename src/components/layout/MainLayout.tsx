import React from 'react';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div>
			<section className='hidden md:flex'>
				<DesktopLayout />
			</section>
			<section className='flex md:hidden'>
				<MobileLayout />
			</section>

			<main>{children}</main>

			{/* footer compo */}
		</div>
	);
};

export default MainLayout;
