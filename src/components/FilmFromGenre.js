import React from "react";

import SidebarLeft from "./SidebarLeft";

function FilmFromGenre() {
  return (
    <div className="home-main">
      <div className="sidebar-left">
        <SidebarLeft />
      </div>
      <div className="view">Buraya türe göre filmler gelecek</div>
    </div>
  );
}

export default FilmFromGenre;
