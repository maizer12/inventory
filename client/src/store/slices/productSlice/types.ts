import { IProduct } from '../../../models/IProduct';

export interface ProductSliceTypes {
  items: [] | IProduct[];
  isLoading: boolean;
  createProductModal: boolean;
  deleteProductItem: null | IProduct;
}

export interface ProductsParams {
  productType?: string | number;
  productStatus?: string | number;
}
