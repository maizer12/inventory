import { FC } from 'react';
import './Products.scss';
import { HTag, PTag, Select } from '../../common';
import { Product } from '../../components';

const Products: FC = () => {
	return (
		<section className='wrapper'>
			<div className='products-header d-flex align-items-center'>
				<HTag tag='h1'>Продукты / 25</HTag>
				<div className='products-header__item d-flex align-items-center'>
					<PTag>Тип:</PTag>
					<Select />
				</div>
				<div className='products-header__item d-flex align-items-center'>
					<PTag>Спецификация:</PTag>
					<Select />
				</div>
			</div>
			<ul className='product-table'>
				<Product className='block table-item' moreInfo={true} />
			</ul>
		</section>
	);
};

export default Products;
