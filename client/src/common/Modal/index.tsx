import { FC } from 'react';
import { IModalProps } from './Modal.types.ts';
import styles from './Modal.module.scss';
import { X } from 'lucide-react';
import { HTag } from '../HTag/index.tsx';

export const Modal: FC<IModalProps> = ({ setClose, children, title }) => {
  return (
    <div className={styles.main} onClick={() => setClose(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={'button-round ' + styles.close} onClick={() => setClose(false)}>
          <X />
        </button>
        <HTag tag="h2" className="delete-order__title modal-padding">
          {title}
        </HTag>

        {children}
      </div>
    </div>
  );
};
