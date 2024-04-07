import { SetStateAction, Dispatch } from 'react';

interface SelectItem {
  value: string | number;
  name: string;
}

export interface SelectProps {
  className?: string;
  items: SelectItem[];
  setSelect: Dispatch<SetStateAction<string | number>>;
  text?: string;
}
