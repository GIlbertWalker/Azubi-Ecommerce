// import React from 'react';
// import { ReactComponent as SearchIcon } from './search.svg';
import '../Css/SearchBar.css';

// function SearchBar() {

  
//   return (
//     <div className="search-bar">
//       <div class="input-group mb-3">
//           <div class="input-group-prepend">
//             <span class="input-group-text" id="basic-addon1"><SearchIcon className='search-icon'/></span>
//           </div>
//           <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
//         </div>
//     </div>
//   );
// }

// export default SearchBar;


import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchInputEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search product"
        value={searchTerm}
        onChange={handleSearchInputChange}
        onKeyDown={handleSearchInputEnter}
      />
      <button type="submit">
        <img src="/search-icon.png" alt="search icon" />
      </button>

    </div>
  );
}
