import { FC, useState } from 'react';
import { Button, HTag, Modal, Input, CalendarInput, Select } from '../../../common';
import { useForm, Controller } from 'react-hook-form';
import axios from '../../../api';
import { Save } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { createProduct, setCreateProductModal } from '../../../store/slices/productSlice';
import { useTypeProduct, useStatusProduct, useStateProduct } from './_constants';
import { IProduct, IProductForm } from '../../../models/IProduct';
import { useTranslation } from 'react-i18next';
import { LoadPhoto } from './LoadPhoto';
import { updateOrder } from '../../../store/slices/orderSlice';

export const CreateProductModal: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IProductForm>();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [imgLink, setImgLink] = useState('');
  const statusItems = useStatusProduct();
  const typesItems = useTypeProduct();
  const statesItems = useStateProduct();
  const { openOrder, items } = useAppSelector((state) => state.orderSlice);

  const dispatch = useAppDispatch();

  const closeModal = (bool: boolean) => {
    dispatch(setCreateProductModal(bool));
  };

  const clickCreate = async (dataForm: IProductForm) => {
    if (!openOrder) return;

    try {
      setLoading(true);

      const body = {
        ...dataForm,
        imageUrl: imgLink,
      };

      const { data } = await axios.post<IProduct>(`/product/order/${openOrder._id}`, body);
      dispatch(createProduct(data));

      const updatedOrders = items.map((order) =>
        order._id === openOrder._id
          ? {
              ...order,
              amountUAH: order.amountUAH + Number(dataForm.priceUAH),
              productCount: order.productCount + 1,
              amountUSD: order.amountUSD + Number(dataForm.priceUSD),
            }
          : order,
      );

      dispatch(updateOrder(updatedOrders));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal setClose={closeModal} title={t('add-product.title')}>
      <form className="create-modal" onSubmit={handleSubmit((data: IProductForm) => clickCreate(data))}>
        <div className="modal-padding">
          <Input
            placeholder={t('add-product.input-name')}
            error={errors.name && String(errors.name.message)}
            {...register('name', { required: 'Name is required' })}
          />
          <Input
            placeholder={t('add-product.input-s-num')}
            error={errors.serialNumber && String(errors.serialNumber.message)}
            {...register('serialNumber', { required: 'Serial number is required' })}
          />
          <HTag tag="h4" className="mb-2 mt-1">
            {t('add-product.guarantee')}
          </HTag>
          <div className="d-flex create-modal__date mb-4">
            <Controller
              name="warrantyStartDate"
              control={control}
              defaultValue={new Date()}
              render={({ field }) => (
                <CalendarInput className="calendar" date={field.value} setDate={(date) => field.onChange(date)} />
              )}
            />
            <Controller
              name="warrantyEndDate"
              control={control}
              defaultValue={new Date()}
              render={({ field }) => (
                <CalendarInput className="calendar" date={field.value} setDate={(date) => field.onChange(date)} />
              )}
            />
          </div>
          <HTag tag="h4" className="mb-2">
            {t('add-product.price')}
          </HTag>
          <div className="d-flex create-modal__date mb-4 justify-content-between">
            <Input
              min={0}
              {...register('priceUAH', {
                required: 'Price UAH is required',
                min: { value: 0, message: 'Price cannot be negative' },
              })}
              error={errors.priceUAH && String(errors.priceUAH.message)}
              money="uah"
              placeholder="0"
              type="number"
            />
            <Input
              min={0}
              {...register('priceUSD', {
                required: 'Price USD is required',
                min: { value: 0, message: 'Price cannot be negative' },
              })}
              error={errors.priceUSD && String(errors.priceUSD.message)}
              money="usd"
              placeholder="0"
              type="number"
            />
          </div>
          <div className="create-modal__selects d-flex mb-4">
            <div className="create-modal__select d-flex align-items-center">
              <HTag tag="h4">{t('add-product.status')}</HTag>
              <Controller
                name="status"
                defaultValue={0}
                control={control}
                render={({ field }) => <Select items={statusItems} setSelect={field.onChange} />}
              />
            </div>
            <div className="create-modal__select d-flex align-items-center">
              <HTag tag="h4">{t('add-product.type')}</HTag>
              <Controller
                name="type"
                defaultValue={'phone'}
                control={control}
                render={({ field }) => <Select items={typesItems} setSelect={field.onChange} />}
              />
            </div>
            <div className="create-modal__select d-flex align-items-center">
              <HTag tag="h4">{t('add-product.state')}</HTag>
              <Controller
                name="state"
                defaultValue={0}
                control={control}
                render={({ field }) => <Select items={statesItems} setSelect={field.onChange} />}
              />
            </div>
          </div>
          <LoadPhoto setImgLink={setImgLink} imgLink={imgLink} />
        </div>
        <div className="delete-order__footer d-flex justify-content-end modal-footer">
          <button className="delete-modal__close">{t('close.btn')}</button>
          <Button className="create-order__save" type="submit" isLoading={loading}>
            <Save />
            {t('create.btn')}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
