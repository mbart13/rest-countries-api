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
  handleSelectedItem: (target: any) => void;
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
      <StyledButton type="button" {...getToggleButtonProps()}>
        <span>{selectedRegion || 'Filter by Region'}</span>
        <RiArrowDropDownLine />
      </StyledButton>
      <StyledList {...getMenuProps()} isOpen={isOpen}>
        {isOpen &&
          items.map((item, index) => (
            <StyledListItem
              style={
                highlightedIndex === index
                  ? { backgroundColor: 'var(--color-highlighted)' }
                  : {}
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
