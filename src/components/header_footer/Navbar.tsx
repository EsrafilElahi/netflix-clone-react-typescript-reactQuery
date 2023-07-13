import React from 'react';
import NavbarItem from './NavbarItem';
import type { IDs,Nav } from './types';

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
		<div className='font-barlowRegular'>
			{navs.map((nav) => (
				<NavbarItem key={nav.id as IDs} nav={nav} />
			))}
		</div>
	);
};

export default Navbar;
