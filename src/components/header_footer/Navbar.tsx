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
];
interface NavBarProps {
	scrollable?: boolean;
}



type Genre = {
	id: number;
	name: string;
};

const genres: Genre[] = [
	{ id: 0, name: 'None Genre' },
	{ id: 28, name: 'Action' },
	{ id: 12, name: 'Adventure' },
	{ id: 16, name: 'Animation' },
	{ id: 35, name: 'Comedy' },
	{ id: 80, name: 'Crime' },
	{ id: 10402, name: 'Musical' },
	{ id: 10749, name: 'Romance' },
	{ id: 27, name: 'Horror' },
	{ id: 36, name: 'History' },
	{ id: 18, name: 'Drama' },
	{ id: 37, name: 'Western' },
	{ id: 10751, name: 'Family' },
	{ id: 14, name: 'Fantasy' },
];

const Navbar: React.FC<NavBarProps> = (props) => {

  const handleFruitChange = (selectedFruit: Genre) => {
		console.log('Selected movie:', selectedFruit);
	};

	return (
		<div>
			<nav className={`absolute z-10 p-3 w-full`}>
				{navs.map((nav) => (
					<NavbarItem key={nav.id as IDs} nav={nav} />
				))}
				<Select options={genres.map((genre) => ({ id: genre.id, name: genre.name }))} onChange={handleFruitChange} />
			</nav>
		</div>
	);
};

export default Navbar;
