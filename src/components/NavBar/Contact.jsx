import React, { Component } from "react";
import ProjectTryOut from "../Projects/tryout.jsx";
import IntroContent from "../About";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div class="page-wrapper">
          <IntroContent />
        </div>
        <div class="divider" />

        <ProjectTryOut />
      </div>
    );
  }
}

export default Contact;
