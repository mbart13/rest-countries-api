import styled from 'styled-components';
import CardWrapper from 'components/CardWrapper/CardWrapper';
import { breakpoints } from 'styles/Breakpoints';

export const InputWrapper = styled(CardWrapper)`
  position: relative;
  margin-bottom: 2.5rem;

  @media (min-width: ${breakpoints.tablet}) {
    flex-grow: 1;
    max-width: 30rem;
    margin-bottom: 0;
  }

  svg {
    position: absolute;
    transform: translateY(100%);
    left: 2rem;
    color: var(--color-input);
  }

  input {
    border: none;
    width: 100%;
    font-size: 0.75rem;
    color: var(--color-text);
    padding: 0.875rem 0 0.875rem 4.625rem;
    outline: none;
    background-color: var(--color-elements);

    @media (min-width: 42.375rem) {
      font-size: 0.875rem;
    }
  }
`;
