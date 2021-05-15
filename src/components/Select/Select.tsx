import { useSelect } from 'downshift';

import {
  Wrapper,
  StyledButton,
  StyledList,
  StyledListItem,
} from './Select.styles';
import { RiArrowDropDownLine } from 'react-icons/ri';

const items = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

type SelectProps = {
  selectedRegion: string;
  handleSelectedItem: any;
};

const Select = ({ selectedRegion, handleSelectedItem }: SelectProps) => {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    selectedItem: selectedRegion,
    onSelectedItemChange: handleSelectedItem,
  });

  return (
    <Wrapper>
      {/* <label {...getLabelProps()}>Filter by Region</label> */}
      <StyledButton type="button" {...getToggleButtonProps()}>
        <span>{selectedRegion || 'Filter by Region'}</span>
        <RiArrowDropDownLine />
      </StyledButton>
      <StyledList {...getMenuProps()} isOpen={isOpen}>
        {isOpen &&
          items.map((item, index) => (
            <StyledListItem
              style={
                highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </StyledListItem>
          ))}
      </StyledList>
    </Wrapper>
  );
};

export default Select;
