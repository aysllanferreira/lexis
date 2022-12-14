import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchBar.scss';

function SearchBar({ onChange }) {
  const [search, setSearch] = useState('');

  const handleButtonClick = () => {
    onChange(search);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a word..."
        className="SearchBar__input"
        onChange={({ target }) => {
          setSearch(target.value);
        }}
      />
      <button
        className="SearchBar__button"
        type="button"
        onClick={handleButtonClick}
      >
        Search
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
