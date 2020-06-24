import React, { useEffect, useState } from "react";

import Axios from "axios";

import SidebarLeft from "./SidebarLeft";
import Film from "./Film";

function FilmFromGenre({ match }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchFromGenres();
    console.log(match);
  }, [match]);

  const fetchFromGenres = async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${match.params.id}`
    ).then((res) => res.data);
    setData(data.results);
  };

  return (
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
        </div>
      </div>
    </div>
  );
}

export default FilmFromGenre;
