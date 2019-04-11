import React, { Component } from "react";
import "./index.scss";
import ParallaxImage from "react-image-parallax2";
import { projectArray } from "./index.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import IntroContent from "../About";

class ProjectTryOut extends Component {
  render() {
    console.log("PLS work too!");
    return (
      <div>
        {projectArray.map(value => {
          if (value.type === "parallax")
            return <ParallaxImage reduceHeight={1 / 2} src={value.src} />;
          else {
            return (
              <div id="project">
                <h2>{value.title}</h2>
                <p>{value.content}</p>
                <a href={value.link} class="ProjectButton" role="button">
                  ProjectWebsite
                </a>

                <a href={value.git} class="GitHubButton" role="button">
                  Visit GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ana-vargas-9a085754/"
                  class="LinkedInButton"
                  role="button"
                >
                  Visit LinkedIn
                </a>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default ProjectTryOut;
