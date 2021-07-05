import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import Header from 'components/Header/Header';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Wrapper } from './App.styles';
import Home from 'pages/Home/Home';
import CountryDetails from 'pages/CountryDetails/CountryDetails';
import useDarkMode from 'hooks/useDarkMode';
import Spinner from 'components/Spinner';
import { regionFilterState, searchQueryState, currentPageState } from 'store';
import ErrorFallback from 'components/ErrorFallback';

function App() {
  const filter = useRecoilValue(regionFilterState);
  const searchQuery = useRecoilValue(searchQueryState);
  const setCurrentPage = useSetRecoilState(currentPageState);
  const [theme, themeToggler] = useDarkMode();

  useEffect(() => {
    setCurrentPage(0);
  }, [filter, searchQuery, setCurrentPage]);

  return (
    <Router>
      <Wrapper>
        <GlobalStyles />
        <Header toggleTheme={themeToggler} theme={theme} />
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/:code">
                <CountryDetails />
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Wrapper>
    </Router>
  );
}

export default App;
