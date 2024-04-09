import { FC, ReactNode } from 'react';
import { Button } from '../';
import { Modal } from '.';
import { Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface IProps {
  children: ReactNode;
  isLoading?: boolean;
  clickDelete: () => void;
  setClose: (bool: boolean) => void;
}

export const DeleteModal: FC<IProps> = ({ children, setClose, clickDelete, isLoading = false }) => {
  const { t } = useTranslation();

  return (
    <Modal title={t('remove-modal.title')} className="delete-modal" setClose={setClose}>
      {children}
      <div className="d-flex justify-content-end modal-footer">
        <button className="delete-modal__close">{t('close.btn')}</button>
        <Button className="delete-modal__remove" onClick={clickDelete} isLoading={isLoading}>
          <Trash2 /> {t('remove.btn')}
        </Button>
      </div>
    </Modal>
  );
};
