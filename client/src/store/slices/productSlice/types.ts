import { IProduct } from '../../../models/IProduct';

export interface ProductSliceTypes {
  items: [] | IProduct[];
  count: number | null;
  isLoading: boolean;
  createProductModal: boolean;
  deleteProductItem: null | IProduct;
}

export interface ProductsParams {
  productType?: string | number;
  productStatus?: string | number;
}

export interface IFetchProducts {
  items: IProduct[];
  count: number;
}
