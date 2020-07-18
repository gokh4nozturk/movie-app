import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import FilmDetail from "./components/FilmDetail";
import FilmFromGenre from "./components/FilmFromGenre";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/film/:id" component={FilmDetail} />
        <Route path="/genre/:id" component={FilmFromGenre} />
        <Route path="/search/:searchKey">
          <SearchResults />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
