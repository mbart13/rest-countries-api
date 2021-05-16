import styled from 'styled-components';
import { breakpoints } from 'styles/Breakpoints';

export const Wrapper = styled.div`
  background-color: var(--color-bg);
  min-height: 100vh;

  main {
    padding: 0 1rem;

    @media (min-width: ${breakpoints.desktop}) {
      max-width: 80rem;
      margin: 0 auto;
    }
  }
`;

export const Filters = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
