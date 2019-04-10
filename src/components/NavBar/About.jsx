import React, { Component } from "react";
import IntroContent from "../About";
import "../About/index.scss";
import ProjectTryOut from "../Projects/tryout.jsx";

class About extends Component {
  render() {
    return (
      <div class="page-wrapper">
        <IntroContent />
      </div>
    );
  }
}

export default About;
