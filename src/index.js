import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/NavBar/Projects";
import About from "./components/NavBar/About";
import Contact from "./components/NavBar/Contact";
import alogo from "../../../public/assets/a.png";
import vlogo from "../../../public/assets/v.png";
import "./components/NavBar/style.scss";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <nav class="navbar">
          <li id="lefty">
            <img id="navicon" src={alogo} />
          </li>
          <li id="lefty">
            <img id="navicon" src={vlogo} />
          </li>
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
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
