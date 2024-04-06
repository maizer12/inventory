import { FC, useEffect } from 'react';
import { OpenProduct, OrderTable, DeleteOrderModal, CreateOrderModal } from '../../components';
import { HTag } from '../../common';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOrders } from '../../store/slices/orderSlice/asyncActions';
import './Home.scss';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { openOrder } = useAppSelector((state) => state.orderSlice);
  const className = cn({ ['show-product']: !!openOrder });

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <main className={className}>
      <section>
        <div className="d-flex align-items-center">
          <button className="add-btn">+</button>
          <HTag tag="h1">Приходы / 25</HTag>
        </div>
        <div className="order-content">
          <OrderTable />
          {!!openOrder && <OpenProduct />}
        </div>
      </section>
      {/* <DeleteOrderModal /> */}
      <CreateOrderModal />
    </main>
  );
};

export default Home;
