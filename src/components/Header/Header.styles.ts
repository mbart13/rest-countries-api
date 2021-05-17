import styled from 'styled-components';
import { breakpoints } from 'styles/Breakpoints';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: var(--color-elements);
  box-shadow: var(--card-box-shadow);
  margin-bottom: 1.5rem;
  transition: var(--transition);

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 3rem;
  }
`;

export const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 80rem;
    margin: 0 auto;
  }
`;

export const StyledHeading = styled(Link)`
  color: var(--color-text);
  font-weight: var(--fw-extra-bold);
  font-size: 0.875rem;

  @media (min-width: 42.375rem) {
    font-size: 1.5rem;
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  color: var(--color-text);

  span {
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
