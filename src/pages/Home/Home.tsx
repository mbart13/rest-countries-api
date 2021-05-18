import { Dispatch, SetStateAction, useState, useEffect } from 'react';

import Search from 'components/Search/Search';
import Select from 'components/DropDownSelect/DropDownSelect';
import CountriesList from 'components/CountriesList/CountriesList';
import ReactPaginate from 'react-paginate';
import { Filters } from './Home.styles';
import Country from 'models/Country';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type HomeProps = {
  searchQuery: string;
  selectedRegion: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  handleSelectedRegion: (target: any) => void;
  filteredCountries: Country[];
  isLoading: boolean;
  isError: boolean;
};

const Home: React.FC<HomeProps> = ({
  searchQuery,
  selectedRegion,
  setSearchQuery,
  handleSelectedRegion,
  filteredCountries,
  isLoading,
  isError,
}) => {
  const COUNTRIES_PER_PAGE = 20;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedRegion, searchQuery]);

  if (searchQuery) {
    filteredCountries = filteredCountries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const offset = currentPage * COUNTRIES_PER_PAGE;
  const currentPageData = filteredCountries.slice(
    offset,
    offset + COUNTRIES_PER_PAGE
  );
  const pageCount = Math.ceil(filteredCountries.length / COUNTRIES_PER_PAGE);
  const shouldPaginationBeShown =
    !isLoading && !isError && filteredCountries.length > COUNTRIES_PER_PAGE;

  return (
    <main>
      <Filters>
        <Search
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          placeholder="Search for a country..."
        />
        <Select
          selectedRegion={selectedRegion}
          handleSelectedItem={handleSelectedRegion}
        />
      </Filters>
      <CountriesList
        selectedRegion={selectedRegion}
        countries={currentPageData}
        isLoading={isLoading}
        isError={isError}
      />
      {shouldPaginationBeShown && (
        <ReactPaginate
          previousLabel={<FaChevronLeft />}
          nextLabel={<FaChevronRight />}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          activeClassName={'active'}
          containerClassName={'pagination'}
          forcePage={currentPage}
        />
      )}
    </main>
  );
};

export default Home;
