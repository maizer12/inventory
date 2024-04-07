import { FC, ReactNode } from 'react';
import { Button } from '../';
import { Modal } from '.';
import { Trash2 } from 'lucide-react';

interface IProps {
  children: ReactNode;
}

export const DeleteModal: FC<IProps> = ({ children }) => {
  return (
    <Modal title="Вы уверены, что хотите удалить этот объект?" className="delete-modal">
      {children}
      <div className="d-flex justify-content-end modal-footer">
        <button className="delete-modal__close">Отменить</button>
        <Button className="delete-modal__remove">
          <Trash2 /> Удалить
        </Button>
      </div>
    </Modal>
  );
};
