import { IOrder } from '../../../models/IOrder';
import { IProduct } from '../../../models/IProduct';

export interface CardsTypes {
  items: IOrder[];
  status: '' | 'err' | 'loading';
  products: IProduct[];
  productsLoading: boolean;
  openOrder: null | IOrder;
  createOrderModal: boolean;
}
