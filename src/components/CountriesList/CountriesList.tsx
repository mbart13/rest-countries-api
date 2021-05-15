import { Wrapper, NoResults } from './CountriesList.styles';
import CountryCard from 'components/CountryCard/CountryCard';
import Country from 'models/Country';

const CountriesList: React.FC<{
  countries: Country[];
  searchQuery: string;
  selectedRegion: string;
}> = ({ countries, searchQuery }) => {
  if (searchQuery) {
    countries = countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  if (!countries.length) {
    return <NoResults>No results found</NoResults>;
  }

  return (
    <Wrapper>
      {countries.map((country: Country) => {
        return <CountryCard key={country.alpha3Code} {...country} />;
      })}
    </Wrapper>
  );
};

export default CountriesList;
