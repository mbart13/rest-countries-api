import styled from 'styled-components';
import { breakpoints } from 'styles/Breakpoints';

export const Filters = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
