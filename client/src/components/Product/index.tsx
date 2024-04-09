import { FC } from 'react';
import { DotStatus, HTag, PTag } from '../../common';
import { ImageOff, Trash2 } from 'lucide-react';
import { ProductProps } from './Product.types';
import cn from 'classnames';
import './Product.scss';
import { useAppDispatch } from '../../hooks/redux';
import { setDeleteProductItem } from '../../store/slices/productSlice';
import { useArrStates, useArrStatus } from './_constant';
import { dataFormatter } from '../../helpers/dateFormatter';
import { baseURL } from '../../api';
import { useTranslation } from 'react-i18next';

export const Product: FC<ProductProps> = ({ className, moreInfo = false, item }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const classNames = cn(className, 'product-item', 'd-flex', { 'more-info': moreInfo }, 'anim-opacity');
  const arrStates = useArrStates();

  const clickRemove = () => {
    dispatch(setDeleteProductItem(item));
  };

  return (
    <li className={classNames}>
      <div className="product-item__info d-flex align-items-center">
        <DotStatus variant={item.status ? 'disable' : 'active'} />
        <div className="product-item__img">
          {item.imageUrl ? <img src={baseURL + item.imageUrl} alt="product" /> : <ImageOff />}
        </div>
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
              {`${t('table.with')} ${dataFormatter(item.warrantyStartDate)}`}
            </PTag>
            <PTag size="md" variant="dark">
              {`${t('table.to')} ${dataFormatter(item.warrantyEndDate)}`}
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
            {t('table.more.text')}
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
