import Navbar from 'components/header_footer/Navbar';
import React from 'react';

interface DesktopLayoutProps {}

const DesktopLayout: React.FC<DesktopLayoutProps> = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
		</div>
	);
};

export default DesktopLayout;
