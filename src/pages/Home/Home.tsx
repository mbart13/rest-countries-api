import { Dispatch, SetStateAction } from 'react';

import Search from 'components/Search/Search';
import Select from 'components/DropDownSelect/DropDownSelect';
import CountriesList from 'components/CountriesList/CountriesList';

import { Filters } from './Home.styles';
import Country from 'models/Country';

type HomeProps = {
  searchQuery: string;
  selectedRegion: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  handleSelectedRegion: (target: any) => void;
  filteredCountries: Country[];
};

const Home: React.FC<HomeProps> = ({
  searchQuery,
  selectedRegion,
  setSearchQuery,
  handleSelectedRegion,
  filteredCountries,
}) => {
  return (
    <main>
      <Filters>
        <Search
          setSearchQuery={setSearchQuery}
          placeholder="Search for a country..."
        />
        <Select
          selectedRegion={selectedRegion}
          handleSelectedItem={handleSelectedRegion}
        />
      </Filters>
      <CountriesList
        searchQuery={searchQuery}
        selectedRegion={selectedRegion}
        countries={filteredCountries}
      />
    </main>
  );
};

export default Home;
