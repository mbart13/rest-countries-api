import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GlobalStyles } from 'styles/GlobalStyles';
import { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import getCountries from './helpers/api';
import Country from 'models/Country';
import { Wrapper } from './App.styles';
import Home from 'pages/Home/Home';
import CountryDetails from 'pages/CountryDetails/CountryDetails';
import useDarkMode from 'hooks/useDarkMode';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [theme, themeToggler] = useDarkMode();

  useEffect(() => {
    getCountries()
      .then(data => {
        setCountries(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const handleSelectedRegion = (target: any) => {
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
    <Router>
      <Wrapper>
        <GlobalStyles />
        <Header toggleTheme={themeToggler} theme={theme} />
        <Route exact path="/">
          <Home
            searchQuery={searchQuery}
            selectedRegion={selectedRegion}
            setSearchQuery={setSearchQuery}
            filteredCountries={filteredCountries}
            handleSelectedRegion={handleSelectedRegion}
            isLoading={isLoading}
            isError={isError}
          />
        </Route>
        <Route exact path="/:code">
          <CountryDetails countries={countries} />
        </Route>
      </Wrapper>
    </Router>
  );
}

export default App;
