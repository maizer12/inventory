import { FC, ReactNode } from 'react';
import { HTag } from '../HTag';
import { useTranslation } from 'react-i18next';

interface IProps {
  children?: ReactNode;
  variant?: 'danger' | '';
}

export const AlertTable: FC<IProps> = ({ children, variant = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={`wrapper-info d-grid justify-content-center align-items-center anim-opacity ${variant}`}>
      <HTag tag="h4">{children || t('table.empty')}</HTag>
    </div>
  );
};
