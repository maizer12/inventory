import { FC, useEffect } from 'react';
import { OpenProduct, OrderTable, DeleteOrderModal, CreateOrderModal, CreateProductModal } from '../../components';
import { HTag } from '../../common';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOrders } from '../../store/slices/orderSlice/asyncActions';
import './Home.scss';
import { setCreateOrderModal } from '../../store/slices/orderSlice';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { openOrder, createOrderModal } = useAppSelector((state) => state.orderSlice);
  const className = cn({ ['show-product']: !!openOrder });

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const openCreateModal = () => {
    dispatch(setCreateOrderModal(true));
  };

  return (
    <main className={className}>
      <section>
        <div className="d-flex align-items-center">
          <button className="add-btn" onClick={openCreateModal}>
            +
          </button>
          <HTag tag="h1">Приходы / 25</HTag>
        </div>
        <div className="order-content">
          <OrderTable />
          {!!openOrder && <OpenProduct />}
        </div>
      </section>
      {/* <DeleteOrderModal /> */}
      {createOrderModal && <CreateOrderModal />}
      <CreateProductModal />
    </main>
  );
};

export default Home;
