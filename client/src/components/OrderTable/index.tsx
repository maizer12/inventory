import { FC, UIEvent } from 'react';
import OrderItem from './OrderItem';
import './Order.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AlertTable, Loader } from '../../common';
import { useTranslation } from 'react-i18next';
import { setOpenPage } from '../../store/slices/orderSlice';

export const OrderTable: FC = () => {
  const { t } = useTranslation();
  const { items, isLoading, error, count, openPage } = useAppSelector((state) => state.orderSlice);
  const dispatch = useAppDispatch();
  const errorMessage = error ? t(error) : '';

  if (errorMessage) {
    return <AlertTable variant="danger">{errorMessage}</AlertTable>;
  }

  if (!items.length && !isLoading) {
    return <AlertTable />;
  }

  const handleScroll = (e: UIEvent<HTMLUListElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop <= clientHeight + 20) {
      if (count && openPage && !isLoading && openPage * 10 < Math.ceil(count / 10) * 10) {
        dispatch(setOpenPage(openPage + 1));
      }
    }
  };

  return (
    <ul className="main-table scroll-style" onScroll={(e) => handleScroll(e)}>
      {!!items.length && items.map((e) => <OrderItem key={e._id} item={e} />)}
      {isLoading && <Loader full={true} />}
    </ul>
  );
};
