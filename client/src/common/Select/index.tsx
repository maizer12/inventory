import { SelectProps } from './Select.props';
import { FC } from 'react';
import cn from 'classnames';
import styles from './Select.module.scss';
import { ChevronDown } from 'lucide-react';

export const Select: FC<SelectProps> = ({ className = '', items, setSelect, text }) => {
  const classNames = cn(className, styles.select);

  {
    return (
      <label className={classNames}>
        <select onChange={(e) => setSelect(e.target.value)}>
          {!!text?.length && <option value="All">{text}</option>}
          {items.map((e) => (
            <option value={e.value} key={e.value}>
              {e.name}
            </option>
          ))}
        </select>
        <ChevronDown />
      </label>
    );
  }
};
