import { useTranslation } from 'react-i18next';

export const useArrStatus = () => {
  const { t } = useTranslation();

  return [t('status.free'), t('status.inRepair')];
};

export const useArrStates = () => {
  const { t } = useTranslation();

  return [t('state.new'), t('state.used')];
};
