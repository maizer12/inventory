import { FC } from 'react';
import styles from './Calendar.module.scss';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { CalendarProps } from './Calendar.props';

export const CalendarInput: FC<CalendarProps> = ({ className, date, setDate }) => {
  const changeDate = (date: Date | null) => {
    if (date) {
      setDate(date);
    }
  };

  return (
    <label className={styles.calendar + ` ${className}`}>
      <DatePicker selected={date} onChange={(date) => changeDate(date)} />
    </label>
  );
};
