import { FC } from 'react';
import { HTag, Modal } from '../../common';
import './DeleteOrder.scss';
import { Product } from '../Product';
import { Trash2 } from 'lucide-react';

export const DeleteOrder: FC = () => {
	return (
		<Modal>
			<div className='delete-order'>
				<HTag tag='h2' className='delete-order__title'>
					Вы уверены, что хотите удалить этот объект?
				</HTag>
				<Product />
				<div className='delete-order__footer d-flex justify-content-end'>
					<button className='delete-order__close'>Отменить</button>
					<button className='delete-order__remove'>
						<Trash2 /> Удалить
					</button>
				</div>
			</div>
		</Modal>
	);
};
