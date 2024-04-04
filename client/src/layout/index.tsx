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
			<main className='d-flex'>
				<Sidebar />
				{children}
			</main>
		</>
	);
};

export default Layout;
