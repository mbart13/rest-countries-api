import styled from 'styled-components';
import { breakpoints } from 'styles/Breakpoints';

const Container = styled.div`
  padding: 0 1rem;

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 80rem;
    margin: 0 auto;
  }
`;

export default Container;
