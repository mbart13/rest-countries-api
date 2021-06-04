import { render, screen } from 'test-utils';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Theme from 'enums/Theme';

let mockThemeToggler: jest.Mock<any, any>;

beforeEach(() => {
  const theme = Theme.Dark;
  mockThemeToggler = jest.fn();
  render(
    <Router>
      <Header toggleTheme={mockThemeToggler} theme={theme} />
    </Router>
  );
});

describe('Header component', () => {
  it('renders home link correctly', () => {
    const homeLink = screen.getByText(/where in the world?/i);
    expect(homeLink).toBeInTheDocument();
  });

  it('renders correct theme on the toggle button', () => {
    const toggleBtn = screen.getByRole('button');
    expect(toggleBtn).toHaveTextContent('Light Mode');
  });

  it('changes theme after clicking the button', () => {
    userEvent.click(screen.getByRole('button'));
    expect(mockThemeToggler).toHaveBeenCalledTimes(1);
  });
});
