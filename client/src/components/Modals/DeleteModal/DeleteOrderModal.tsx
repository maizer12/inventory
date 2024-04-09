import { FC, useState } from 'react';
import { DeleteModal } from '../../../common/Modal/DeleteModal';
import { IOrder } from '../../../models/IOrder';
import OrderItem from '../../OrderTable/OrderItem';
import { useAppDispatch } from '../../../hooks/redux';
import { setDeleteOrderItem, deleteOrder } from '../../../store/slices/orderSlice';
import axios from '../../../api';

interface IProps {
  item: IOrder;
}

export const DeleteOrderModal: FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const setClose = () => {
    dispatch(setDeleteOrderItem(null));
  };

  const deleteItem = async () => {
    try {
      setLoading(true);
      const id = item._id;
      await axios.delete(`/order/${id}`);
      dispatch(deleteOrder(id));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DeleteModal setClose={setClose} clickDelete={deleteItem} isLoading={loading}>
      <OrderItem item={item} />
    </DeleteModal>
  );
};
