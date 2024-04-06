import { FC, useState } from 'react';
import { Button, HTag, Modal, Input, CalendarInput } from '../../../common';
import './CreateOrderModal.scss';
import axios from '../../../api';
import { Save } from 'lucide-react';

export const CreateOrderModal: FC = () => {
  const [date, setDate] = useState(new Date());

  const createOrder = async () => {
    try {
      console.log(123);
      const res = await axios.post('/orders', {
        title: '456',
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal>
      <div className="create-order">
        <HTag tag="h2" className="create-order__title modal-padding">
          Створити замовлення
        </HTag>
        <div className="modal-padding">
          <Input placeholder="Назва замовлення" className="mb-4" />
          <CalendarInput className="mb-3" setDate={setDate} date={date} />
        </div>
        <div className="delete-order__footer d-flex justify-content-end modal-footer">
          <button className="delete-order__close">Отменить</button>
          <Button className="create-order__save" onClick={createOrder}>
            <Save />
            Створити
          </Button>
        </div>
      </div>
    </Modal>
  );
};
