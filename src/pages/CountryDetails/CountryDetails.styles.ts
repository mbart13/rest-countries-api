import styled from 'styled-components';
import { FlagWrapper } from 'components/CountryCard/CountryCard.styles';
import { Link } from 'react-router-dom';
import Container from 'components/Container/Container';
import { breakpoints } from 'styles/Breakpoints';

export const Wrapper = styled(Container)`
  padding-top: 1.5rem;
`;

export const StyledLink = styled(Link)`
  background-color: var(--color-elements);
  transition: var(--transition);
  box-shadow: 0 0 0.4375rem rgba(0, 0, 0, 0.3);
  padding: 0.375rem 1.4375rem;
  border: none;
  color: var(--color-text);
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s linear;

  :hover {
    transform: translateY(-0.3125rem);
  }
`;

export const CountryWrapper = styled.div`
  margin: 4rem auto;
  max-width: 26.875rem;

  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: center;
    margin: 4rem 0;
    max-width: unset;
  }
`;

export const StyledCountryDetails = styled.div`
  padding-top: 2.75rem;
  color: var(--color-text);
  h3 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.375rem;
    font-weight: --var(fw-extra-bold);
    margin-bottom: 1rem;

    @media (min-width: ${breakpoints.desktop}) {
      font-size: 2rem;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 0;
    flex-basis: 50%;
  }
`;

export const Flag = styled(FlagWrapper)`
  @media (min-width: ${breakpoints.desktop}) {
    height: 25rem;
    margin-right: 9rem;
    flex-basis: 50%;
  }
`;

export const CountryInfo = styled.div`
  font-size: 0.875rem;
  ul {
    padding: 0;
    margin-bottom: 2rem;
    line-height: 2;

    @media (min-width: ${breakpoints.desktop}) {
      margin-top: 0;
      font-size: 1rem;
    }
  }

  ul:first-child {
    @media (min-width: ${breakpoints.desktop}) {
      margin-right: 7.3125rem;
    }
  }

  span,
  h3 {
    font-weight: var(--fw-semi-bold);
  }

  h3 {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: flex-start;
  }
`;

export const BorderingCountries = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 0;
  margin-bottom: 0;
  font-size: 1rem;
`;
