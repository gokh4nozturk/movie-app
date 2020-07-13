import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

function SearchBox() {
  const { push } = useHistory();
  const { searchKey: searchKeyParam = "" } = useParams();
  const [searchKey, setSearchKey] = useState(searchKeyParam);

  const search = useCallback(() => {
    if (!searchKey) return;
    push(`/search/${searchKey}`);
  }, [searchKey, push]);

  useEffect(() => {
    const newTimeout = setTimeout(search, 500);
    return () => {
      clearTimeout(newTimeout);
    };
  }, [search, searchKey]);

  return (
    <div className="searchBox-container">
      <input
        autoFocus
        type="text"
        className="searchBox"
        placeholder="Search any movies or tv shows"
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.currentTarget.value);
        }}
      />
      <button
        className="searchBtn"
        type="button"
        id="button-add"
        onClick={search}
      >
        Ara
      </button>
    </div>
  );
}

export default SearchBox;
