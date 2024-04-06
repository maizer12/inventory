import { FC, useEffect, useState } from 'react';
import { OpenProduct, DeleteOrder, OrderTable } from '../../components';
import { HTag } from '../../common';
import cn from 'classnames';
import { useAppDispatch } from '../../hooks/redux';
import { fetchOrders } from '../../store/slices/orderSlice/asyncActions';
import './Home.scss';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const [isProducts, setIsProducts] = useState(true);
  const className = cn({ ['show-product']: isProducts });

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
          <OpenProduct />
        </div>
      </section>
      {/* <DeleteOrder /> */}
    </main>
  );
};

export default Home;
