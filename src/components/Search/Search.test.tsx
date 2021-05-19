import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

let mockSearchQueryHandler: jest.Mock<any, any>;
let searchPhrase: string;

beforeEach(() => {
  const placeholder = 'Search for a country...';
  searchPhrase = 'Poland';
  mockSearchQueryHandler = jest.fn();
  render(
    <Search
      placeholder={placeholder}
      searchQuery={searchPhrase}
      setSearchQuery={mockSearchQueryHandler}
    />
  );
});

describe('Search component', () => {
  it('renders correctly', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('displays search phrase correctly', () => {
    userEvent.type(screen.getByRole('textbox'), searchPhrase);
    expect(screen.getByRole('textbox')).toHaveValue('Poland');
    expect(mockSearchQueryHandler).toHaveBeenCalledTimes(6);
  });
});
