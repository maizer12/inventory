import { FC } from 'react';
import { DotStatus, HTag, PTag } from '../../common';
import { Trash2 } from 'lucide-react';
import { ProductProps } from './Product.types';
import cn from 'classnames';
import './Product.scss';
import { useAppDispatch } from '../../hooks/redux';
import { setDeleteProductItem } from '../../store/slices/productSlice';
import { useArrStates, useArrStatus } from './_constant';
import { dataFormatter } from '../../helpers/dateFormatter';

export const Product: FC<ProductProps> = ({ className, moreInfo = false, item }) => {
  const dispatch = useAppDispatch();
  const classNames = cn(className, 'product-item', 'd-flex', { 'more-info': moreInfo });
  const arrStates = useArrStates();

  const clickRemove = () => {
    dispatch(setDeleteProductItem(item));
  };

  return (
    <li className={classNames}>
      <div className="product-item__info d-flex align-items-center">
        <DotStatus variant={item.status ? 'disable' : 'active'} />
        <img className="product-item__img" src={item.imageUrl} alt="product" />
        <div className="product-item__desc">
          <HTag tag="h3" line={true}>
            {item.name}
          </HTag>
          <PTag size="lg" className="product-item__ser-num">
            {item.serialNumber}
          </PTag>
        </div>
      </div>
      <PTag size="lg" variant={item.status ? 'dark' : 'primary'} className="product-item__status">
        {useArrStatus()[item.status]}
      </PTag>
      {moreInfo && (
        <>
          <div>
            <PTag size="md" variant="dark">
              с {dataFormatter(item.warrantyStartDate)}
            </PTag>
            <PTag size="md" variant="dark">
              по {dataFormatter(item.warrantyEndDate)}
            </PTag>
          </div>
          <HTag tag="h3">{arrStates[item.state]}</HTag>
          <div>
            <PTag>{item.priceUSD}$</PTag>
            <PTag size="md" variant="dark">
              {item.priceUAH} UAH
            </PTag>
          </div>

          <HTag line={true} tag="h3">
            Дополнительный заголовок, который я не добавил в базу данных из-за лени
          </HTag>
          <div>
            <PTag size="sm">06/12</PTag>
            <PTag size="md" variant="dark">
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
