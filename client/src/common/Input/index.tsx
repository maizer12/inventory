import { FC } from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input className={styles.input + ` ${className}`} {...props} />;
};
