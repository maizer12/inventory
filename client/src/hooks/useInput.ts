import { useState } from 'react';

export const useInput = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setValue(event);
  };
  return { value, onChange };
};
