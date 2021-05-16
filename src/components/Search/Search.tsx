import { Dispatch, SetStateAction } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { InputWrapper } from './Search.styles';

type InputProps = {
  placeholder: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchQuery: string;
};

const Search = ({ placeholder, setSearchQuery, searchQuery }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <InputWrapper>
      <AiOutlineSearch />
      <input
        value={searchQuery}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

export default Search;
