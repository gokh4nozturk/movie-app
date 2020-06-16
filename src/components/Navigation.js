import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <h3>Logo/Home</h3>
      </Link>
      <Link to="/about">
        <h3>About</h3>
      </Link>
    </nav>
  );
}
export default Navigation;
