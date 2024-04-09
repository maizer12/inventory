import { FC, useCallback, useState, ChangeEvent } from 'react';
import './Search.scss';
import { useAppDispatch } from '../../hooks/redux';
import { setSearch } from '../../store/slices/optionsSlice';
import debounce from 'lodash.debounce';
import { X } from 'lucide-react';

const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const clearInput = () => {
    setValue('');
    dispatch(setSearch(''));
  };

  const startSearch = useCallback(
    debounce((searchValue: string) => {
      dispatch(setSearch(searchValue));
    }, 350),
    [dispatch],
  );

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    startSearch(inputValue);
  };
  return (
    <label className="search">
      <input className="search" placeholder="Поиск" onChange={changeValue} value={value} />
      {value && (
        <button className="button-round anim-opacity" onClick={clearInput}>
          <X />
        </button>
      )}
    </label>
  );
};

export default Search;
