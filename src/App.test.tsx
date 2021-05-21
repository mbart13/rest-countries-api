import { render, screen } from '@testing-library/react';
import App from './App';
import * as api from './helpers/api';
import data from 'mocks/data';

jest.mock('./helpers/api.ts');
describe('App component', () => {
  it('renders countries list if request succeeds', async () => {
    const mockGetCountries = jest.spyOn(api, 'default');
    mockGetCountries.mockImplementationOnce((): Promise<any> => {
      return Promise.resolve(data);
    });

    render(<App />);

    const countries = await screen.findAllByTestId('country');
    expect(mockGetCountries).toBeCalledTimes(1);
    expect(countries).toHaveLength(20);
  });
});
