import { FC, useState } from 'react';
import { Button, Modal, Input, CalendarInput } from '../../common';
import axios from '../../api';
import { Save } from 'lucide-react';
import { useAppDispatch } from '../../hooks/redux';
import { createOrder, setCreateOrderModal } from '../../store/slices/orderSlice';
import { IOrder } from '../../models/IOrder';
import { useTranslation } from 'react-i18next';

export const CreateOrderModal: FC = () => {
  const { t } = useTranslation();
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
    <Modal setClose={setModal} title={t('add-order.title')}>
      <div className="create-order">
        <div className="modal-padding">
          <Input
            placeholder={t('add-order.input-name')}
            className="mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <CalendarInput className="mb-3" setDate={setDate} date={date} />
        </div>
        <div className="delete-order__footer d-flex justify-content-end modal-footer">
          <button className="delete-modal__close">{t('close.btn')}</button>
          <Button className="create-order__save" onClick={clickCreate}>
            <Save />
            {t('create.btn')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
