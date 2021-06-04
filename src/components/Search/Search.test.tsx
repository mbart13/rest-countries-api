import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import Search from './Search';

let searchPhrase: string;

beforeEach(() => {
  const placeholder = 'Search for a country...';
  searchPhrase = 'Poland';
  render(<Search placeholder={placeholder} />);
});

describe('Search component', () => {
  it('renders correctly', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('displays search phrase correctly', () => {
    userEvent.type(screen.getByRole('textbox'), searchPhrase);
    expect(screen.getByRole('textbox')).toHaveValue(searchPhrase);
  });

  // it('calls setSearchQuery prop 6 times', () => {
  //   userEvent.type(screen.getByRole('textbox'), searchPhrase);
  //   expect(mockSearchQueryHandler).toHaveBeenCalledTimes(searchPhrase.length);
  // });
});
