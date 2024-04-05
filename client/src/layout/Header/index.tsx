import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Search from '../../components/Search';

import { HeaderTimeStatus } from './HeaderTimeStatus';

export const Header: FC = () => {
	return (
		<header className='header'>
			<div className='header__inner justify-content-between d-flex'>
				<div className='header__content d-flex'>
					<Link to='/' className='logo'>
						Inventory
					</Link>
					<Search />
				</div>
				<HeaderTimeStatus />
			</div>
		</header>
	);
};
