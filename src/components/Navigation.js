import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./icons/index";

function Navigation() {
  return (
    <nav>
      <div className="nav d-flex justify-content-around bg-dark align-items-center">
        <Link to="/">
          <Logo />
        </Link>
        <input
          type="text"
          className="searchBox border-0 rounded-pill"
          placeholder="Search any movies or tv shows"
        ></input>
        <Link to="/about" className="nav-links">
          <h3>About</h3>
        </Link>
      </div>
    </nav>
  );
}
export default Navigation;
