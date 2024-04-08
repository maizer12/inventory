export interface IProductBase {
  name: string;
  serialNumber: string;
  warrantyStartDate: Date;
  warrantyEndDate: Date;
  priceUSD: number;
  priceUAH: number;
  status: number | string;
  type: string | number;
  state: number | string;
}

export interface IProductForm extends IProductBase {}

export interface IProduct extends IProductBase {
  _id: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  status: number;
  type: string;
  state: number;
}
