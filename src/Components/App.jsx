import React from "react";
import "../style/scss/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../Pages/Home.jsx";
import Dogs from "../Pages/Dogs.jsx";
import Cats from "../Pages/Cats.jsx";
import Donate from "../Pages/Donate";
import About from "../Pages/About";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App contents">
        <Header />
        <main>
          <Route path="/" exact render={() => <Home />} />

          <Route path="/Gatos" component={Cats} />
          <Route path="/Cachorros" component={Dogs} />
          <Route path="/donate" component={Donate} />
          <Route path="/about" component={About} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
