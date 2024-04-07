import { FC } from 'react';
import { DotStatus, HTag, PTag } from '../../common';
import { Trash2 } from 'lucide-react';
import { ProductProps } from './Product.types';
import cn from 'classnames';
import './Product.scss';
import { useAppDispatch } from '../../hooks/redux';
import { setDeleteProductItem } from '../../store/slices/productSlice';

export const Product: FC<ProductProps> = ({ className, moreInfo = false, item }) => {
  const dispatch = useAppDispatch();
  const classNames = cn(className, 'product-item', 'd-flex', { 'more-info': moreInfo });

  const clickRemove = () => {
    dispatch(setDeleteProductItem(item));
  };

  return (
    <li className={classNames}>
      <div className="product-item__info d-flex align-items-center">
        <DotStatus />
        <img className="product-item__img" src={item.imageUrl} alt="product" />
        <div className="product-item__desc">
          <HTag tag="h3" line={true}>
            {item.name}
          </HTag>
          <PTag size="lg">SN-12.34567897</PTag>
        </div>
      </div>
      <PTag size="lg" variant="primary" className="product-item__status">
        Свободен
      </PTag>
      {moreInfo && (
        <>
          <div>
            <PTag size="md" variant="dark" className="d-flex">
              <PTag>с </PTag> 06/04/2017
            </PTag>
            <PTag size="md" variant="dark" className="d-flex">
              <PTag>по </PTag> 08/04/2017
            </PTag>
          </div>
          <PTag size="md">Новый</PTag>
          <div>
            <PTag>2 500$</PTag>
            <PTag size="md" variant="dark" className="d-flex">
              250 000.50 UAH
            </PTag>
          </div>
          <HTag line={true} tag="h3">
            456
          </HTag>
          <div>
            <PTag size="sm">06/12</PTag>
            <PTag size="md" variant="dark" className="d-flex">
              06 / Сен / 2017
            </PTag>
          </div>
        </>
      )}
      <button className="product-item__delete remove-btn" onClick={clickRemove}>
        <Trash2 />
      </button>
    </li>
  );
};
