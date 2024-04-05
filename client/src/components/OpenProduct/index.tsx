import { HTag } from '../../common';
import { Product } from '../Product';
import './OpenProduct.scss';
import { X } from 'lucide-react';

export const OpenProduct = () => {
	return (
		<div className='open-product block'>
			<button className='open-product__close button-round'>
				<X />
			</button>
			<div className='open-product__header'>
				<HTag tag='h2' className='mb-5'>
					Длинное предлинное длиннючее название прихода
				</HTag>
				<button className='open-product__btn d-flex align-items-center'>
					<span className='d-flex justify-content-center align-items-center'>+</span>
					Добавить продукт
				</button>
			</div>
			<ul className='p-0'>
				<Product />
			</ul>
		</div>
	);
};
