import { FC } from 'react';
import { Button, HTag, Modal, Input, CalendarInput, Select } from '../../../common';
import { useForm, Controller } from 'react-hook-form';
import axios from '../../../api';
import { Save } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { createProduct, setCreateProductModal } from '../../../store/slices/productSlice';
import { useTypeProduct, useStatusProduct, useStateProduct } from './_constants';
import { IProduct, IProductForm } from '../../../models/IProduct';
import { useTranslation } from 'react-i18next';

export const CreateProductModal: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IProductForm>();
  const { t } = useTranslation();
  const statusItems = useStatusProduct();
  const typesItems = useTypeProduct();
  const statesItems = useStateProduct();
  const { openOrder } = useAppSelector((state) => state.orderSlice);

  const dispatch = useAppDispatch();

  const closeModal = (bool: boolean) => {
    dispatch(setCreateProductModal(bool));
  };

  const clickCreate = async (dataForm: IProductForm) => {
    try {
      if (!openOrder) return '';
      const { _id } = openOrder;
      const body = {
        ...dataForm,
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
      <form className="create-modal" onSubmit={handleSubmit((data: IProductForm) => clickCreate(data))}>
        <div className="modal-padding">
          <Input
            placeholder={t('add-product.input-name')}
            className="mb-4"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="error-message">{String(errors.name.message)}</p>}
          <Input
            placeholder={t('add-product.input-s-num')}
            className="mb-4"
            {...register('serialNumber', { required: 'Serial number is required' })}
          />
          {errors.serialNumber && <p className="error-message">{String(errors.serialNumber.message)}</p>}
          <HTag tag="h4" className="mb-2">
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
          <div className="d-flex create-modal__date mb-4">
            <label className="label-money">
              <Input
                min={0}
                {...register('priceUAH', {
                  required: 'Price is required',
                  min: { value: 0, message: 'Price cannot be negative' },
                })}
                placeholder="0"
                type="number"
              />
              <HTag tag="h3">UAH</HTag>
            </label>
            <label className="label-money">
              <Input
                min={0}
                {...register('priceUSD', {
                  required: 'Price is required',
                  min: { value: 0, message: 'Price cannot be negative' },
                })}
                placeholder="0"
                type="number"
              />
              <HTag tag="h3">USD</HTag>
            </label>
          </div>
          {errors.priceUAH && <p className="error-message">{String(errors.priceUAH.message)}</p>}
          {errors.priceUSD && <p className="error-message">{String(errors.priceUSD.message)}</p>}
          <div className="create-modal__selects d-flex">
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
        </div>
        <div className="delete-order__footer d-flex justify-content-end modal-footer">
          <button className="delete-modal__close">{t('close.btn')}</button>
          <Button className="create-order__save" type="submit">
            <Save />
            {t('create.btn')}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
