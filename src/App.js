import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import FilmDetail from "./components/FilmDetail";
import FilmFromGenre from "./components/FilmFromGenre";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/film/:id" component={FilmDetail} />
        <Route path="/genre/:id" component={FilmFromGenre} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
