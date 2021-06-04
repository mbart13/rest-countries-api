import { useRecoilState } from 'recoil';
import { AiOutlineSearch } from 'react-icons/ai';

import { InputWrapper } from './Search.styles';
import { searchQueryState } from 'store';

type InputProps = {
  placeholder: string;
};

const Search = ({ placeholder }: InputProps) => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
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
