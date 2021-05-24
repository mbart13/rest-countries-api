import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from 'styles/GlobalStyles';
import { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import getCountries from './helpers/api';
import Country from 'models/Country';
import { Wrapper } from './App.styles';
import Home from 'pages/Home/Home';
import CountryDetails from 'pages/CountryDetails/CountryDetails';
import useDarkMode from 'hooks/UseDarkMode';
import Regions from 'enums/Regions';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>(Regions.All);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [theme, themeToggler] = useDarkMode();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getCountries();
        setCountries(data);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  const handleSelectedRegion = (target: any): void => {
    setSelectedRegion(target.selectedItem);
  };

  useEffect(() => {
    if (selectedRegion === Regions.All) {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter(country => country.region === selectedRegion)
      );
    }
  }, [countries, selectedRegion]);

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedRegion, searchQuery]);

  const handlePageClick = ({ selected }: any): void => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <Wrapper>
        <GlobalStyles />
        <Header toggleTheme={themeToggler} theme={theme} />
        <Switch>
          <Route exact path="/">
            <Home
              searchQuery={searchQuery}
              selectedRegion={selectedRegion}
              setSearchQuery={setSearchQuery}
              filteredCountries={filteredCountries}
              handleSelectedRegion={handleSelectedRegion}
              isLoading={isLoading}
              isError={isError}
              currentPage={currentPage}
              handlePageClick={handlePageClick}
            />
          </Route>
          <Route path="/:code">
            <CountryDetails countries={countries} />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
