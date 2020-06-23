import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";

import SidebarLeft from "./SidebarLeft";
import { useHistory } from "react-router-dom";

function FilmDetail({ match }) {
  const { goBack } = useHistory();
  const [film, setFilm] = useState({});
  const [video, setVideo] = useState({});
  const [genres, setGenres] = useState([]);

  let hour = film ? Math.floor(film.runtime / 60) : "";
  let minutes = film ? film.runtime % 60 : "";

  const fetchFilm = useCallback(async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US`
    ).then((res) => res.data);
    setFilm(data);
    setGenres(data.genres);
  }, [match]);

  const fetchVideo = useCallback(async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US`
    ).then((res) => res.data);
    setVideo(data.results[0]);
  }, [match]);

  useEffect(() => {
    fetchFilm();
    fetchVideo();
  }, [fetchFilm, fetchVideo]);

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
                  <iframe
                    key={video.id}
                    title={video.name}
                    width="540"
                    height="230"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  <button
                    className="btn btn-primary btn-block"
                    onClick={goBack}
                  >
                    Go Home
                  </button>
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
