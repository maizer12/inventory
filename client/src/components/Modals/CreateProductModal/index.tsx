import { FC, useState } from 'react';
import { Button, HTag, Modal, Input, CalendarInput, Select } from '../../../common';
import axios from '../../../api';
import { Save } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { createProduct, setCreateProductModal } from '../../../store/slices/productSlice';
import { useTypeProduct, useStatusProduct, useStateProduct } from './_constants';
import { useInput } from '../../../hooks/useInput';
import { IProduct } from '../../../models/IProduct';
import { useTranslation } from 'react-i18next';

export const CreateProductModal: FC = () => {
  const { t } = useTranslation();
  const { openOrder } = useAppSelector((state) => state.orderSlice);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [status, setStatus] = useState<string | number>(0);
  const [state, setState] = useState<string | number>(0);
  const [type, setType] = useState<string | number>('phone');
  const nameInput = useInput('');
  const serialNumber = useInput('');
  const UAH = useInput(0);
  const USD = useInput(0);

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
      dispatch(createProduct(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal setClose={closeModal} title={t('add-product.title')}>
      <div className="create-modal">
        <div className="modal-padding">
          <Input placeholder={t('add-product.input-name')} className="mb-4" {...nameInput} />
          <Input placeholder={t('add-product.input-s-num')} className="mb-4" {...serialNumber} />
          <HTag tag="h4" className="mb-2">
            {t('add-product.guarantee')}
          </HTag>
          <div className="d-flex create-modal__date mb-4">
            <CalendarInput className="calendar" setDate={setStartDate} date={startDate} />
            <CalendarInput className="calendar" setDate={setEndDate} date={endDate} />
          </div>
          <HTag tag="h4" className="mb-2">
            {t('add-product.price')}
          </HTag>
          <div className="d-flex create-modal__date mb-4">
            <label className="label-money">
              <Input placeholder="UAH" min={0} type="number" {...UAH} />
              <HTag tag="h3">UAH</HTag>
            </label>
            <label className="label-money">
              <Input placeholder="USD" min={0} type="number" {...USD} />
              <HTag tag="h3">USD</HTag>
            </label>
          </div>
          <div className="create-modal__selects d-flex">
            <div className="create-modal__select d-flex align-items-center">
              <HTag tag="h4">{t('add-product.status')}</HTag>
              <Select items={useStatusProduct()} setSelect={setType} />
            </div>
            <div className="create-modal__select d-flex align-items-center">
              <HTag tag="h4">{t('add-product.type')}</HTag>
              <Select items={useTypeProduct()} setSelect={setState} />
            </div>
            <div className="create-modal__select d-flex align-items-center">
              <HTag tag="h4">{t('add-product.state')}</HTag>
              <Select items={useStateProduct()} setSelect={setStatus} />
            </div>
          </div>
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
