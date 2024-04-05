import { HTag, PTag } from '../../common';
import './OpenProduct.scss';
import { Trash2, X } from 'lucide-react';

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
				<li className='product-item d-flex'>
					<div className='product-item__info d-flex align-items-center'>
						<span className='dot'></span>
						<img className='product-item__img' src='https://content.rozetka.com.ua/goods/images/big/393386613.jpg' alt='product' />
						<div>
							<HTag tag='h3' line={true}>
								Монитор 23.8" Acer VG243YEbii (UM.QV3EE.E01)
							</HTag>
							<PTag size='lg'>SN-12.34567897</PTag>
						</div>
					</div>
					<PTag size='lg' variant='primary'>
						Свободен
					</PTag>
					<button className='product-item__delete'>
						<Trash2 />
					</button>
				</li>
			</ul>
		</div>
	);
};
