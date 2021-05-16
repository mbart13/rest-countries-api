import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from 'styles/GlobalStyles';
import { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import getCountries from './helpers/api';
import Country from 'models/Country';
import { Wrapper } from './App.styles';
import Home from 'pages/Home/Home';
import CountryDetails from 'pages/CountryDetails/CountryDetails';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    getCountries().then(data => setCountries(data));
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

  const toggleTheme = (): void => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.body.className = theme;
    // localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <Wrapper>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Route exact path="/">
          <Home
            searchQuery={searchQuery}
            selectedRegion={selectedRegion}
            setSearchQuery={setSearchQuery}
            filteredCountries={filteredCountries}
            handleSelectedRegion={handleSelectedRegion}
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
