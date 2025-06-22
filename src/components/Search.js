import React from "react";

const Search = ({ setSearchTerm }) => {
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <div className="search-term">
      <input
        type="text"
        placeholder="Recherche crypto"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleReset}>
        <i className="fa-solid fa-arrows-rotate"></i>
      </button>
    </div>
  );
};

export default Search;
