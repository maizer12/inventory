import { FC } from 'react';
import { IProduct } from '../../models/IProduct';
import { Product } from '../Product';
import { AlertTable, Loader } from '../../common';
import cn from 'classnames';
import './ProductsTable.scss';

interface IProps {
  items: IProduct[];
  isLoading: boolean;
  error: string;
  className?: string;
  moreInfo?: boolean;
  fullPage?: boolean;
}

export const ProductsTable: FC<IProps> = ({ items, isLoading, error, className, moreInfo = true, fullPage = true }) => {
  const classNames = cn({ 'product-table': fullPage }, 'scroll-style', className);

  if (isLoading) {
    return <Loader full={true} />;
  }

  if (error) {
    return <AlertTable variant="danger">{error}</AlertTable>;
  }

  return (
    <ul className={classNames}>
      {items.length ? (
        items.map((e) => <Product className="block table-item mb-4" key={e._id} moreInfo={moreInfo} item={e} />)
      ) : (
        <AlertTable />
      )}
    </ul>
  );
};
