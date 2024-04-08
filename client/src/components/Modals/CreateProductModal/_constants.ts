import { useTranslation } from 'react-i18next';

export const useStatusProduct = () => {
  const { t } = useTranslation();

  return [
    {
      name: t('status.free'),
      value: 0,
    },
    {
      name: t('status.inRepair'),
      value: 1,
    },
  ];
};

export const useStateProduct = () => {
  const { t } = useTranslation();

  return [
    {
      name: t('state.new'),
      value: 0,
    },
    {
      name: t('state.used'),
      value: 1,
    },
  ];
};

export const useTypeProduct = () => {
  const { t } = useTranslation();

  return [
    {
      name: t('type.phone'),
      value: 'phone',
    },
    {
      name: t('type.laptop'),
      value: 'laptop',
    },
    {
      name: t('type.tablet'),
      value: 'tablet',
    },
    {
      name: t('type.tv'),
      value: 'tv',
    },
  ];
};
