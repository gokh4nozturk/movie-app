import React, { useState, useEffect } from "react";
import Axios from "axios";

import Film from "./Film";

function Films() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US&page=1"
    ).then((res) => res.data);
    setPopular(data.results);
    console.log(data.results);
  };

  return (
    <div>
      <div className="films-slider">
        <div className="title-see-more">
          <h5 className="titles">Popular Movies</h5>
          <p className="see-more">See More</p>
        </div>
        <div className="fetched-film">
          {popular.map((item) => (
            <Film key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="films-slider">
        <div className="title-see-more">
          <h5 className="titles">Now Playing</h5>
          <p className="see-more">See More</p>
        </div>
        <div className="fetched-film">
          {popular.map((item) => (
            <Film key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="films-slider">
        <div className="title-see-more">
          <h5 className="titles">Now Playing</h5>
          <p className="see-more">See More</p>
        </div>
        <div className="fetched-film">
          {popular.map((item) => (
            <Film key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="films-slider">
        <div className="title-see-more">
          <h5 className="titles">Now Playing</h5>
          <p className="see-more">See More</p>
        </div>
        <div className="fetched-film">
          {popular.map((item) => (
            <Film key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="films-slider">
        <div className="title-see-more">
          <h5 className="titles">Now Playing</h5>
          <p className="see-more">See More</p>
        </div>
        <div className="fetched-film">
          {popular.map((item) => (
            <Film key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Films;
