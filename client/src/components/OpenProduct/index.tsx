import { useTranslation } from 'react-i18next';
import { HTag } from '../../common';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setOpenProduct } from '../../store/slices/orderSlice';
import { setCreateProductModal } from '../../store/slices/productSlice';
import './OpenProduct.scss';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimClose } from '../../hooks/useAnimClose';
import { ProductsTable } from '../ProductsTable';

export const OpenProduct = () => {
  const { t } = useTranslation();
  const { openOrder } = useAppSelector((state) => state.orderSlice);
  const { isLoading, items, error } = useAppSelector((state) => state.productSlice);
  const dispatch = useAppDispatch();
  const errorMessage = error ? t(error) : '';

  const closeOpenProducts = (a: null) => {
    dispatch(setOpenProduct(a));
  };

  const anim = useAnimClose(closeOpenProducts);

  const openCreateProduct = () => {
    dispatch(setCreateProductModal(true));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: anim.isClosing ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="open-product block">
        <button className="open-product__close button-round" onClick={anim.handleClose}>
          <X />
        </button>
        <div className="open-product__header">
          <HTag tag="h2" className="mb-4">
            {openOrder?.title}
          </HTag>
          <button className="open-product__btn d-flex align-items-center" onClick={openCreateProduct}>
            <span className="d-flex justify-content-center align-items-center">+</span>
            {t('add-product.title')}
          </button>
        </div>
        <ProductsTable
          items={items}
          error={errorMessage}
          isLoading={isLoading}
          className="open-product__items"
          moreInfo={false}
          fullPage={false}
        />
      </div>
    </motion.div>
  );
};
