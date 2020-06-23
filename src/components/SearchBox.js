import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResuts";

function SearchBox() {
  const [searchKey, setSearchKey] = useState([]);

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
      <button className="searchBtn" type="button" id="button-add">
        Ara
      </button>
    </div>
  );
}
export default SearchBox;
