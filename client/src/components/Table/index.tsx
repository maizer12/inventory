import { FC } from 'react';
import './Table.scss';
import { List } from 'lucide-react';
import { HTag, PTag } from '../../common';

export const Table: FC = () => {
	return (
		<ul className='main-table mt-5'>
			<li className='table-item d-flex justify-content-between align-items-center'>
				<HTag tag='h3' variant='gray' line={true}>
					Длинное предлинное длиннючее название прихода
				</HTag>
				<div className='d-flex align-items-center'>
					<button className='table-item__menu'>
						<List strokeWidth={4} />
					</button>
					<div>
						<HTag tag='h3' variant='gray'>
							23
						</HTag>
						<PTag>Продукта</PTag>
					</div>
				</div>
				<div>
					<PTag size='sm' className='text-center'>
						07 / 23
					</PTag>
					<PTag size='lg' className='text-center' variant='dark'>
						01 / 07 / 2023
					</PTag>
				</div>
				<div>
					<PTag size='sm' className='text-center'>
						0 USD
					</PTag>
					<PTag size='lg' className='text-center' variant='dark'>
						0 UAH
					</PTag>
				</div>
				<button>Delete</button>
			</li>
		</ul>
	);
};
