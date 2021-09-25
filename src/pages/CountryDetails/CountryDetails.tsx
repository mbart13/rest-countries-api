import { useParams, useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Country from 'models/Country';
import { BsArrowLeft } from 'react-icons/bs';
import Button from 'components/Button/Button';
import {
  Wrapper,
  CountryWrapper,
  StyledCountryDetails,
  Flag,
  CountryInfo,
  StyledLink,
  BorderingCountries,
} from './CountryDetails.styles';
import { countriesState } from 'store';

const CountryDetails: React.FC = () => {
  const countries = useRecoilValue(countriesState);
  const { code } = useParams<{ code: string }>();
  const history = useHistory();
  const country: Country | undefined = countries.find(
    country => country.alpha3Code === code
  );

  return (
    <Wrapper as="main">
      <Button handleClick={history.goBack}>
        <BsArrowLeft size={20} />
        Back
      </Button>
      <CountryWrapper as="article">
        <Flag>
          <img src={country?.flags[0]} alt={`flag of ${country?.name}`} />
        </Flag>
        <StyledCountryDetails>
          <h1>{country?.name}</h1>
          <CountryInfo>
            <ul>
              <li>
                <span>Native Name: </span>
                {country?.nativeName ? country?.nativeName : 'n/a'}
              </li>
              <li>
                <span>Population: </span>
                {country?.population
                  ? country?.population.toLocaleString()
                  : 'n/a'}
              </li>
              <li>
                <span>Continent: </span>
                {country?.continent ? country?.continent : 'n/a'}
              </li>
              <li>
                <span>Region: </span>
                {country?.region ? country?.region : 'n/a'}
              </li>
              <li>
                <span>Capital: </span>
                {country?.capital ? country?.capital : 'n/a'}
              </li>
            </ul>
            <ul>
              <li>
                <span>Top Level Domain: </span>
                {country?.topLevelDomain}
              </li>
              <li>
                <span>Currencies: </span>
                {country?.currencies
                  ? country?.currencies
                      .map(currency => currency.name)
                      .join(', ')
                  : 'n/a'}
              </li>
              <li>
                <span>Languages: </span>
                {country?.languages
                  ? country?.languages.map(language => language.name).join(', ')
                  : 'n/a'}
              </li>
            </ul>
          </CountryInfo>
          <h2>Border Countries: </h2>
          {!!country?.borders?.length ? (
            <BorderingCountries>
              {country?.borders.map(border => {
                return (
                  <li key={border}>
                    <StyledLink
                      to={`/${border}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {
                        countries.find(country => country.alpha3Code === border)
                          ?.name
                      }
                    </StyledLink>
                  </li>
                );
              })}
            </BorderingCountries>
          ) : (
            'n/a'
          )}
        </StyledCountryDetails>
      </CountryWrapper>
    </Wrapper>
  );
};

export default CountryDetails;
