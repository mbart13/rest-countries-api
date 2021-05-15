import styled from 'styled-components';
import CardWrapper from 'components/CardWrapper/CardWrapper';

export const Container = styled(CardWrapper)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.4375rem 0.125rem rgba(0, 0, 0, 0.03);
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
    object-fit: cover;
  }
`;

export const CountryInfo = styled.div`
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
