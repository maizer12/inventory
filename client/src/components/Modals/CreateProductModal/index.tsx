import { FC, useState } from 'react';
import { Button, HTag, Modal, Input, CalendarInput, Select } from '../../../common';
import './CreateProductModal.scss';
import axios from '../../../api';
import { Save } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { createProductWidthOrder, setCreateProductModal } from '../../../store/slices/orderSlice';
import { stateProduct, statusProduct, typeProduct } from './_constants';
import { useInput } from '../../../hooks/useInput';
import { IProduct } from '../../../models/IProduct';

export const CreateProductModal: FC = () => {
  const { openOrder } = useAppSelector((state) => state.orderSlice);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [status, setStatus] = useState<string | number>(0);
  const [state, setState] = useState<string | number>(0);
  const [type, setType] = useState<string | number>('phone');
  const nameInput = useInput('');
  const serialNumber = useInput('');
  const UAH = useInput('');
  const USD = useInput('');

  const dispatch = useAppDispatch();

  const closeModal = (bool: boolean) => {
    dispatch(setCreateProductModal(bool));
  };

  const clickCreate = async () => {
    try {
      if (!openOrder) return '';
      const { _id } = openOrder;
      const body = {
        name: nameInput.value,
        warrantyStartDate: startDate,
        warrantyEndDate: endDate,
        status,
        state,
        type,
        serialNumber: serialNumber.value,
        priceUSD: USD.value,
        priceUAH: UAH.value,
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big/393386613.jpg',
      };
      const { data } = await axios.post<IProduct>(`/product/order/${_id}`, body);
      dispatch(createProductWidthOrder(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal setClose={closeModal} title="Створити продукт">
      <div className="create-modal">
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
            <div className="create-modal__select d-flex align-items-center">
              <HTag tag="h4">Types:</HTag>
              <Select items={typeProduct} setSelect={setType} />
            </div>
            <div className="create-modal__select d-flex align-items-center">
              <HTag tag="h4">State:</HTag>
              <Select items={stateProduct} setSelect={setState} />
            </div>
            <div className="create-modal__select d-flex align-items-center">
              <HTag tag="h4">Status:</HTag>
              <Select items={statusProduct} setSelect={setStatus} />
            </div>
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
