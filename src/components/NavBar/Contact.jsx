import React, { Component } from "react";
import rezzy from "../../assets/rezzy.jpg";
import "./contact.scss";


// ./../../public/assets/wood.jpeg"


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
