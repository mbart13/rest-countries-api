import { render, screen } from '@testing-library/react';
import App from './App';
import * as api from './helpers/api';
import data from 'mocks/data';
import Country from 'models/Country';

jest.mock('./helpers/api.ts');
let mockGetCountries: jest.SpyInstance<Promise<Country[]>, []>;

beforeEach(() => {
  mockGetCountries = jest.spyOn(api, 'default');
});

describe('App component', () => {
  it('renders countries list if request succeeds', async () => {
    mockGetCountries.mockImplementationOnce((): Promise<any> => {
      return Promise.resolve(data);
    });

    render(<App />);

    const countries = await screen.findAllByTestId('country');
    expect(mockGetCountries).toBeCalledTimes(1);
    expect(countries).toHaveLength(20);
  });

  it('renders error message if request does not succeed', async () => {
    mockGetCountries.mockImplementationOnce((): Promise<any> => {
      return Promise.reject(data);
    });

    render(<App />);

    const errorMessage = await screen.findByText(/something went wrong/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
