import { FC } from 'react';
import OrderItem from './OrderItem';
import './Order.scss';
import { useAppSelector } from '../../hooks/redux';
import { EmptyTable, Loader } from '../../common';

export const OrderTable: FC = () => {
  const { items, isLoading } = useAppSelector((state) => state.orderSlice);

  if (isLoading) {
    return <Loader full={true} />;
  }

  if (!items.length) {
    return <EmptyTable />;
  }

  return (
    <ul className="main-table scroll-style">
      {!!items.length && items.map((e) => <OrderItem key={e._id} item={e} />)}
    </ul>
  );
};
