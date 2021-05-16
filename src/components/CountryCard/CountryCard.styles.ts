import styled from 'styled-components';
import CardWrapper from 'components/CardWrapper/CardWrapper';
import { breakpoints } from 'styles/Breakpoints';

export const Container = styled(CardWrapper)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.4375rem 0.125rem rgba(0, 0, 0, 0.03);
  transition: transform 0.2s cubic-bezier(0.34, 2, 0.6, 1);

  :hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`;

export const FlagWrapper = styled.div`
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  overflow: auto;
  flex-basis: 50%;
  overflow-y: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CountryInfo = styled.div`
  transition: var(--transition);
  background-color: var(--color-elements);
  padding: 1.5rem;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  color: var(--color-text);
  flex-basis: 50%;
  h2 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: var(--fw-extra-bold);
  }

  ul {
    font-size: 0.875rem;
    padding: 0;
  }

  span {
    font-weight: var(--fw-semi-bold);
  }
`;
