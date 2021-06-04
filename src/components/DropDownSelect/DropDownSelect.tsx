import { useSelect } from 'downshift';
import { useRecoilState } from 'recoil';
import {
  Wrapper,
  StyledButton,
  StyledList,
  StyledListItem,
} from './DropDownSelect.styles';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Regions from 'enums/Regions';
import { regionFilterState } from 'store';

const items = Object.values(Regions);

const DropDownSelect = () => {
  const [filter, setFilter] = useRecoilState(regionFilterState);
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    selectedItem: filter,
    onSelectedItemChange: (target: any) => setFilter(target.selectedItem),
  });

  return (
    <Wrapper>
      <StyledButton type="button" {...getToggleButtonProps()}>
        <span>{filter || 'Filter by Region'}</span>
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
