import { Dispatch, SetStateAction } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { InputWrapper } from './Search.styles';

type InputProps = {
  placeholder: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchQuery: string;
};

const Search = ({ placeholder, setSearchQuery, searchQuery }: InputProps) => {
  return (
    <InputWrapper>
      <AiOutlineSearch />
      <input
        value={searchQuery}
        type="text"
        placeholder={placeholder}
        onChange={e => setSearchQuery(e.target.value)}
        aria-label={placeholder}
      />
    </InputWrapper>
  );
};

export default Search;
