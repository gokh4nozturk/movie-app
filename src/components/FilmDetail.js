import React, { useState, useEffect } from "react";
import Axios from "axios";

import SidebarLeft from "./SidebarLeft";

function FilmDetail({ match }) {
  const [film, setFilm] = useState({});
  const [genres, setGenres] = useState([]);

  let hour = Math.floor(film.runtime / 60);
  let minutes = film.runtime % 60;

  useEffect(() => {
    fetchFilm();
  }, []);

  const fetchFilm = async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US`
    ).then((res) => res.data);
    console.log(data);

    setFilm(data);
    setGenres(data.genres);
  };

  return (
    <div className="home-main">
      <div className="sidebar-left">
        <SidebarLeft />
      </div>
      <div className="film-detail">
        <div
          className="card-container"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${film.backdrop_path})`,
          }}
        ></div>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-body-up">
                  <h5 className="card-title">{`${film.title}/${film.original_title}`}</h5>
                  {genres.map((item) => (
                    <p key={item.id} className="text genres">
                      {item.name}/
                    </p>
                  ))}
                  <p>{`${hour}h ${minutes}min`}</p>
                  <p className="text">{film.overview}</p>

                  <hr />
                  <p className="card-text">
                    <small className="text-muted">
                      Release date : {film.release_date}
                    </small>
                  </p>
                </div>
                <div className="card-body-low">
                  <button className="btn btn-primary btn-block">Watch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilmDetail;
