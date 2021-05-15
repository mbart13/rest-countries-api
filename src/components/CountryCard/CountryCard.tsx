import Country from 'models/Country';
import { Container, FlagWrapper, CountryInfo } from './CountryCard.styles';

const CountryCard: React.FC<Country> = ({
  name,
  population,
  region,
  capital,
  flag,
}) => {
  return (
    <Container>
      <FlagWrapper>
        <img src={flag} alt="" aria-hidden="true" />
      </FlagWrapper>
      <CountryInfo>
        <h2>{name}</h2>
        <ul>
          <li>
            <span>Population:</span> {population}
          </li>
          <li>
            <span>Region:</span> {region}
          </li>
          <li>
            <span>Capital:</span> {capital}
          </li>
        </ul>
      </CountryInfo>
    </Container>
  );
};

export default CountryCard;
