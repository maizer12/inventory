import { IProduct } from '../../models/IProduct';

export interface ProductProps {
  className?: string;
  moreInfo?: boolean;
  item: IProduct;
}
