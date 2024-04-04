import { FC } from 'react';
import './Sidebar.scss';
import { Settings } from 'lucide-react';
import { navMenu } from './_constants';
import { NavLink } from 'react-router-dom';

const Sidebar: FC = () => {
	return (
		<aside className='sidebar'>
			<div className='sidebar-user'>
				<img src='https://cdn0-production-images-kly.akamaized.net/fjYp40-Q94lnHsapJTj_FPnmpck=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2377213/original/046581900_1538977000-Mark_Zuckerberg.jpg' alt='user image' />
				<div className='sidebar-user__setting	d-flex'>
					<Settings />
				</div>
			</div>
			<nav className='sidebar-menu'>
				{navMenu.map(e => (
					<NavLink to={e.url} className='menu-link'>
						{e.name}
					</NavLink>
				))}
			</nav>
		</aside>
	);
};

export default Sidebar;
