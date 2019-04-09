import React, { Component } from "react";
import "./index.scss";
import ParallaxImage from "react-image-parallax2";

export default class AllProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Project #1",
      content:
        "This project was based on building a basic HTML/CSS/Javascript website. Prior to this project i had no experience at all building websites. I thought this was  very interesting project to work on because it gave me the opportunity to do do lots of reasearcha and something different ",
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
          <h3>{this.state.title}</h3> <br />
          <p>{this.state.content}</p>
        </div>
        <ParallaxImage
          reduceHeight={1 / 2}
          src="https://cdn.eso.org/images/screen/eso1137a.jpg"
        />
        <div>
          <h3>{this.state.titleTwo}</h3> <br />
          <p>{this.state.contentTwo}</p>
        </div>
        <ParallaxImage
          reduceHeight={1 / 2}
          src="https://cdn.eso.org/images/screen/eso1137a.jpg"
        />
        <div>
          <h3>{this.state.titleThree}</h3> <br />
          <p>{this.state.contentThree}</p>
        </div>
        <ParallaxImage
          reduceHeight={1 / 2}
          src="https://cdn.eso.org/images/screen/eso1137a.jpg"
        />
        <div id="white">
          <h3>{this.state.titleFour}</h3> <br />
          <p>{this.state.contentFour}</p>
        </div>
      </div>
    );
  }
}
