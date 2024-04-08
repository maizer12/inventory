export interface IProductForm {
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
