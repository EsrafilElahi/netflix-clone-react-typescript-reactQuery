import React from 'react';
import { NavLink,useMatches } from 'react-router-dom';
import type { NavbarItemProps } from './types';

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
	const { nav } = props;

  const matches = useMatches();
  const isActive = matches.find((match) => match.pathname === nav.link);
  const activeClasses: string = 'text-blue-500';
  const defaultClassed: string = 'mx-2';

	return (
		<NavLink to={nav.link} className={`${defaultClassed} ${isActive ? activeClasses : ''}`}>
			{nav.name}
		</NavLink>
	);
};

export default NavbarItem;
