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
      <div className="view">
        <div className="film-detail">
          <h1 className="film-detail-title">{film.title}</h1>
          <p className="film-detail-overview">Overivew : {film.overview}</p>
          <div className="card">
            <img
              className="film-detail-img"
              alt="..."
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            ></img>
          </div>
        </div>
        <button className="btn btn-primary" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}
export default FilmDetail;
