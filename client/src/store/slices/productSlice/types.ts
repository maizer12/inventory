import { IProduct } from '../../../models/IProduct';

export interface ProductSliceTypes {
  items: [] | IProduct[];
  isLoading: boolean;
  createProductModal: boolean;
}
