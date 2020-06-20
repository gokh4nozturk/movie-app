import React, { useState, useEffect } from "react";
import Axios from "axios";

import SidebarLeft from "./SidebarLeft";
import { useHistory } from "react-router-dom";

function FilmDetail({ match }) {
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetchFilm();
  }, []);

  const { goBack } = useHistory();

  const fetchFilm = async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US`
    ).then((res) => res.data);

    setFilm(data);
  };

  return (
    <div className="home-main">
      <div className="sidebar-left">
        <SidebarLeft />
      </div>
      <div className="film-detail">
        <div className="card">
          <div className="film-detail-card">
            <div className="film-detail-img">
              <img
                className="card-img"
                alt="..."
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              ></img>
            </div>
            <div className="card-body">
              <p className="card-text">Overivew : {film.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilmDetail;
