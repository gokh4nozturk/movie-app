import React, { useState, useEffect } from "react";
import Axios from "axios";

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
      <h1>Popular</h1>
      <div className="films-popular">
        {popular.map((item) => {
          return (
            <div key={item.id} className="card">
              <img
                alt="asdfaf"
                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
              ></img>
              <div className="card-body">
                <p className="card-text">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Films;
