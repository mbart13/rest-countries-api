import { GlobalStyles } from 'styles/GlobalStyles';
import { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import Search from 'components/Search/Search';
import Select from 'components/Select/Select';
import CountriesList from 'components/CountriesList/CountriesList';
import getCountries from './helpers/api';
import Country from 'models/Country';
import { Wrapper, Filters } from './App.styles';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  useEffect(() => {
    getCountries().then(data => setCountries(data));
  }, []);

  const handleSelectedItem = (target: any) => {
    setSelectedRegion(target.selectedItem);
  };

  useEffect(() => {
    if (selectedRegion === 'All') {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter(country => country.region === selectedRegion)
      );
    }
  }, [countries, selectedRegion]);

  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <main>
        <Filters>
          <Search
            setSearchQuery={setSearchQuery}
            placeholder="Search for a country..."
          />
          <Select
            selectedRegion={selectedRegion}
            handleSelectedItem={handleSelectedItem}
          />
        </Filters>
        <CountriesList
          searchQuery={searchQuery}
          selectedRegion={selectedRegion}
          countries={filteredCountries}
        />
      </main>
    </Wrapper>
  );
}

export default App;
