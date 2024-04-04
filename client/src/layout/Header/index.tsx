import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Search from '../../components/Search';
import { Clock9Icon } from 'lucide-react';

export const Header: FC = () => {
	return (
		<header className='header'>
			<div className='header__inner container justify-content-between d-flex'>
				<div className='header__content d-flex'>
					<Link to='/' className='logo'>
						Inventory
					</Link>
					<Search />
				</div>
				<div className='header__left'>
					<p className='text mb-2'>Вторник</p>
					<div className='d-flex align-items-center'>
						<p className='text'>06 Апр, 2017</p>
						<p className='text ml-6 d-block'>
							<Clock9Icon className='' /> 17:20
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};
