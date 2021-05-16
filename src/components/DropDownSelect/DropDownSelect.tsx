import { useSelect } from 'downshift';

import {
  Wrapper,
  StyledButton,
  StyledList,
  StyledListItem,
} from './DropDownSelect.styles';
import { RiArrowDropDownLine } from 'react-icons/ri';

const items = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

type DropDownSelectProps = {
  selectedRegion: string;
  handleSelectedItem: any;
};

const DropDownSelect = ({
  selectedRegion,
  handleSelectedItem,
}: DropDownSelectProps) => {
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

export default DropDownSelect;
