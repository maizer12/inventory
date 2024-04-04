import { PTagProps } from './PTag.props';
import { FC } from 'react';
import cn from 'classnames';
import styles from './PTag.module.scss';

export const PTag: FC<PTagProps> = ({ children, className = '', size = '', variant = '' }) => {
	const classNames = cn(className, styles[size], styles['text'], styles[variant]);

	{
		return <p className={classNames}>{children}</p>;
	}
};
