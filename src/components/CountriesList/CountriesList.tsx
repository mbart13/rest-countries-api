import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { Wrapper, Notification } from './CountriesList.styles';
import CountryCard from 'components/CountryCard/CountryCard';
import Country from 'models/Country';
import Pagination from 'enums/Pagination';
import { filteredCountriesState, currentPageState } from 'store';

const CountriesList: React.FC = () => {
  const filteredCountries = useRecoilValue(filteredCountriesState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageClick = ({ selected }: any): void => {
    setCurrentPage(selected);
  };

  if (!filteredCountries.length) {
    return <Notification>No results found</Notification>;
  }

  const offset = currentPage * Pagination.PageSize;
  const currentPageData: Country[] = filteredCountries.slice(
    offset,
    offset + Pagination.PageSize
  );
  const pageCount = Math.ceil(filteredCountries.length / Pagination.PageSize);

  return (
    <>
      <Wrapper>
        {currentPageData.map((country: Country) => {
          return <CountryCard key={country.alpha3Code} {...country} />;
        })}
      </Wrapper>
      {filteredCountries.length > Pagination.PageSize && (
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
    </>
  );
};

export default CountriesList;
