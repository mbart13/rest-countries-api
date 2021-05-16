import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 2.5rem;

  @media (min-width: 42.375rem) {
    padding: 3rem 0;
    grid-template-columns: repeat(2, minmax(16.5rem, 1fr));
  }

  @media (min-width: 62.5rem) {
    grid-template-columns: repeat(3, minmax(16.5rem, 1fr));
  }

  @media (min-width: 80rem) {
    grid-template-columns: repeat(4, minmax(16.5rem, 1fr));
  }
`;

export const Notification = styled.p`
  text-align: center;
  font-size: 2rem;
  padding-top: 2rem;
  color: var(--color-text);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
`;
