import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import * as api from 'helpers/api';
import data from 'mocks/data';
import Country from 'models/Country';
import CountriesList from 'components/CountriesList/CountriesList';

jest.mock('../../helpers/api.ts');
let mockGetCountries: jest.SpyInstance<Promise<Country[]>>;

beforeEach(() => {
  mockGetCountries = jest.spyOn(api, 'getCountries');
});

describe('App component', () => {
  it('renders countries list if request succeeds', async () => {
    mockGetCountries.mockImplementationOnce((): Promise<any> => {
      return Promise.resolve(data);
    });

    render(<CountriesList />);
    const countries = await screen.findAllByTestId('country');
    expect(mockGetCountries).toBeCalledTimes(1);
    expect(countries).toHaveLength(20);
  });

  it('renders error message if request does not succeed', async () => {
    mockGetCountries.mockImplementationOnce((): Promise<any> => {
      return Promise.reject();
    });
    render(<CountriesList />);
    const errorMessage = await screen.findByText(/something went wrong/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
