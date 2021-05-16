import { useState } from 'react';

import { Wrapper, NoResults } from './CountriesList.styles';
import CountryCard from 'components/CountryCard/CountryCard';
import Country from 'models/Country';
import Button from 'components/Button/Button';

const CountriesList: React.FC<{
  countries: Country[];
  searchQuery: string;
  selectedRegion: string;
}> = ({ countries, searchQuery }) => {
  const [showAll, setShowAll] = useState(false);
  if (searchQuery) {
    countries = countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  if (!countries.length) {
    return <NoResults>No results found</NoResults>;
  }

  const DISPLAY_LIMIT = 20;

  return (
    <>
      <Wrapper>
        {countries.map((country: Country) => {
          return <CountryCard key={country.alpha3Code} {...country} />;
        })}
      </Wrapper>
      {/* {!showAll && (
        <Button handleClick={() => setShowAll(prevState => !prevState)}>
          Show All
        </Button>
      )} */}
    </>
  );
};

export default CountriesList;
