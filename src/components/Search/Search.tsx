import { useSetRecoilState } from 'recoil';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState, useEffect } from 'react';

import { InputWrapper } from './Search.styles';
import { searchQueryState } from 'store';

const Search = ({ placeholder }: { placeholder: string }) => {
  const setSearchQuery = useSetRecoilState(searchQueryState);
  const [input, setInput] = useState('');

  useEffect(() => {
    const id = setTimeout(() => {
      setSearchQuery(input);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [input, setSearchQuery]);
  return (
    <InputWrapper>
      <AiOutlineSearch />
      <input
        value={input}
        type="text"
        placeholder={placeholder}
        onChange={e => setInput(e.target.value)}
        aria-label={placeholder}
      />
    </InputWrapper>
  );
};

export default Search;
