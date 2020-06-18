import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Films from "./components/Films";
import FilmDetail from "./components/FilmDetail";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Films} />
        <Route path="/:id" component={FilmDetail} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
