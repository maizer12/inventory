import { IOrder } from '../../../models/IOrder';

export interface OrdersTypes {
  items: IOrder[];
  isLoading: boolean;
  openPage: number;
  count: null | number;
  error: string;
  openOrder: null | IOrder;
  createOrderModal: boolean;
  deleteOrderItem: IOrder | null;
}
export interface IFetchOrders {
  items: IOrder[];
  count: number;
}
