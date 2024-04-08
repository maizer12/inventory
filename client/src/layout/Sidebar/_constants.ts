import { useTranslation } from 'react-i18next';

export const useNavMenu = () => {
  const { t } = useTranslation();

  return [
    {
      name: t('sidebar.home'),
      url: '/',
    },
    {
      name: t('sidebar.products'),
      url: '/products',
    },
  ];
};

export const langConstants = ['ua', 'en'];
