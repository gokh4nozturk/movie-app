import React, { useEffect, useState } from "react";

import Axios from "axios";

import SidebarLeft from "./SidebarLeft";
import Film from "./Film";
import PageChanger from "./PageChanger";
import Navigation from "./Navigation";

function FilmFromGenre({ match }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchFromGenres();
  }, [match, page]);

  useEffect(() => {
    setPage(1);
  }, []);

  const fetchFromGenres = async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${match.params.id}`
    ).then((res) => res.data);
    setData(data.results);
  };

  return (
    <>
      <Navigation />
      <div className="home-main">
        <div className="sidebar-left">
          <SidebarLeft />
        </div>
        <div className="view">
          <h2>{match.params.name}</h2>
          <div className="view-from-genres">
            {data.map((item) => (
              <Film key={item.id} {...item} />
            ))}
            <PageChanger page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilmFromGenre;
