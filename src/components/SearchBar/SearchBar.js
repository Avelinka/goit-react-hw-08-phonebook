import { useDispatch, useSelector } from 'react-redux';

import { BsSearch } from 'react-icons/bs';
import { SearchLabel, SearchWrap, SearchInput } from './SearchBar.styled';

import { selectFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filterSlice';

export const SearchBar = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    dispatch(setFilter(evt.target.value.toLowerCase().trim()));
  };

  return (
    <SearchLabel>
      <SearchWrap>
        <BsSearch size="16" /> Find contacts by name
      </SearchWrap>
      <SearchInput
        name="filter"
        autoComplete="off"
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="search"
      />
    </SearchLabel>
  );
};
