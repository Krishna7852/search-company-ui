import { useState, useEffect } from 'react';

/**
 *
 * @param {string} value - The value of the Search Field.
 * @param  {number} delay The delay time for the debounce.
 * @returns {string} debounced value.
 */

const useDebounce = (value: string, delay: number): string => {
  // State and setters for debounced value
  const [debouncedVal, setDebouncedVal] = useState<string>(value);
  useEffect(() => {
    // Updating the debounced value after specific delay
    const timer = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);
    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed
    // within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]); // Only re-call effect if any changes value or delay
  return debouncedVal;
};
export default useDebounce;
