import { FC } from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import style from './Button.module.scss';

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={cn(style.button, className)} {...props}>
      {children}
    </button>
  );
};
