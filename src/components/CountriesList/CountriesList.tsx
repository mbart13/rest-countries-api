import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';
import { Wrapper, Notification, ButtonWrapper } from './CountriesList.styles';
import CountryCard from 'components/CountryCard/CountryCard';
import Country from 'models/Country';
import Button from 'components/Button/Button';

const CountriesList: React.FC<{
  countries: Country[];
  searchQuery: string;
  selectedRegion: string;
  isLoading: boolean;
  isError: boolean;
}> = ({ countries, searchQuery, isLoading, isError }) => {
  const [showAll, setShowAll] = useState(false);

  const override = css`
    display: block;
    margin: 3rem auto;
  `;

  if (searchQuery) {
    countries = countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  if (!countries.length && !isLoading) {
    return <Notification>No results found</Notification>;
  }

  if (isError) {
    return (
      <Notification>
        Something went wrong. Please try to refresh the page
      </Notification>
    );
  }

  const DISPLAY_LIMIT = 20;

  return (
    <>
      <ClipLoader
        css={override}
        color="#36D7B7"
        loading={isLoading}
        size={60}
      ></ClipLoader>
      <Wrapper>
        {countries
          .slice(0, showAll ? countries.length - 1 : DISPLAY_LIMIT)
          .map((country: Country) => {
            return <CountryCard key={country.alpha3Code} {...country} />;
          })}
      </Wrapper>
      {!showAll && countries.length > DISPLAY_LIMIT && (
        <ButtonWrapper>
          <Button handleClick={() => setShowAll(prevState => !prevState)}>
            Show All
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};

export default CountriesList;
