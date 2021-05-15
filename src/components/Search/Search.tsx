import { Dispatch, SetStateAction } from 'react';

import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import CardWrapper from 'components/CardWrapper/CardWrapper';
import { breakpoints } from 'styles/Breakpoints';

const InputWrapper = styled(CardWrapper)`
  position: relative;
  margin-bottom: 2.5rem;

  @media (min-width: ${breakpoints.desktop}) {
    flex-grow: 1;
    max-width: 30rem;
    margin-bottom: 0;
  }

  svg {
    position: absolute;
    transform: translateY(100%);
    left: 2rem;
    color: var(--color-input);
  }

  input {
    border: none;
    width: 100%;
    font-size: 0.75rem;
    color: var(--color-input);
    padding: 0.875rem 0 0.875rem 4.625rem;
    outline: none;
  }
`;

type InputProps = {
  placeholder: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

const Search = ({ placeholder, setSearchQuery }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <InputWrapper>
      <AiOutlineSearch />
      <input type="text" placeholder={placeholder} onChange={handleChange} />
    </InputWrapper>
  );
};

export default Search;
