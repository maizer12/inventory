import { FC } from 'react';
import { Table } from '../components';
import { HTag } from '../common';

const Home: FC = () => {
	return (
		<section className='wrapper'>
			<div className='d-flex align-items-center'>
				<button className='add-btn'>+</button>
				<HTag tag='h1'>Приходы / 25</HTag>
			</div>
			<Table />
		</section>
	);
};

export default Home;
