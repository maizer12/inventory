import { FC, useState } from 'react';
import { Button, Modal, Input, CalendarInput } from '../../common';
import axios from '../../api';
import { Save } from 'lucide-react';
import { useAppDispatch } from '../../hooks/redux';
import { createOrder, setCreateOrderModal } from '../../store/slices/orderSlice';
import { IOrder } from '../../models/IOrder';

export const CreateOrderModal: FC = () => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const setModal = (bool: boolean) => {
    dispatch(setCreateOrderModal(bool));
  };

  const clickCreate = async () => {
    try {
      const { data } = await axios.post<IOrder>('/orders', {
        title,
        date,
      });
      dispatch(createOrder(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal setClose={setModal} title="Створити замовлення">
      <div className="create-order">
        <div className="modal-padding">
          <Input
            placeholder="Назва замовлення"
            className="mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <CalendarInput className="mb-3" setDate={setDate} date={date} />
        </div>
        <div className="delete-order__footer d-flex justify-content-end modal-footer">
          <button className="delete-order__close">Отменить</button>
          <Button className="create-order__save" onClick={clickCreate}>
            <Save />
            Створити
          </Button>
        </div>
      </div>
    </Modal>
  );
};
