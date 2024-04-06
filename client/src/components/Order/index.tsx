import { FC } from 'react';
import OrderItem from './OrderItem';
import './Order.scss';
import { useAppSelector } from '../../hooks/redux';

export const OrderTable: FC = () => {
  const { items } = useAppSelector((state) => state.orderSlice);

  return <ul className="main-table">{!!items.length && items.map((e) => <OrderItem key={e._id} item={e} />)}</ul>;
};
