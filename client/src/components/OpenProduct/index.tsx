import { useTranslation } from 'react-i18next';
import { EmptyTable, HTag, Loader } from '../../common';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setOpenProduct } from '../../store/slices/orderSlice';
import { setCreateProductModal } from '../../store/slices/productSlice';
import { Product } from '../Product';
import './OpenProduct.scss';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimClose } from '../../hooks/useAnimClose';

export const OpenProduct = () => {
  const { t } = useTranslation();
  const { openOrder } = useAppSelector((state) => state.orderSlice);
  const { isLoading, items } = useAppSelector((state) => state.productSlice);
  const dispatch = useAppDispatch();

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
        <ul className="p-0">{items && items.map((e) => <Product key={e._id} item={e} />)}</ul>
        {isLoading && (
          <div className="wrapper-info d-grid justify-content-center align-items-center">
            <Loader />
          </div>
        )}
        {!isLoading && !items?.length && <EmptyTable />}
      </div>
    </motion.div>
  );
};
