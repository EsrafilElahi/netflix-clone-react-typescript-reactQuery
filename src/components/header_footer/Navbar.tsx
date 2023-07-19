import React from 'react';
import Select from '../other/Select';
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
	{
		id: 'genres',
		name: 'Genres',
		link: '/genres',
	},
];
interface NavBarProps {
	scrollable?: boolean;
}



const Navbar: React.FC<NavBarProps> = (props) => {


	return (
		<div>
			<nav className={`absolute z-10 p-3 w-full`}>
				{navs.map((nav) => (
					<NavbarItem key={nav.id as IDs} nav={nav} />
				))}
			</nav>
		</div>
	);
};

export default Navbar;
