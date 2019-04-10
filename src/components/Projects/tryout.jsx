import React, { Component } from "react";
import "./index.scss";
import ParallaxImage from "react-image-parallax2";
import { projectArray } from "./index.json";

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
                <a href={value.link} />
                <a>{value.link}</a>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default ProjectTryOut;
