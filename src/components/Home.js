import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidebarLeft from "./SidebarLeft";
import Films from "./Films";
import FilmDetail from "./FilmDetail";

function Home() {
  return (
    <Router>
      <main className="home-main">
        <div className="sidebar-left">
          <SidebarLeft />
        </div>
        <div className="view">
          <Switch>
            <Route path="/" exact component={Films} />
            <Route path="/:id" component={FilmDetail} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}
export default Home;
