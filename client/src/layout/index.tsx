import { FC, ReactNode, Suspense } from 'react';
import { Header } from './Header';
import Sidebar from './Sidebar';
import { DeleteProductModal } from '../components/Modals/DeleteModal/DeleteProductModal';
import { useAppSelector } from '../hooks/redux';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const { deleteProductItem } = useAppSelector((state) => state.productSlice);

  return (
    <>
      <Header />
      <div className="d-flex wrapper">
        <Sidebar />
        <Suspense>{children}</Suspense>
      </div>
      {!!deleteProductItem && <DeleteProductModal item={deleteProductItem} />}
    </>
  );
};

export default Layout;
