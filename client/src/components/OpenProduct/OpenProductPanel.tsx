import { FC } from 'react';
import { setCreateProductModal } from '../../store/slices/productSlice';
import { HTag } from '../../common';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useTranslation } from 'react-i18next';

export const OpenProductPanel: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { openOrder } = useAppSelector((state) => state.orderSlice);
  const openCreateProduct = () => {
    dispatch(setCreateProductModal(true));
  };

  return (
    <div className="open-product__header">
      <HTag tag="h2" className="mb-4">
        {openOrder?.title}
      </HTag>
      <button className="open-product__btn d-flex align-items-center" onClick={openCreateProduct}>
        <span className="d-flex justify-content-center align-items-center">+</span>
        {t('add-product.title')}
      </button>
    </div>
  );
};
