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

interface SelectOption<T extends string> {
	value: T;
	label: string;
}

const fruits: string[] = ['Apple', 'Banana', 'Orange'];


const Navbar: React.FC<NavBarProps> = (props) => {

  const handleFruitChange = (selectedFruit: SelectOption<(typeof fruits)[number]>) => {
		console.log('Selected fruit:', selectedFruit);
	};

	return (
		<div>
			<nav className={`absolute z-10 p-3 w-full`}>
				{navs.map((nav) => (
					<NavbarItem key={nav.id as IDs} nav={nav} />
				))}
				<Select options={fruits.map((fruit) => ({ value: fruit, label: fruit }))} onChange={handleFruitChange} />
			</nav>
		</div>
	);
};

export default Navbar;
