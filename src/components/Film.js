import React from "react";
import { Link } from "react-router-dom";

function Film(item) {
  return (
    <Link to={item.id} className="card">
      <div className="card">
        <img
          alt="..."
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
        />
        <div className="card-img-text">
          <p className="card-text">{item.title}</p>
        </div>
      </div>
    </Link>
  );
}
export default Film;
