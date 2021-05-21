import Currency from './Currency';
import Language from './Language';

type Country = {
  alpha3Code: string;
  name: string;
  nativeName: string;
  flag: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: Currency[];
  languages: Language[];
  borders: string[];
};

export default Country;
