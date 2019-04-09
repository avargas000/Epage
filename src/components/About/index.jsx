import React from "react";
import "./index.scss";
import logo from "../Assets/china.jpeg";

export default class IntroContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Welcome To My ePortfolio!",
      name: "hello, my name is ana"
    };
  }

  render() {
    console.log("This works!");
    return (
      <div>
        <h3>{this.state.greeting}</h3> <br />
        <h5>{this.state.name} </h5>
        <br />
        <img id="icon" src={logo} alt="Self" />
      </div>
    );
  }
}
