export interface IOrder {
  _id: string;
  title: string;
  productsSum: 0;
  date: string | Date;
  amountUSD: number;
  amountUAH: number;
  productCount: number;
  __v?: number;
}
