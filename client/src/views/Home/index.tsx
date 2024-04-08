import { FC, useEffect } from 'react';
import { OpenProduct, OrderTable, DeleteOrderModal, CreateOrderModal, CreateProductModal } from '../../components';
import { HTag, Loader } from '../../common';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOrders } from '../../store/slices/orderSlice/asyncActions';
import './Home.scss';
import { setCreateOrderModal } from '../../store/slices/orderSlice';
import { DeleteProductModal } from '../../components/Modals/DeleteModal/DeleteProductModal';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { openOrder, createOrderModal, deleteOrderItem, count, isLoading } = useAppSelector(
    (state) => state.orderSlice,
  );
  const { createProductModal, deleteProductItem } = useAppSelector((state) => state.productSlice);
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
          <HTag tag="h1">
            {t('home.title')} / {!!count && isLoading ? <Loader /> : count}
          </HTag>
        </div>
        <div className="order-content">
          <OrderTable />
          {!!openOrder && <OpenProduct />}
        </div>
      </section>
      {!!deleteProductItem && <DeleteProductModal item={deleteProductItem} />}
      {!!deleteOrderItem && <DeleteOrderModal item={deleteOrderItem} />}
      {createOrderModal && <CreateOrderModal />}
      {createProductModal && <CreateProductModal />}
    </main>
  );
};

export default Home;
