import { FC } from 'react';
import { HTag } from '../HTag';
import { useTranslation } from 'react-i18next';

export const EmptyTable: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="wrapper-info d-grid justify-content-center align-items-center anim-opacity">
      <HTag tag="h4">{t('table.empty')}</HTag>
    </div>
  );
};
