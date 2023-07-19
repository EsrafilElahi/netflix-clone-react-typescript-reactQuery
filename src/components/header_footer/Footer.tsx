import React from 'react';
import { NavLink, useMatches } from 'react-router-dom';
import type { LinkProp } from './types';

const Footer = () => {
	const matches = useMatches();
	const isActive = (path: LinkProp[keyof LinkProp]) => matches.find((match) => match.pathname === path);

	return (
		<section className='flex justify-between items-center p-3'>
			<div className='flex flex-col gap-3 text-center'>
				<a rel='noopener noreferrer' target='_blank' href='https://github.com/EsrafilElahi'>
					github
				</a>
				<a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/esrafil-elahi/'>
					linkedin
				</a>
				<a rel='noopener noreferrer' target='_blank' href='https://twitter.com/essinho1121'>
					twitter
				</a>
			</div>

			<div className='flex flex-col text-center'>
				<span>&copy; Copyright. All rights reserved</span>
				<span>Esrafil Elahi</span>
			</div>

			<div className='flex flex-col gap-3 text-center'>
				<NavLink to='/' className={isActive('/') && 'text-red-500'}>
					Home
				</NavLink>
				<NavLink to='/movies' className={isActive('/movies') && 'text-red-500'}>
					Movies
				</NavLink>
				<NavLink to='/series' className={isActive('/series') && 'text-red-500'}>
					Series
				</NavLink>
			</div>
		</section>
	);
};

export default Footer;
