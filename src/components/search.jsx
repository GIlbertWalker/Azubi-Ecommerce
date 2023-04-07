import React from 'react';
import './search.svg';
import '../Css/SearchBar.css';

export default function SearchBar({ onSearch }) {
return (
  <div className="search-container">
    <div class="search-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27c1.2-1.39 1.95-3.18 1.95-5.23c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8c2.05 0 3.93-.75 5.4-1.99l.27.28v.79l5 4.99l1.49-1.48l-4.99-5zm-7.5 0c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </div>
      <input type="text" class="form-control" placeholder="Search products" aria-label="Username" aria-describedby="basic-addon1"/>
  </div>
);
}
