import React, { Component } from "react";
import "./index.scss";
import ParallaxImage from "react-image-parallax2";
import plane from "../../../public/assets/plane.jpg";
import wood from "../../../public/assets/wood.jpeg";
import water from "../../../public/assets/water.jpg";
import projectArray from "./index.json";

export default class AllProjects extends React.Component {
  constructor(props) {
    this.state = {};
    super(props);
    this.state = {
      title: "Project #1",
      content:
        "We focused on creating a one page website for a fictional paper company that would be exciting for the end user. We utilized semantic HTML, proper element targeting in CSS, behavioral Javascript, and animations.",
      titleTwo: "Project #2",
      contentTwo: "this is where the info for project 2 goes",
      titleThree: "Project #3",
      contentThree: "this is where the info for project 2 goes",
      titleFour: "Project #4",
      contentFour: "this is where the info for project 2 goes",
      titleFive: "Project #5",
      contentFive: "this is where the info for project 2 goes",
      titleSix: "Project #6",
      contentSix: "this is where the info for project 2 goes"
    };
  }

  render() {
    console.log("This works too!");
    return (
      <div>
        <div>
          <div />
          <h3>{this.state.title}</h3> <br />
          <p>{this.state.content}</p>
        </div>
        <ParallaxImage reduceHeight={1 / 3} src={wood} />
        <div>
          <h3>{this.state.titleTwo}</h3> <br />
          <p>{this.state.contentTwo}</p>
        </div>

        <ParallaxImage reduceHeight={1 / 3} src={plane} />
        <div>
          <h3>{this.state.titleThree}</h3> <br />
          <p>{this.state.contentThree}</p>
        </div>
        <ParallaxImage reduceHeight={1 / 3} src={water} />

        <div>
          <h3>{this.state.titleFour}</h3> <br />
          <p>{this.state.contentFour}</p>
        </div>
      </div>
    );
  }
}
