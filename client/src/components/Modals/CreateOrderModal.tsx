import { FC, useState } from 'react';
import { Button, Modal, Input, CalendarInput } from '../../common';
import axios from '../../api';
import { Save } from 'lucide-react';
import { useAppDispatch } from '../../hooks/redux';
import { createOrder, setCreateOrderModal } from '../../store/slices/orderSlice';
import { IOrder } from '../../models/IOrder';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';

export const CreateOrderModal: FC = () => {
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IOrder>();

  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const setModal = (bool: boolean) => {
    dispatch(setCreateOrderModal(bool));
  };

  const clickCreate = async (dataForm: IOrder) => {
    try {
      setError('');
      setLoading(true);
      const { data } = await axios.post<IOrder>('/orders', dataForm);
      dispatch(createOrder({ ...data }));
      reset();
    } catch (err) {
      setError(t('error.server.create'));
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal setClose={setModal} title={t('add-order.title')} error={error}>
      <form className="create-order" onSubmit={handleSubmit((data: IOrder) => clickCreate(data))}>
        <div className="modal-padding">
          <Input
            placeholder={t('add-product.input-name')}
            error={errors.title && String(errors.title.message)}
            {...register('title', { required: t('error.modal.name') })}
          />
          <Controller
            name="date"
            control={control}
            defaultValue={new Date()}
            render={({ field }) => (
              <CalendarInput className="calendar mb-3" date={field.value} setDate={(date) => field.onChange(date)} />
            )}
          />
        </div>
        <div className="delete-order__footer d-flex justify-content-end modal-footer">
          <button className="delete-modal__close" onClick={() => setModal(false)}>
            {t('close.btn')}
          </button>
          <Button className="create-order__save" isLoading={loading} type="submit">
            <Save />
            {t('create.btn')}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
