import React from 'react';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className='w-full h-full p-3'>
			<section className='hidden md:flex w-full h-full'>
				<DesktopLayout>{children}</DesktopLayout>
			</section>
			<section className='flex md:hidden w-full h-full'>
				<MobileLayout>{children}</MobileLayout>
			</section>
		</div>
	);
};

export default MainLayout;
