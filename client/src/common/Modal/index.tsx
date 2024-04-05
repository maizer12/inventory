import { FC } from 'react';
import { IModalProps } from './Modal.types.ts';
import styles from './Modal.module.scss';
import { X } from 'lucide-react';

export const Modal: FC<IModalProps> = ({ setClose, children }) => {
	return (
		<div className={styles.main} onClick={() => setClose(false)}>
			<div className={styles.content} onClick={e => e.stopPropagation()}>
				<button className={'button-round ' + styles.close}>
					<X />
				</button>
				{children}
			</div>
		</div>
	);
};
