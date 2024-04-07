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
  createdAt: Date;
  updatedAt: Date;
  state: number;
}
