import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';
import { HTag } from '../HTag';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  money?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, money = '', ...props }, ref) => {
    const classNames = cn(styles.input, className, { [styles['label-money']]: money });

    return (
      <label className={classNames}>
        <input ref={ref} {...props} />
        <HTag tag="h3">{money}</HTag>
        {error && <p className="error-message anim-opacity">{error}</p>}
      </label>
    );
  },
);
