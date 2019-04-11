import React, { Component } from "react";
import rezzy from "../../../public/assets/rezzy.jpg";
import "./contact.scss";

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="page-wrapper">
          <img id="rez" src={rezzy} alt="" />
        </div>
      </div>
    );
  }
}

export default Contact;
