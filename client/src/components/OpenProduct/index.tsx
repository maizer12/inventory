import { HTag, Loader } from '../../common';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setOpenProduct, setCreateProductModal } from '../../store/slices/orderSlice';
import { Product } from '../Product';
import './OpenProduct.scss';
import { X } from 'lucide-react';

export const OpenProduct = () => {
  const { openOrder, products, productsLoading } = useAppSelector((state) => state.orderSlice);
  const dispatch = useAppDispatch();

  const closeOpenProducts = () => {
    dispatch(setOpenProduct(null));
  };

  const openCreateProduct = () => {
    dispatch(setCreateProductModal(true));
  };

  return (
    <div className="open-product block">
      <button className="open-product__close button-round" onClick={closeOpenProducts}>
        <X />
      </button>
      <div className="open-product__header">
        <HTag tag="h2" className="mb-4">
          {openOrder?.title}
        </HTag>
        <button className="open-product__btn d-flex align-items-center" onClick={openCreateProduct}>
          <span className="d-flex justify-content-center align-items-center">+</span>
          Добавить продукт
        </button>
      </div>
      <ul className="p-0">{!!products.length && products.map((e) => <Product key={e._id} item={e} />)}</ul>
      {productsLoading && (
        <div className="wrapper-info d-grid justify-content-center align-items-center">
          <Loader />
        </div>
      )}
      {!productsLoading && !products.length && (
        <div className="wrapper-info d-grid justify-content-center align-items-center">
          <HTag tag="h4">Table is empty!</HTag>
        </div>
      )}
    </div>
  );
};
