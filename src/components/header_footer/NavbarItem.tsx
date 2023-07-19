import React from 'react';
import { NavLink, useMatches } from 'react-router-dom';
import type { NavbarItemProps } from './types';

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
	const { nav } = props;

	const matches = useMatches();
	const isActive = matches.find((match) => match.pathname === nav.link);
	const activeClasses: string = 'text-red-700';
	const inActiveClasses: string = 'text-gray-400';
	const defaultClassed: string = 'mr-6';

	return (
		<NavLink to={nav.link} className={`${defaultClassed} ${isActive ? activeClasses : inActiveClasses}`}>
			{nav.name}
		</NavLink>
	);
};

export default NavbarItem;
