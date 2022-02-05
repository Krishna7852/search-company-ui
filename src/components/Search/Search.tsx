import React, { useState, useEffect, ChangeEvent } from 'react';
import useDebounce from '../../hooks/useDebounce';
import './style.scss';
interface ISearchProps {
  placeholder: string;
  delay: number;
  onSearch: (query: string) => void;
}

/**
 * 
 * @param {string} placeholder - The placeholder of the Search Field.
 * @param  {number} delay The delay time for the debounce.
 * @param {function} onSearch On Search callback function
 * @returns {ReactElement} SearchComponent
 */

const Search: React.FunctionComponent<ISearchProps> = ({placeholder, delay, onSearch}) => {
  const [query, setQuery] = useState<string>('');
  const debouncedValue = useDebounce(query, delay);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };
  return (
    <div className='search-container'>
      <input type='text' autoFocus autoComplete='off' placeholder={placeholder} onChange={changeHandler} />
    </div>
  );
};

export default React.memo(Search);
