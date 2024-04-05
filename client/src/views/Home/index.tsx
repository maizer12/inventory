import { FC } from 'react';
import { OpenProduct, Table } from '../../components';
import { HTag } from '../../common';
import './Home.scss';

const Home: FC = () => {
	return (
		<section className='wrapper'>
			<div className='d-flex align-items-center'>
				<button className='add-btn'>+</button>
				<HTag tag='h1'>Приходы / 25</HTag>
			</div>
			<div className='order-content'>
				<Table />
				<OpenProduct />
			</div>
		</section>
	);
};

export default Home;
