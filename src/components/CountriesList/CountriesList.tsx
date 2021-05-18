import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';
import { Wrapper, Notification } from './CountriesList.styles';
import CountryCard from 'components/CountryCard/CountryCard';
import Country from 'models/Country';

const CountriesList: React.FC<{
  countries: Country[];
  selectedRegion: string;
  isLoading: boolean;
  isError: boolean;
}> = ({ countries, isLoading, isError }) => {
  const override = css`
    display: block;
    margin: 3rem auto;
  `;

  if (!countries.length && !isLoading && !isError) {
    return <Notification>No results found</Notification>;
  }

  if (isError) {
    return (
      <Notification>
        Something went wrong. Please try to refresh the page.
      </Notification>
    );
  }

  return (
    <>
      <ClipLoader
        css={override}
        color="#36D7B7"
        loading={isLoading}
        size={60}
      ></ClipLoader>
      <Wrapper>
        {countries.map((country: Country) => {
          return <CountryCard key={country.alpha3Code} {...country} />;
        })}
      </Wrapper>
    </>
  );
};

export default CountriesList;
