import { FC } from 'react';
import { IModalProps } from './Modal.types.ts';
import styles from './Modal.module.scss';
import { X } from 'lucide-react';
import { HTag } from '../HTag/index.tsx';
import { motion } from 'framer-motion';
import { useAnimClose } from '../../hooks/useAnimClose.ts';

export const Modal: FC<IModalProps> = ({ setClose, children, title, className = '' }) => {
  const handleClose = (a: null) => {
    setTimeout(() => setClose(!!a), 600);
  };

  const anim = useAnimClose(handleClose);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: anim.isClosing ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <div className={styles.main + ' scroll-style'} onClick={anim.handleClose}>
        <div className={styles.content + ` ${className}`} onClick={(e) => e.stopPropagation()}>
          <button className={'button-round ' + styles.close} onClick={anim.handleClose}>
            <X />
          </button>
          <HTag tag="h2" className="delete-order__title modal-padding">
            {title}
          </HTag>
          {children}
        </div>
      </div>
    </motion.div>
  );
};
