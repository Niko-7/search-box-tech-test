import { useState, useEffect } from 'react';

interface Props {
  searchTerm: string;
}

export const UseDebounce = ({ searchTerm }: Props) => {
  const [value, setValue] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  return value;
};
