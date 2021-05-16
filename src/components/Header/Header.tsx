import { IoMoonOutline } from 'react-icons/io5';
import { FiSun } from 'react-icons/fi';
import Theme from 'enums/Theme';

import {
  StyledHeader,
  Wrapper,
  StyledHeading,
  ToggleButton,
} from './Header.styles';

const Header: React.FC<{ toggleTheme: () => void; theme: string }> = ({
  toggleTheme,
  theme,
}) => {
  return (
    <StyledHeader>
      <Wrapper>
        <StyledHeading>Where in the world?</StyledHeading>
        <ToggleButton onClick={toggleTheme}>
          {theme === Theme.Light ? <IoMoonOutline /> : <FiSun />}
          <p>{theme === Theme.Light ? 'Dark Mode' : 'Light Mode'}</p>
        </ToggleButton>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
