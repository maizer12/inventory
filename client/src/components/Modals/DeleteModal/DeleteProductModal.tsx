import { FC, useState } from 'react';
import { DeleteModal } from '../../../common/Modal/DeleteModal';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setDeleteProductItem, deleteProduct } from '../../../store/slices/productSlice';
import axios from '../../../api';
import { IProduct } from '../../../models/IProduct';
import { Product } from '../../Product';
import { updateOrder } from '../../../store/slices/orderSlice';
import { useTranslation } from 'react-i18next';

interface IProps {
  item: IProduct;
}

export const DeleteProductModal: FC<IProps> = ({ item }) => {
  const items = useAppSelector((state) => state.orderSlice.items);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [error, setError] = useState('');

  const setClose = () => {
    dispatch(setDeleteProductItem(null));
  };

  const deleteItem = async () => {
    try {
      setError('');
      setLoading(true);
      const id = item._id;
      await axios.delete(`/product/${id}`);
      const updatedOrders = items.map((order) =>
        order._id === item.order
          ? {
              ...order,
              amountUAH: order.amountUAH - Number(item.priceUAH),
              productCount: order.productCount - 1,
              amountUSD: order.amountUSD - Number(item.priceUSD),
            }
          : order,
      );
      dispatch(updateOrder(updatedOrders));
      dispatch(deleteProduct(id));
    } catch (err) {
      setError(t('error.server.remove'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <DeleteModal setClose={setClose} clickDelete={deleteItem} isLoading={loading} error={error}>
      <Product item={item} />
    </DeleteModal>
  );
};
