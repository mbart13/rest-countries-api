import { Link } from 'react-router-dom';

import Country from 'models/Country';
import { Container, FlagWrapper, CountryInfo } from './CountryCard.styles';

const CountryCard: React.FC<Country> = ({
  name,
  population,
  region,
  capital,
  flag,
  alpha3Code,
}) => {
  return (
    <Container as="li">
      <Link to={`/${alpha3Code}`} style={{ textDecoration: 'none' }}>
        <FlagWrapper>
          <img src={flag} alt="" aria-hidden="true" />
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
