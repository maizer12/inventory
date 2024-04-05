import { DotStatusProps } from './DotStatus.props';
import styles from './DotStatus.module.scss';
import { FC } from 'react';

export const DotStatus: FC<DotStatusProps> = ({ variant = 'active' }) => {
	return <span className={styles[variant] + ` ${styles.dot}`}></span>;
};
