import { useParams, useHistory } from 'react-router-dom';
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

const CountryDetails: React.FC<{ countries: Country[] }> = ({ countries }) => {
  const { code } = useParams<{ code: string }>();
  let history = useHistory();
  const country: Country | undefined = countries.find(
    country => country.alpha3Code === code
  );

  return (
    <Wrapper>
      <Button handleClick={history.goBack}>
        <BsArrowLeft size={20} />
        Back
      </Button>
      <CountryWrapper>
        <Flag>
          <img src={country?.flag} alt="" aria-hidden="true" />
        </Flag>
        <StyledCountryDetails>
          <h2>{country?.name}</h2>
          <CountryInfo>
            <ul>
              <li>
                <span>Native Name: </span>
                {country?.nativeName}
              </li>
              <li>
                <span>Population: </span>
                {country?.population.toLocaleString()}
              </li>
              <li>
                <span>Region: </span>
                {country?.region}
              </li>
              <li>
                <span>Sub region: </span>
                {country?.subregion}
              </li>
              <li>
                <span>Capital: </span>
                {country?.capital}
              </li>
            </ul>
            <ul>
              <li>
                <span>Top Level Domain: </span>
                {country?.topLevelDomain}
              </li>
              <li>
                <span>Currencies: </span>
                {country?.currencies.map(currency => currency.name).join(', ')}
              </li>
              <li>
                <span>Languages: </span>
                {country?.languages.map(language => language.name).join(', ')}
              </li>
            </ul>
          </CountryInfo>
          <h3>Border Countries: </h3>
          {!!country?.borders.length ? (
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
            'N/A'
          )}
        </StyledCountryDetails>
      </CountryWrapper>
    </Wrapper>
  );
};

export default CountryDetails;
