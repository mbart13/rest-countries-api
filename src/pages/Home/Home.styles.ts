import styled from 'styled-components';
import { breakpoints } from 'styles/Breakpoints';

export const Filters = styled.div`
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    justify-content: space-between;
  }
`;
