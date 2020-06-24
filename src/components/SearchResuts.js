import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import SidebarLeft from "./SidebarLeft";
import Film from "./Film";

const SearchResults = () => {
  let { searchKey } = useParams();
  const [searched, setSearched] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US&query=${searchKey}&page=1&include_adult=false`
    ).then((res) => res.data);
    console.log(data);
    setSearched(data.results);
    setPage(data.total_pages);
  };

  return (
    <main className="home-main">
      <div className="sidebar-left">
        <SidebarLeft />
      </div>
      <div className="view">
        <div className="view-results">
          {searched.length !== 0
            ? searched.map((item) => <Film key={item.id} {...item} />)
            : "not okay"}
        </div>
        <div className="page-control">{page}</div>
      </div>
    </main>
  );
};

export default SearchResults;
