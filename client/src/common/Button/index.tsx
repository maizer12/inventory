import { FC } from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import style from './Button.module.scss';
import { Loader } from '../Loader';

export const Button: FC<ButtonProps> = ({ children, className, isLoading, ...props }) => {
  return (
    <button className={cn(style.button, className)} {...props}>
      {isLoading ? <Loader className={style.loader} /> : children}
    </button>
  );
};
