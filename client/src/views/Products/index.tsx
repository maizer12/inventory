import { FC, useState, useEffect } from 'react';
import './Products.scss';
import { HTag, Loader, PTag, Select } from '../../common';
import { ProductsTable } from '../../components';
import { useTypeProduct, useStatusProduct } from '../../components/Modals/CreateProductModal/_constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/slices/productSlice/asyncActions';
import { useTranslation } from 'react-i18next';
import { useTitle } from '../../hooks/useTitle';

const Products: FC = () => {
  const { t } = useTranslation();
  const [productType, setProductType] = useState<string | number>('All');
  const [productStatus, setProductStatus] = useState<string | number>('All');
  const { items, count, isLoading, error } = useAppSelector((state) => state.productSlice);
  const errorMessage = error ? t(error) : '';
  const search = useAppSelector((state) => state.optionsSlice.search);
  const dispatch = useAppDispatch();

  useTitle('orders.page.title');

  useEffect(() => {
    dispatch(fetchProducts({ productStatus, productType }));
  }, [productStatus, productType, search]);

  return (
    <main className="anim-opacity product-page">
      <div className="products-header d-flex align-items-center">
        <HTag tag="h1">
          {t('products.title')} / {!!count && isLoading ? <Loader /> : count}
        </HTag>
        <div className="products-header__item d-flex align-items-center">
          <PTag>Тип:</PTag>
          <Select items={useTypeProduct()} setSelect={setProductType} text={t('default.selector')} />
        </div>
        <div className="products-header__item d-flex align-items-center">
          <PTag>Статус:</PTag>
          <Select items={useStatusProduct()} setSelect={setProductStatus} text={t('default.selector')} />
        </div>
      </div>
      <ProductsTable items={items} isLoading={isLoading} error={errorMessage} />
    </main>
  );
};

export default Products;
