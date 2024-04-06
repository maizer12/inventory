import { FC } from 'react';
import { Button, HTag, Modal } from '../../../common';
import './DeleteOrder.scss';
import { Product } from '../../Product';
import { Trash2 } from 'lucide-react';

export const DeleteOrderModal: FC = () => {
  return (
    <Modal>
      <div className="delete-order">
        <HTag tag="h2" className="delete-order__title modal-margin">
          Вы уверены, что хотите удалить этот объект?
        </HTag>
        {/* <Product /> */}
        <div className="delete-order__footer d-flex justify-content-end modal-footer">
          <button className="delete-order__close">Отменить</button>
          <Button className="delete-order__remove">
            <Trash2 /> Удалить
          </Button>
        </div>
      </div>
    </Modal>
  );
};
