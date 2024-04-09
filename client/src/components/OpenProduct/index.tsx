import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setOpenProduct } from '../../store/slices/orderSlice';
import './OpenProduct.scss';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimClose } from '../../hooks/useAnimClose';
import { ProductsTable } from '../ProductsTable';
import { OpenProductPanel } from './OpenProductPanel';

export const OpenProduct = () => {
  const { t } = useTranslation();
  const { isLoading, items, error } = useAppSelector((state) => state.productSlice);
  const dispatch = useAppDispatch();
  const errorMessage = error ? t(error) : '';

  const closeOpenProducts = (a: null) => {
    dispatch(setOpenProduct(a));
  };

  const anim = useAnimClose(closeOpenProducts);

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
        <OpenProductPanel />
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
