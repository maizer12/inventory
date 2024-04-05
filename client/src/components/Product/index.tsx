import { FC } from 'react';
import { DotStatus, HTag, PTag } from '../../common';
import { Trash2 } from 'lucide-react';
import { ProductProps } from './Product.types';
import cn from 'classnames';
import './Product.scss';

export const Product: FC<ProductProps> = ({ className, moreInfo = false }) => {
	const classNames = cn(className, 'product-item', 'd-flex', { 'more-info': moreInfo });

	return (
		<li className={classNames}>
			<div className='product-item__info d-flex align-items-center'>
				<DotStatus />
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
			{moreInfo && (
				<>
					<div>
						<PTag size='md' variant='dark' className='d-flex'>
							<PTag>с </PTag> 06/04/2017
						</PTag>
						<PTag size='md' variant='dark' className='d-flex'>
							<PTag>по </PTag> 08/04/2017
						</PTag>
					</div>
					<PTag size='md'>Новый</PTag>
					<div>
						<PTag>2 500$</PTag>
						<PTag size='md' variant='dark' className='d-flex'>
							250 000.50 UAH
						</PTag>
					</div>
					<HTag line={true} tag='h3'>
						456
					</HTag>
					<div>
						<PTag size='sm'>06/12</PTag>
						<PTag size='md' variant='dark' className='d-flex'>
							06 / Сен / 2017
						</PTag>
					</div>
				</>
			)}
			<button className='product-item__delete'>
				<Trash2 />
			</button>
		</li>
	);
};
