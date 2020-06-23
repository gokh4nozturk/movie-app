import React, { useState } from "react";

function SearchBox() {
  const [searchKey, setSearchKey] = useState([]);

  const Searcher = () => {};

  return (
    <div className="searchBox-container">
      <input
        value={searchKey}
        autoFocus
        type="text"
        className="searchBox"
        placeholder="Search any movies or tv shows"
        onChange={(e) => {
          setSearchKey(e.currentTarget.value);
        }}
      />
      <button
        className="searchBtn"
        type="button"
        id="button-add"
        onClick={Searcher()}
      >
        Ara
      </button>
    </div>
  );
}
export default SearchBox;
