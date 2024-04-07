import { FC } from 'react';
import { DeleteModal } from '../../../common/Modal/DeleteModal';
import { useAppDispatch } from '../../../hooks/redux';
import { setDeleteProductItem, deleteOrder } from '../../../store/slices/productSlice';
import axios from '../../../api';
import { IProduct } from '../../../models/IProduct';
import { Product } from '../../Product';

interface IProps {
  item: IProduct;
}

export const DeleteProductModal: FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const setClose = () => {
    dispatch(setDeleteProductItem(null));
  };

  const deleteItem = async () => {
    try {
      const id = item._id;
      await axios.delete(`/product/${id}`);
      dispatch(deleteOrder(id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DeleteModal setClose={setClose} clickDelete={deleteItem}>
      <Product item={item} />
    </DeleteModal>
  );
};
