import { FC } from 'react';
import OrderItem from './OrderItem';
import './Order.scss';
import { useAppSelector } from '../../hooks/redux';
import { Loader } from '../../common';

export const OrderTable: FC = () => {
  const { items, isLoading } = useAppSelector((state) => state.orderSlice);

  if (isLoading) {
    return <Loader full={true} />;
  }

  return (
    <ul className="main-table scroll-style">
      {!!items.length && items.map((e) => <OrderItem key={e._id} item={e} />)}
    </ul>
  );
};
