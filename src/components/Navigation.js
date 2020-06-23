import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./icons/index";
import SearchBox from "./SearchBox";

function Navigation() {
  return (
    <nav className="nav">
      <div className="part1">
        <Link to="/" className="nav-logo">
          <Logo />
        </Link>
      </div>
      <div className="part2">
        <SearchBox />
        <Link to="/" className="nav-links">
          <h3>Movies</h3>
        </Link>
        <Link to="/about" className="nav-links">
          <h3>About</h3>
        </Link>
      </div>
    </nav>
  );
}
export default Navigation;
