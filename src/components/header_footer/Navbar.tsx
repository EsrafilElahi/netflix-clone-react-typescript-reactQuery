import React from 'react';

import NavbarItem from './NavbarItem';
import type { IDs, Nav } from './types';

const navs: Nav[] = [
	{
		id: 'home',
		name: 'Home',
		link: '/',
	},
	{
		id: 'movies',
		name: 'Movies',
		link: '/movies',
	},
	{
		id: 'series',
		name: 'Series',
		link: '/series',
	},
];

const Navbar: React.FC = () => {
	return (
		<div>
			<nav className='absolute z-10 p-3 w-full'>
				{navs.map((nav) => (
					<NavbarItem key={nav.id as IDs} nav={nav} />
				))}
			</nav>
		</div>
	);
};

export default Navbar;
