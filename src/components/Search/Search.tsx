import { useRecoilState } from 'recoil';
import { AiOutlineSearch } from 'react-icons/ai';

import { InputWrapper } from './Search.styles';
import { searchQueryState } from 'store';

const Search = ({ placeholder }: { placeholder: string }) => {
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
