import React, { Component } from "react";

import "./Home.css";
import Profile from "../Profile/Profile";
import Project from "../Project/Project";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Profile />
        <Project />
      </div>
    );
  }
}

export default Home;
