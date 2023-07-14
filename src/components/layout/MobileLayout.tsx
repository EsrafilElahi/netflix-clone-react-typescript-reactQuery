import Footer from 'components/header_footer/Footer';
import React from 'react';

interface MobileLayoutProps {
  children: React.ReactNode
}

const MobileLayout: React.FC<MobileLayoutProps> = ({children}) => {
  return (
		<div className='w-full h-full flex flex-col'>
			<div>nav mobile</div>
			<main className='grow'>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default MobileLayout