import { FC } from 'react';
import OrderItem from './OrderItem';
import './Order.scss';
import { useAppSelector } from '../../hooks/redux';
import { AlertTable, Loader } from '../../common';
import { useTranslation } from 'react-i18next';

export const OrderTable: FC = () => {
  const { t } = useTranslation();
  const { items, isLoading, error } = useAppSelector((state) => state.orderSlice);
  const errorMessage = error ? t(error) : '';

  if (isLoading) {
    return <Loader full={true} />;
  }

  if (errorMessage) {
    return <AlertTable variant="danger">{errorMessage}</AlertTable>;
  }

  if (!items.length) {
    return <AlertTable />;
  }

  return (
    <ul className="main-table scroll-style">
      {!!items.length && items.map((e) => <OrderItem key={e._id} item={e} />)}
    </ul>
  );
};
