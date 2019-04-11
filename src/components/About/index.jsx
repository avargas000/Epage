import React from "react";
import "./index.scss";
import logo from "../../assets/china.jpeg";

export default class IntroContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Welcome, Glad you're here!",

      bio:
        "Hello, my name is Ana Vargas. I am a current inter at American Express, a 25 year old undergrad Biology student who is also a Software Development student at Year up. I have experience with HTML, CSS, JavaScript, Java, and Python. While at American Express, I have learned the value of teamwork and relationship building in a corporate setting. Apart from that, I typically like to spend my weekends playing softball or snowboarding and polishing off my codes. Some of my other hobbies include traveling as I love experiencing different cultures, and collaborating with others. A great example of this would be the time I volunteered in Nepal for over a month. I got to know the local staff and collaborate on many projects. I learned a lot about their interest and background during my time abroad. My goal for this year is to network and shadow professionals in the tech industry."
    };
  }

  render() {
    return (
      <div class="row">
        <div class="column">
          <div class="left-column">
            <h3>{this.state.greeting}</h3> <br />
            <img id="icon" src={logo} alt="Self" />
          </div>
        </div>
        <div class="column">
          <div class="right-column">
            <p id="bio"> {this.state.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}
