import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/NavBar/Projects";
import About from "./components/NavBar/About";
import Contact from "./components/NavBar/Contact";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar">
            <ul className="icon">Name</ul>
            <ul>
              <Link id="left" to={"/contact"}>
                Contact
              </Link>
            </ul>
            <ul>
              <Link to={"/about"}>About</Link>
            </ul>
            <ul>
              <Link to={"/home"}>Projects</Link>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
