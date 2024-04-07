import { FC } from 'react';
import { DeleteModal } from '../../../common/Modal/DeleteModal';
import { IOrder } from '../../../models/IOrder';
import OrderItem from '../../Order/OrderItem';
import { useAppDispatch } from '../../../hooks/redux';
import { setDeleteOrderItem, deleteOrder } from '../../../store/slices/orderSlice';
import axios from '../../../api';

interface IProps {
  item: IOrder;
}

export const DeleteOrderModal: FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const setClose = () => {
    dispatch(setDeleteOrderItem(null));
  };

  const deleteItem = async () => {
    try {
      const id = item._id;
      await axios.delete(`/order/${id}`);
      dispatch(deleteOrder(id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DeleteModal setClose={setClose} clickDelete={deleteItem}>
      <OrderItem item={item} />
    </DeleteModal>
  );
};
