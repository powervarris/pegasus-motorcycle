import React from 'react';
import "./Search.css";

function Searchbar ({handleSearch, searchTerm}) {
  return (
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search motorcycles"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
  );
}

export default Searchbar;