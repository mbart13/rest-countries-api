import { Dispatch, SetStateAction } from 'react';

import Search from 'components/Search/Search';
import Select from 'components/DropDownSelect/DropDownSelect';
import CountriesList from 'components/CountriesList/CountriesList';
import ReactPaginate from 'react-paginate';
import { Filters } from './Home.styles';
import Country from 'models/Country';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Pagination from 'enums/Pagination';

type HomeProps = {
  searchQuery: string;
  selectedRegion: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  handleSelectedRegion: (target: any) => void;
  filteredCountries: Country[];
  isLoading: boolean;
  isError: boolean;
  currentPage: number;
  handlePageClick: (selected: any) => void;
};

const Home: React.FC<HomeProps> = ({
  searchQuery,
  selectedRegion,
  setSearchQuery,
  handleSelectedRegion,
  filteredCountries,
  isLoading,
  isError,
  currentPage,
  handlePageClick,
}) => {
  if (searchQuery) {
    filteredCountries = filteredCountries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const offset = currentPage * Pagination.PageSize;
  const currentPageData: Country[] = filteredCountries.slice(
    offset,
    offset + Pagination.PageSize
  );
  const pageCount = Math.ceil(filteredCountries.length / Pagination.PageSize);
  const shouldPaginationBeShown =
    !isLoading && !isError && filteredCountries.length > Pagination.PageSize;

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
          pageCount={pageCount}
          marginPagesDisplayed={Pagination.MarginPagesDisplayed}
          pageRangeDisplayed={Pagination.PageRangeDisplayed}
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
