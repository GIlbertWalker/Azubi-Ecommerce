import React from 'react';
import { ReactComponent as SearchIcon } from './search.svg';
import '../Css/SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search product" />
    </div>
  );
}

export default SearchBar;
