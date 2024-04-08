import { FC, useState, useEffect } from 'react';
import './Products.scss';
import { HTag, PTag, Select } from '../../common';
import { Product } from '../../components';
import { useTypeProduct, useStatusProduct } from '../../components/Modals/CreateProductModal/_constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/slices/productSlice/asyncActions';
import { useTranslation } from 'react-i18next';

const Products: FC = () => {
  const { t } = useTranslation();
  const [productType, setProductType] = useState<string | number>('All');
  const [productStatus, setProductStatus] = useState<string | number>('All');
  const { items, count } = useAppSelector((state) => state.productSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ productStatus, productType }));
  }, [productStatus, productType]);

  return (
    <main>
      <div className="products-header d-flex align-items-center">
        <HTag tag="h1">{`${t('products.title')} / ${!!count && count}`}</HTag>
        <div className="products-header__item d-flex align-items-center">
          <PTag>Тип:</PTag>
          <Select items={useTypeProduct()} setSelect={setProductType} text={t('default.selector')} />
        </div>
        <div className="products-header__item d-flex align-items-center">
          <PTag>Статус:</PTag>
          <Select items={useStatusProduct()} setSelect={setProductStatus} text={t('default.selector')} />
        </div>
      </div>
      <ul className="product-table scroll-style">
        {items.map((e) => (
          <Product className="block table-item" key={e._id} moreInfo={true} item={e} />
        ))}
      </ul>
    </main>
  );
};

export default Products;
