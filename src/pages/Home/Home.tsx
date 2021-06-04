import Search from 'components/Search/Search';
import DropDownSelect from 'components/DropDownSelect/DropDownSelect';
import CountriesList from 'components/CountriesList/CountriesList';
import { Filters } from './Home.styles';

const Home: React.FC = () => {
  return (
    <main>
      <Filters>
        <Search placeholder="Search for a country..." />
        <DropDownSelect />
      </Filters>
      <CountriesList />
    </main>
  );
};

export default Home;
