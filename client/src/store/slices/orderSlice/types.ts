import { IOrder } from '../../../models/IOrder';

export interface CardsTypes {
  items: IOrder[];
  status: '' | 'err' | 'loading';
  openOrder: null | IOrder;
  createOrderModal: boolean;
  deleteOrderItem: IOrder | null;
}
