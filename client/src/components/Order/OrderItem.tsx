import { List, Trash2 } from 'lucide-react';
import { HTag, PTag } from '../../common';
import { FC } from 'react';
import { IOrder } from '../../models/IOrder';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setDeleteOrderItem, setOpenProduct } from '../../store/slices/orderSlice';
import { fetchOrderProducts } from '../../store/slices/productSlice/asyncActions';
import { normalizeDate } from '../../helpers/dateFormatter';

interface IProps {
  item: IOrder;
}

const OrderItem: FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.orderSlice.openOrder);
  const checkActive = !!active && active._id === item._id ? 'active-btn' : '';

  const openProducts = () => {
    dispatch(setOpenProduct(item));
    dispatch(fetchOrderProducts(item._id));
  };

  const clickDelete = () => {
    dispatch(setDeleteOrderItem(item));
  };

  const { day, month, year, numMonth } = normalizeDate(item.date);

  return (
    <li className="order-item mb-3 d-grid block">
      <HTag tag="h3" variant="gray" line={true} className="order-item__title">
        {item.title}
      </HTag>
      <div className="d-flex align-items-center">
        <button className={'order-item__menu ' + checkActive} onClick={openProducts}>
          <List strokeWidth={4} />
        </button>
        <div>
          <HTag tag="h3" variant="gray">
            {item.productCount}
          </HTag>
          <PTag>Продукта</PTag>
        </div>
      </div>
      <div className="order-item__date">
        <PTag size="sm" className="text-center">
          {`${numMonth.toString().padStart(2, '0')} / ${year}`}
        </PTag>
        <PTag size="lg" className="text-center" variant="dark">
          {`${day} / ${month} / ${year}`}
        </PTag>
      </div>
      <div className="order-item__balance">
        <PTag size="sm" className="text-center">
          {item.amountUSD} USD
        </PTag>
        <PTag size="lg" className="text-center" variant="dark">
          {item.amountUAH} UAH
        </PTag>
      </div>
      <button className="order-item__remove remove-btn" onClick={clickDelete}>
        <Trash2 />
      </button>
    </li>
  );
};

export default OrderItem;
