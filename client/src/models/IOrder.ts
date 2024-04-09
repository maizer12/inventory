export interface IOrder {
  _id: string;
  title: string;
  date: Date;
  amountUSD: number;
  amountUAH: number;
  productCount: number;
  __v?: number;
}
