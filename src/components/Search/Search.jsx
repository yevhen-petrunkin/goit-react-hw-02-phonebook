// import PropTypes from 'prop-types';

import { SearchLabel, SearchInput } from './Search.styled';

export const Search = ({ searchLabel }) => {
  return (
    <SearchLabel>
      {searchLabel}
      <SearchInput type="text"></SearchInput>
    </SearchLabel>
  );
};
