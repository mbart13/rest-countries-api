import { Link } from 'react-router-dom';

import Country from 'models/Country';
import { Container, FlagWrapper, CountryInfo } from './CountryCard.styles';

const CountryCard: React.FC<Country> = ({
  name,
  population,
  region,
  capital,
  flags,
  alpha3Code,
}) => {
  return (
    <Container as="li" data-testid="country">
      <Link to={`/${alpha3Code}`} style={{ textDecoration: 'none' }}>
        <FlagWrapper>
          <img src={flags[0]} alt="" aria-hidden="true" />
        </FlagWrapper>
        <CountryInfo>
          <h2>{name}</h2>
          <ul>
            <li>
              <span>Population:</span> {population.toLocaleString()}
            </li>
            <li>
              <span>Region:</span> {region}
            </li>
            <li>
              <span>Capital:</span> {capital}
            </li>
          </ul>
        </CountryInfo>
      </Link>
    </Container>
  );
};

export default CountryCard;
