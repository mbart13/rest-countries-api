import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import DropDownSelect from './DropDownSelect';
import Regions from 'enums/Regions';

let selectedRegion: string;

beforeEach(() => {
  selectedRegion = 'All';
  render(<DropDownSelect />);
});

describe('DropDownSelect component', () => {
  it('renders button with correct label', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(selectedRegion);
  });

  it('renders empty list initially', () => {
    const list = screen.getByRole('listbox');
    const options = screen.queryAllByRole('options');
    expect(list).toBeInTheDocument();
    expect(options).toHaveLength(0);
  });

  it('displays all available options after clicking the button', () => {
    const button = screen.getByRole('button');
    userEvent.click(button);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(Object.keys(Regions).length);
  });

  it('changes status of the option after selecting', () => {
    const button = screen.getByRole('button');
    userEvent.click(button);
    const selectedOption = screen.getByText('Europe');
    userEvent.click(selectedOption);
    expect(selectedOption).toHaveAttribute('aria-selected', 'true');
  });

  it('displays correct option after selecting from dropdown', () => {
    const indexOfEurope = 4;
    const button = screen.getByText('All');

    userEvent.click(button);
    const options = screen.getAllByRole('option');
    const selectedOption = options[indexOfEurope];
    userEvent.click(selectedOption);

    expect(button).toHaveTextContent('Europe');
  });
});
