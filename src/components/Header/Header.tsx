import styled from 'styled-components';
import { IoMoonOutline } from 'react-icons/io5';
import { breakpoints } from 'styles/Breakpoints';

const StyledHeader = styled.header`
  background-color: var(--color-elements);
  box-shadow: var(--card-box-shadow);
  margin-bottom: 1.5rem;

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 3rem;
  }
`;

const StyledHeading = styled.h1`
  color: var(--color-text);
  font-weight: var(--fw-extra-bold);
  font-size: 0.875rem;

  @media (min-width: 42.375rem) {
    font-size: 1.5rem;
  }
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;

  p {
    font-size: 0.75rem;
    margin-left: 0.5rem;
    font-weight: var(--fw-semi-bold);

    @media (min-width: 42.375rem) {
      font-size: 1rem;
    }
  }

  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 80rem;
    margin: 0 auto;
  }
`;

const Header: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <Wrapper>
        <StyledHeading>Where in the world?</StyledHeading>
        <ToggleButton onClick={toggleTheme}>
          <IoMoonOutline />
          <p>Dark Mode</p>
        </ToggleButton>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
