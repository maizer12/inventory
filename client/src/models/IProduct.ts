export interface IProduct {
  _id: string;
  name: string;
  serialNumber: string;
  imageUrl: string;
  warrantyStartDate: Date;
  warrantyEndDate: Date;
  status: number;
  priceUSD: number;
  priceUAH: number;
  type: string;
  incomeTitle: string;
  createdAt: Date;
  updatedAt: Date;
}
