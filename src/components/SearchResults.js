import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import Navigation from "./Navigation";
import SidebarLeft from "./SidebarLeft";
import Film from "./Film";
import PageChanger from "./PageChanger";

const SearchResults = () => {
  const { searchKey = "" } = useParams();
  const [searched, setSearched] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US&query=${searchKey}&page=${page}&include_adult=false`
    ).then((res) => res.data);

    setSearched(data.results);
  }, [page, searchKey]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Navigation />
      <main className="home-main">
        <div className="sidebar-left">
          <SidebarLeft />
        </div>
        <div className="view">
          <div className="view-results">
            {searched.length > 0 &&
              searched.map((item) => <Film key={item.id} {...item} />)}
            <PageChanger page={page} setPage={setPage} />
          </div>
        </div>
      </main>
    </>
  );
};

export default SearchResults;
