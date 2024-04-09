import { FC, useState } from 'react';
import { DeleteModal } from '../../../common/Modal/DeleteModal';
import { useAppDispatch } from '../../../hooks/redux';
import { setDeleteProductItem, deleteOrder } from '../../../store/slices/productSlice';
import axios from '../../../api';
import { IProduct } from '../../../models/IProduct';
import { Product } from '../../Product';
import { fetchOrders } from '../../../store/slices/orderSlice/asyncActions';

interface IProps {
  item: IProduct;
}

export const DeleteProductModal: FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const setClose = () => {
    dispatch(setDeleteProductItem(null));
  };

  const deleteItem = async () => {
    try {
      setLoading(true);
      const id = item._id;
      await axios.delete(`/product/${id}`);
      dispatch(deleteOrder(id));
      dispatch(fetchOrders());
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DeleteModal setClose={setClose} clickDelete={deleteItem} isLoading={loading}>
      <Product item={item} />
    </DeleteModal>
  );
};
