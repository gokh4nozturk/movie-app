import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import Film from "./Film";

function Films() {
  const [now_playing, setNow_Playing] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetchNowPlaying();
    fetchPopular();
    fetchUpcoming();
  }, []);

  const fetchNowPlaying = async () => {
    const data = await Axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US&page=1"
    ).then((res) => res.data);
    setNow_Playing(data.results);
  };
  const fetchPopular = async () => {
    const data = await Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US&page=1"
    ).then((res) => res.data);
    setPopular(data.results);
  };
  const fetchUpcoming = async () => {
    const data = await Axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US&page=1"
    ).then((res) => res.data);
    setUpcoming(data.results);
  };

  return (
    <div>
      <div className="films-slider">
        <div className="title-see-more">
          <h5 className="titles">Now Playing</h5>
        </div>
        <div className="fetched-film">
          {now_playing.map((item) => (
            <Film key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="films-slider">
        <div className="title-see-more">
          <h5 className="titles">Popular Movies</h5>
        </div>
        <div className="fetched-film">
          {popular.map((item) => (
            <Film key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="films-slider">
        <div className="title-see-more">
          <h5 className="titles">Upcoming</h5>
        </div>
        <div className="fetched-film">
          {upcoming.map((item) => (
            <Film key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Films;
