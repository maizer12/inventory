import { FC, useState } from 'react';
import { Button, HTag, Modal, Input, CalendarInput, Select } from '../../../common';
import './CreateProductModal.scss';
import axios from '../../../api';
import { Save } from 'lucide-react';
import { useAppDispatch } from '../../../hooks/redux';
import { createOrder, setCreateOrderModal } from '../../../store/slices/orderSlice';
import { IOrder } from '../../../models/IOrder';
import { statusProduct, typeProduct } from './_constants';
import { useInput } from '../../../hooks/useInput';

export const CreateProductModal: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [status, setStatus] = useState<string | number>(0);
  const [type, setType] = useState<string | number>('phone');
  const nameInput = useInput('');
  const serialNumber = useInput('');
  const UAH = useInput('');
  const USD = useInput('');

  const dispatch = useAppDispatch();
  const setModal = (bool: boolean) => {
    dispatch(setCreateOrderModal(bool));
  };

  const clickCreate = async () => {
    try {
      const body = {
        name: nameInput.value,
        warrantyStartDate: startDate,
        warrantyEndDate: endDate,
        status,
        type,
        priceUSD: USD.value,
        priceUAH: UAH.value,
      };
      console.log(body);
      // const { data } = await axios.post<IOrder>('/orders', {
      //   title,
      //   date,
      // });
      // dispatch(createOrder(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal setClose={setModal}>
      <div className="create-modal">
        <HTag tag="h2" className="create-modal__title modal-padding">
          Створити замовлення
        </HTag>
        <div className="modal-padding">
          <Input placeholder="Назва товара" className="mb-4" {...nameInput} />
          <Input placeholder="Серийный номер" className="mb-4" {...serialNumber} />
          <HTag tag="h4" className="mb-2">
            Срок гарантии:
          </HTag>
          <div className="d-flex create-modal__date mb-4">
            <CalendarInput className="calendar" setDate={setStartDate} date={startDate} />
            <CalendarInput className="calendar" setDate={setEndDate} date={endDate} />
          </div>
          <HTag tag="h4" className="mb-2">
            Цена:
          </HTag>
          <div className="d-flex create-modal__date mb-3">
            <Input placeholder="UAH" className="mb-4" {...UAH} />
            <Input placeholder="USD" className="mb-4" {...USD} />
          </div>
          <div className="create-modal__selects d-flex">
            <Select items={typeProduct} setSelect={setType} />
            <Select items={statusProduct} setSelect={setStatus} />
          </div>
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
