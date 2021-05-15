import styled from 'styled-components';
import CardWrapper from 'components/CardWrapper/CardWrapper';

type StyledListProps = {
  isOpen: boolean;
};

export const Wrapper = styled(CardWrapper)`
  max-width: 12.5rem;
  position: relative;
  flex-grow: 1;
`;
export const StyledButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.875rem 1.5rem;
  font-size: 0.75rem;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 1.2rem;
  }
  :hover {
    cursor: pointer;
  }
`;
export const StyledList = styled.ul<StyledListProps>`
  padding-left: 1rem;
  margin: 0;
  padding-bottom: ${({ isOpen }) => (isOpen ? '1rem' : 0)};
  position: absolute;
  background: white;
  width: 100%;
`;
export const StyledListItem = styled.li`
  font-size: 0.75rem;
  ::not(::last-child) {
    margin-bottom: 0.5rem;
  }
`;
