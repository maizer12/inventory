import { FC, ReactNode } from 'react';
import { Header } from './Header';
import Sidebar from './Sidebar';

interface IProps {
	children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div className='d-flex wrapper'>
				<Sidebar />
				{children}
			</div>
		</>
	);
};

export default Layout;
